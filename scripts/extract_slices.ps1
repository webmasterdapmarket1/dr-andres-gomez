<#
.SYNOPSIS
    Asset Extraction Pipeline for Dr. Andrés Gómez Website.
    Extracts high-resolution clinical photographs, portraits, facility images,
    and before/after cases from design slices in design/slices/ to public/images/.

.DESCRIPTION
    Uses Windows native System.Drawing assembly to perform bicubic high-quality crops.
    Features:
    - Accurate pixel coordinates avoiding unwanted borders and text clipping.
    - Automatic vertical seam stitching for assets spanning slice boundaries (e.g. slice_3 and slice_4 for team portraits).
    - Dual naming aliases (canonical and alternative paths) to prevent broken links across M2, M3, and M4.
#>

param(
    [string]$TargetDir = "",
    [string]$SliceDir  = ""
)

if ([string]::IsNullOrWhiteSpace($TargetDir)) {
    $TargetDir = Join-Path $PSScriptRoot "..\public\images"
}
if ([string]::IsNullOrWhiteSpace($SliceDir)) {
    $SliceDir = Join-Path $PSScriptRoot "..\design\slices"
}

$TargetDir = [System.IO.Path]::GetFullPath($TargetDir)
$SliceDir  = [System.IO.Path]::GetFullPath($SliceDir)

Add-Type -AssemblyName System.Drawing

