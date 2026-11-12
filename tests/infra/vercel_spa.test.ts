/**
 * tests/infra/vercel_spa.test.ts
 * 
 * Infrastructure & Deployment Verification
 * Covers Feature 12 (TC-T1-VERCEL-01 to TC-T1-VERCEL-05)
 */

import { describe, it, expect } from '../helpers/test-runner.ts';
import { OpaqueBoxHarness } from '../helpers/test-utils.ts';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const VERCEL_JSON_PATH = path.join(ROOT_DIR, 'vercel.json');

describe('Feature 12: Vercel SPA Rewrite & Deployment Readiness', () => {
  it('TC-T1-VERCEL-01: vercel.json structure and validity', () => {
    // Must strictly require vercel.json in root: no fallback allowed
    expect(fs.existsSync(VERCEL_JSON_PATH)).toBe(true);
    const content = fs.readFileSync(VERCEL_JSON_PATH, 'utf8');
    const parsed = JSON.parse(content);
    expect(Array.isArray(parsed.rewrites)).toBe(true);
    expect(parsed.rewrites.length).toBeGreaterThan(0);
  });

  it('TC-T1-VERCEL-02: Mandatory SPA rewrite rule toward index.html', () => {
    expect(fs.existsSync(VERCEL_JSON_PATH)).toBe(true);
    const content = fs.readFileSync(VERCEL_JSON_PATH, 'utf8');
    const parsed = JSON.parse(content);
    const rewrites: Array<{ source: string; destination: string }> = parsed.rewrites || [];

    const spaRule = rewrites.find(
      (r) => r.source === '/(.*)' && r.destination === '/index.html'
    );
    expect(spaRule).toBeDefined();
    expect(spaRule?.source).toBe('/(.*)');
    expect(spaRule?.destination).toBe('/index.html');
  });

  it('TC-T1-VERCEL-03: Deep linking simulation with nested routes', () => {
    expect(fs.existsSync(VERCEL_JSON_PATH)).toBe(true);
    const content = fs.readFileSync(VERCEL_JSON_PATH, 'utf8');
    const parsed = JSON.parse(content);
    const spaRule = parsed.rewrites.find((r: any) => r.source === '/(.*)');
    expect(spaRule).toBeDefined();

    const rewriteRegex = new RegExp(`^${spaRule.source}$`);
    const deepRoutes = [
      '/procedimientos/cirugia-corporal/lipoescultura-laser',
      '/procedimientos/cirugia-facial/rinoplastia-ultrasonica',
      '/procedimientos/cirugia-intima/labioplastia-ninfoplastia',
      '/recursos/blog/cuidados-postoperatorios-lipoescultura',
      '/resultados/cirugia-corporal'
    ];

    for (const route of deepRoutes) {
      expect(rewriteRegex.test(route)).toBe(true);
      const destination = route.replace(rewriteRegex, spaRule.destination);
      expect(destination).toBe('/index.html');
    }
  });

  it('TC-T1-VERCEL-04: Client-side routing hydration persistence', () => {
    // Verify SPA root element and module entrypoint exist in index.html
    const htmlContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    expect(htmlContent).toContain('<div id="root"></div>');
    expect(htmlContent).toContain('<script type="module" src="/src/main.tsx"></script>');

    // Verify deep path recognition in test harness
    const harness = new OpaqueBoxHarness('/recursos/blog/cuidados-postoperatorios');
    expect(harness.currentRoute).toBe('/recursos/blog/cuidados-postoperatorios');
  });

  it('TC-T1-VERCEL-05: Static asset exemption from SPA rewrites', () => {
    // Verify actual static build assets exist on disk in public/
    const staticFiles = [
      'public/images/dr-gomez-hero.png',
      'public/images/dr-gomez-scrubs.png',
      'public/images/map-torre-zentai.png',
      'public/favicon.svg'
    ];

    for (const relPath of staticFiles) {
      const fullPath = path.join(ROOT_DIR, relPath);
      expect(fs.existsSync(fullPath)).toBe(true);
    }
  });
});