# 1. Ensure target directories exist
if (!(Test-Path $TargetDir)) { 
    New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null 
}
$resultsDir = Join-Path $TargetDir "results"
if (!(Test-Path $resultsDir)) { 
    New-Item -ItemType Directory -Path $resultsDir -Force | Out-Null 
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "Starting Asset Extraction Pipeline" -ForegroundColor Cyan
Write-Host "Source directory: $SliceDir" -ForegroundColor Cyan
Write-Host "Target directory: $TargetDir" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 2. Helper: Single-Slice Crop
function Crop-SingleSlice {
    param(
        [string]$SliceFile,
        [int]$X,
        [int]$Y,
        [int]$Width,
        [int]$Height,
        [string[]]$OutputPaths
    )
    
    $fullSlicePath = Join-Path $SliceDir $SliceFile
    if (!(Test-Path $fullSlicePath)) {
        Write-Error "Slice file not found: $fullSlicePath"
        return
    }
    
    $src = [System.Drawing.Bitmap]::FromFile($fullSlicePath)
    $srcRect = [System.Drawing.Rectangle]::new($X, $Y, $Width, $Height)
    $dest = [System.Drawing.Bitmap]::new($Width, $Height)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    $destRect = [System.Drawing.Rectangle]::new(0, 0, $Width, $Height)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    foreach ($outPath in $OutputPaths) {
        $parent = Split-Path -Parent $outPath
        if (!(Test-Path $parent)) { New-Item -ItemType Directory -Path $parent -Force | Out-Null }
        $dest.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
        Write-Host "  -> Created: $outPath ($($Width)x$($Height))" -ForegroundColor Green
    }
    
    $dest.Dispose()
    $src.Dispose()
}

# 3. Helper: Stitched Cross-Slice Crop (combines bottom of slice A and top of slice B)
function Crop-StitchedSlice {
    param(
        [string]$TopSliceFile,
        [string]$BottomSliceFile,
        [int]$X,
        [int]$TopStartY,
        [int]$BottomEndY,
        [int]$Width,
        [string[]]$OutputPaths
    )
    
    $topPath = Join-Path $SliceDir $TopSliceFile
    $bottomPath = Join-Path $SliceDir $BottomSliceFile
    
    if (!(Test-Path $topPath) -or !(Test-Path $bottomPath)) {
        Write-Error "One or both slices not found: $topPath, $bottomPath"
        return
    }
    
    $topSrc = [System.Drawing.Bitmap]::FromFile($topPath)
    $bottomSrc = [System.Drawing.Bitmap]::FromFile($bottomPath)
    
    $topH = $topSrc.Height - $TopStartY
    $bottomH = $BottomEndY
    $totalH = $topH + $bottomH
    
    $dest = [System.Drawing.Bitmap]::new($Width, $totalH)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    # 1. Draw top portion from TopSlice
    $srcRectTop = [System.Drawing.Rectangle]::new($X, $TopStartY, $Width, $topH)
    $destRectTop = [System.Drawing.Rectangle]::new(0, 0, $Width, $topH)
    $g.DrawImage($topSrc, $destRectTop, $srcRectTop, [System.Drawing.GraphicsUnit]::Pixel)
    
    # 2. Draw bottom portion from BottomSlice
    $srcRectBottom = [System.Drawing.Rectangle]::new($X, 0, $Width, $bottomH)
    $destRectBottom = [System.Drawing.Rectangle]::new(0, $topH, $Width, $bottomH)
    $g.DrawImage($bottomSrc, $destRectBottom, $srcRectBottom, [System.Drawing.GraphicsUnit]::Pixel)
    
    $g.Dispose()
    
    foreach ($outPath in $OutputPaths) {
        $parent = Split-Path -Parent $outPath
        if (!(Test-Path $parent)) { New-Item -ItemType Directory -Path $parent -Force | Out-Null }
        $dest.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
        Write-Host "  -> Created (Stitched): $outPath ($($Width)x$($totalH))" -ForegroundColor Green
    }
    
    $dest.Dispose()
    $topSrc.Dispose()
    $bottomSrc.Dispose()
}

# =========================================================================
# ASSET SPECIFICATIONS (12 Core Key Assets + Aliases)
# =========================================================================

# 1. dr-gomez-hero.png (White doctor coat portrait from slice_1)
Write-Host "Extracting 1/8: Hero Dr. Gomez Portrait..." -ForegroundColor Yellow
Crop-SingleSlice -SliceFile "slice_1.png" -X 1340 -Y 210 -Width 690 -Height 710 -OutputPaths @(
    (Join-Path $TargetDir "dr-gomez-hero.png")
)
# Optional full card variant for hero graphic
Crop-SingleSlice -SliceFile "slice_1.png" -X 1334 -Y 145 -Width 700 -Height 980 -OutputPaths @(
    (Join-Path $TargetDir "dr-gomez-hero-card.png")
)

# 2. dr-gomez-scrubs.png (Navy scrubs with SCCP credential, stitched across slice_3 & slice_4)
Write-Host "Extracting 2/8: Dr. Gomez Scrubs Portrait (Stitched)..." -ForegroundColor Yellow
Crop-StitchedSlice -TopSliceFile "slice_3.png" -BottomSliceFile "slice_4.png" -X 175 -TopStartY 1915 -BottomEndY 300 -Width 370 -OutputPaths @(
    (Join-Path $TargetDir "dr-gomez-scrubs.png")
)

# 3. quirofano-acreditado.png (Accredited OR with surgical team from slice_2)
Write-Host "Extracting 3/8: Quirofano Acreditado..." -ForegroundColor Yellow
Crop-SingleSlice -SliceFile "slice_2.png" -X 195 -Y 995 -Width 816 -Height 345 -OutputPaths @(
    (Join-Path $TargetDir "quirofano-acreditado.png")
)

# 4. consulta-examen.png (Metabolic examination and consultation from slice_2)
Write-Host "Extracting 4/8: Consulta & Examen..." -ForegroundColor Yellow
Crop-SingleSlice -SliceFile "slice_2.png" -X 208 -Y 0 -Width 700 -Height 530 -OutputPaths @(
    (Join-Path $TargetDir "consulta-examen.png")
)

# 5. tensamax-procedimiento.png / tensamax-tratamiento.png (Tensamax RF from slice_2)
Write-Host "Extracting 5/8: Tensamax Tratamiento..." -ForegroundColor Yellow
Crop-SingleSlice -SliceFile "slice_2.png" -X 1160 -Y 998 -Width 818 -Height 344 -OutputPaths @(
    (Join-Path $TargetDir "tensamax-procedimiento.png"),
    (Join-Path $TargetDir "tensamax-tratamiento.png")
)

# 6. dora-calderon.png (Head nurse Dora Calderón, stitched across slice_3 & slice_4)
Write-Host "Extracting 6/8: Dora Calderón (Stitched)..." -ForegroundColor Yellow
Crop-StitchedSlice -TopSliceFile "slice_3.png" -BottomSliceFile "slice_4.png" -X 650 -TopStartY 1915 -BottomEndY 300 -Width 380 -OutputPaths @(
    (Join-Path $TargetDir "dora-calderon.png")
)

# 7. recepcion-torre-zentai.png / torre-zentai-recepcion.png (Zentai reception desk, stitched across slice_3 & slice_4)
Write-Host "Extracting 7/8: Torre Zentai Recepción (Stitched)..." -ForegroundColor Yellow
Crop-StitchedSlice -TopSliceFile "slice_3.png" -BottomSliceFile "slice_4.png" -X 1590 -TopStartY 1915 -BottomEndY 300 -Width 380 -OutputPaths @(
    (Join-Path $TargetDir "recepcion-torre-zentai.png"),
    (Join-Path $TargetDir "torre-zentai-recepcion.png")
)

# 8. map-torre-zentai.png / mapa-zentai.png (Zentai Bogotá Map graphic from slice_6)
Write-Host "Extracting 8/8: Torre Zentai Map..." -ForegroundColor Yellow
Crop-SingleSlice -SliceFile "slice_6.png" -X 1120 -Y 0 -Width 894 -Height 708 -OutputPaths @(
    (Join-Path $TargetDir "map-torre-zentai.png"),
    (Join-Path $TargetDir "mapa-zentai.png")
)

# =========================================================================
# CLINICAL BEFORE/AFTER RESULTS (4 Cases from slice_3)
# =========================================================================
Write-Host "Extracting Clinical Results Cases (4 pairs)..." -ForegroundColor Yellow

# 9. Caso Lipólisis Láser (x=175, y=330, w=567, h=348)
Crop-SingleSlice -SliceFile "slice_3.png" -X 175 -Y 330 -Width 567 -Height 348 -OutputPaths @(
    (Join-Path $resultsDir "before-after-lipolisis.png"),
    (Join-Path $TargetDir "caso-lipolisis.png")
)

# 10. Caso Abdominoplastia (x=1145, y=330, w=560, h=348)
Crop-SingleSlice -SliceFile "slice_3.png" -X 1145 -Y 330 -Width 560 -Height 348 -OutputPaths @(
    (Join-Path $resultsDir "before-after-abdominoplastia.png"),
    (Join-Path $TargetDir "caso-abdominoplastia.png")
)

# 11. Caso Pexia Mamaria (x=175, y=790, w=567, h=345)
Crop-SingleSlice -SliceFile "slice_3.png" -X 175 -Y 790 -Width 567 -Height 345 -OutputPaths @(
    (Join-Path $resultsDir "before-after-pexia.png"),
    (Join-Path $TargetDir "caso-pexia.png")
)

# 12. Caso Rinoplastia Estructural (x=1145, y=790, w=560, h=345)
Crop-SingleSlice -SliceFile "slice_3.png" -X 1145 -Y 790 -Width 560 -Height 345 -OutputPaths @(
    (Join-Path $resultsDir "before-after-rinoplastia.png"),
    (Join-Path $TargetDir "caso-rinoplastia.png")
)

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "All assets successfully extracted with high-quality bicubic interpolation." -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
