# Sistema de Diseño y Estilos Globales — Sitio Web Oficial Dr. Andrés Gómez
> **Referencia de Proyecto:** Adaptación y evolución del mockup de alta fidelidad (`propuesta para doctor.pdf`) y directrices estéticas (`Estilos visuales para sitio web.md`) ubicados en el directorio `/design`.  
> **Enfoque UX/UI:** Estética editorial médica de lujo, minimalista, humana y orientada a la conversión sin fricción (Regla cromática 85 / 10 / 5, accesibilidad WCAG 2.1 AA y estándares de bioética médica).

---

## 1. Fundamentos de Identidad y Estrategia de Marca

### 1.1 Transición Estratégica: De Clínica a Marca Personal Médica
El cliente seleccionó la estructura del mockup original desarrollado para la clínica para ser la base del **sitio web oficial del Dr. Andrés Gómez**. Esta transición exige calibrar la narrativa visual:
* **El Dr. Andrés Gómez es el epicentro de confianza:** No es una institución impersonal; el sitio proyecta la experiencia de más de 29 años, la dirección científica y el criterio estético y reconstructivo del doctor.
* **Tono de Marca:** Riguroso, ético, sofisticado, cálido y transparente.
* **Humanización real:** Fotografía auténtica del Dr. Gómez en consulta, quirófano e instalaciones de **Torre Zentai (Bogotá)**, desterrando clichés de banco de imágenes o montajes recargados.

### 1.2 Principios Rectores UX/UI
1. **Claridad Diagnóstica y Amplitud ("Aire"):** Grandes espacios negativos (blancos y neutros cálidos), tipografía legible y microcopy conciso para transmitir serenidad a pacientes que buscan procedimientos sensibles.
2. **Jerarquía Visual Estricta (Regla 85 / 10 / 5):**
   * **85% Neutros Cálidos y Blancos:** Dominan el lienzo (`#F4EFE9`, `#FFFFFF`, `#FAF7F2`) brindando limpieza sin la frialdad del blanco hospitalario tradicional.
   * **10% Contraste de Lectura:** Títulos y textos en neutro carbón profundo (`#111625` y `#000000`).
   * **5% Acento Azul Estratégico:** Uso quirúrgico y dosificado de la gama azul (`#2243A9`, `#202B53`, `#CAE7F4`) reservado para botones de acción, números de impacto, badges y palabras clave.
3. **Conversión Médica de Doble Vía (Sin Fricción):**
   * *Vía Rápida:* Contacto directo a WhatsApp para dudas inmediatas y atención de enfermería.
   * *Vía Estructurada:* Formulario simplificado de valoración presencial o teleconsulta diagnóstica (con confirmación en < 15 minutos en horario hábil).
4. **Ética Médica Visual:** Casos clínicos (Antes y Después) sin marcos invasivos, con datos objetivos (tiempo postoperatorio, peso, edad) y aviso legal visible.

---

## 2. Paleta de Color y Tokens Semánticos

El sistema de color se estructura mediante tokens semánticos listos para CSS Variables y Tailwind CSS:

```
┌────────────────────────────────────────────────────────────────────────┐
│  FONDO Y SUPERFICIES (85%)                                             │
│  #F4EFE9 (Neutro Cálido) | #FFFFFF (Superficie Elevada) | #FAF7F2 (Luz) │
├────────────────────────────────────────────────────────────────────────┤
│  TEXTO Y CONTRASTE (10%)                                               │
│  #111625 (Charcoal Principal) | #475467 (Secundario) | #717680 (Muted) │
├────────────────────────────────────────────────────────────────────────┤
│  ACENTOS ESTRATÉGICOS (5%)                                             │
│  #2243A9 (Azul CTA) | #202B53 (Navy Profundo) | #CAE7F4 (Azul Suave)   │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Especificación Detallada de Colores

| Token Semántico | Nombre | HEX | Uso en Interfaz | Ratio Contraste WCAG |
|---|---|---|---|---|
| `color-bg-base` | Neutro Cálido (Arena) | `#F4EFE9` | Fondo general de páginas, secciones alternas y banners suaves | Base |
| `color-bg-surface` | Blanco Puro | `#FFFFFF` | Tarjetas de procedimientos, contenedores, inputs y modales | 1.05:1 vs base |
| `color-bg-subtle` | Crema Suave | `#FAF7F2` | Fondos de descanso visual, tags y áreas secundarias | Base suave |
| `color-bg-dark` | Navy Quirúrgico Oscuro | `#0E1424` | Fondos de fotografía técnica / quirófano o footer | > 14:1 vs blanco |
| `color-text-main` | Carbón Quirúrgico | `#111625` | Títulos principales (H1-H3), números grandes y destacados | 13.8:1 sobre `#F4EFE9` (AAA) |
| `color-text-body` | Gris Grafito | `#475467` | Párrafos, descripciones y microcopy | 5.8:1 sobre `#F4EFE9` (AA) |
| `color-text-muted` | Gris Neutro Muted | `#717680` | Etiquetas secundarias, notas al pie y placeholders | 4.6:1 sobre blanco (AA) |
| `color-brand-primary`| Azul Corporativo | `#2243A9` | **CTA principal**, enlaces activos, flechas e indicadores | 6.2:1 sobre blanco (AA) |
| `color-brand-hover`  | Azul Royal Oscuro | `#1A3587` | Estado hover de botones y elementos clickeables | 8.1:1 sobre blanco (AAA) |
| `color-brand-deep`   | Azul Navy Profundo | `#202B53` | Subtítulos institucionales, cabeceras de tablas y footer | 10.4:1 sobre `#F4EFE9` (AAA) |
| `color-brand-soft`   | Azul Cielo Glaciar | `#CAE7F4` | Fondo de badges, píldoras informativas y franja de marca | Base de tags |
| `color-brand-soft-text`| Azul Marina Texto | `#10365C` | Texto dentro de fondos `#CAE7F4` (garantiza legibilidad) | 7.9:1 sobre `#CAE7F4` (AAA) |
| `color-border`       | Borde Neutro | `#E3DCD3` | Delimitadores de tarjetas, divisores horizontales | Decorativo |
| `color-border-focus` | Azul Foco | `#2243A9` | Borde activo de inputs y accesibilidad focus-visible | 3:1 mínimo UI |
| `color-success`      | Verde WhatsApp / Salud | `#25D366` / `#12B76A` | Botón flotante WhatsApp y estados de confirmación | Accesible |
| `color-warning`      | Ámbar Clínico | `#F79009` | Alertas de cupos y avisos de preparación previa | Accesible |

### 2.2 Reglas Críticas de Aplicación del Color
* **Dónde SÍ aplicar el azul:** Botones de llamado a la acción (CTA), viñetas de listas especializadas, cifras estadísticas clave (`+29`, `+18.000`), etiquetas de procedimientos, flechas interactivas y acentos en una sola palabra.
* **Dónde NUNCA aplicar el azul:** No usar como fondo de bloques largos de texto, no aplicar como texto azul sobre fondos oscuros o sobre fotos, ni en marcos alrededor de fotografías de pacientes.
* **Corrección de Legibilidad en Franja Azul Suave (`#CAE7F4`):** El eslogan o texto secundario dentro de este fondo **debe ir siempre en `#10365C` (Navy profundo)** con peso SemiBold (600), evitando grises claros o blancos que pierdan contraste.

---

## 3. Sistema Tipográfico

El sistema tipográfico combina la elegancia y distinción editorial con la precisión clínica y fluidez digital contemporánea.

```
┌─────────────────────────────────────────────────────────────┐
│  TITULARES (EDITORIAL DE LUJO)                              │
│  "Cormorant Garamond" — Serif clásica con palabra en italic │
├─────────────────────────────────────────────────────────────┤
│  INTERFAZ, LECTURA Y DATOS CLÍNICOS                         │
│  "Figtree" — Sans-serif geométrica, moderna y ultra-legible  │
└─────────────────────────────────────────────────────────────┘
```

### 3.1 Fuentes de Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 3.2 Regla de Estilo Editorial en Titulares
* Todos los títulos principales (H1, H2 y secciones de impacto) utilizan `Cormorant Garamond`.
* **Regla de oro de diseño:** **Una palabra o frase corta por titular se destaca en cursiva (_italic_)**. Esto genera un quiebre visual sofisticado, propio de publicaciones editoriales de alto nivel:
  * *Ejemplo H1:* "Especialistas en Cirugía Plástica de Alta Definición y *armonía* natural"
  * *Ejemplo H2:* "Resultados reales con *rigor* científico y calidez humana"
  * *Ejemplo H3:* "Tu valoración diagnóstica *sin fricción*"

### 3.3 Escala Modular Tipográfica

| Nivel | Fuente | Peso | Desktop (Tamaño / Altura de Línea) | Mobile (Tamaño / Altura de Línea) | Tracking | Uso |
|---|---|---|---|---|---|---|
| **Display Hero** | Cormorant Garamond | 600 SemiBold | `56px / 1.15` (`3.5rem / 4rem`) | `36px / 1.2` (`2.25rem / 2.75rem`) | `-0.02em` | Título del Hero en portada |
| **H1** | Cormorant Garamond | 600 SemiBold | `44px / 1.2` (`2.75rem / 3.25rem`) | `32px / 1.25` (`2rem / 2.5rem`) | `-0.015em` | Titulares de páginas principales |
| **H2** | Cormorant Garamond | 600 SemiBold | `36px / 1.25` (`2.25rem / 2.75rem`) | `26px / 1.3` (`1.625rem / 2.125rem`) | `-0.01em` | Encabezados de secciones |
| **H3** | Cormorant Garamond | 600 SemiBold | `28px / 1.3` (`1.75rem / 2.25rem`) | `22px / 1.35` (`1.375rem / 1.85rem`) | `0` | Subsecciones, títulos de tarjetas grandes |
| **H4** | Figtree | 600 SemiBold | `20px / 1.4` (`1.25rem / 1.75rem`) | `18px / 1.4` (`1.125rem / 1.6rem`) | `-0.005em` | Títulos de procedimientos y testimonios |
| **Lead / Bajada** | Figtree | 400 Regular / 500 Medium | `18px / 1.6` (`1.125rem / 1.8rem`) | `16px / 1.55` (`1rem / 1.55rem`) | `0` | Párrafo introductorio bajo H1/H2 |
| **Body Regular** | Figtree | 400 Regular | `16px / 1.6` (`1rem / 1.6rem`) | `15px / 1.6` (`0.9375rem / 1.5rem`) | `0` | Textos generales, descripciones clínicas |
| **Body Small** | Figtree | 400 Regular / 500 Medium | `14px / 1.5` (`0.875rem / 1.35rem`) | `13px / 1.5` (`0.8125rem / 1.25rem`) | `0` | Metadatos, notas al pie, especificaciones |
| **Pill / Kicker / Tag**| Figtree | 700 Bold | `12px / 1.4` (`0.75rem / 1.05rem`) | `11px / 1.4` (`0.6875rem / 0.95rem`) | `+0.08em` | Pre-títulos en mayúsculas (UPPERCASE) |
| **Button Text** | Figtree | 600 SemiBold | `15px / 1.2` (`0.9375rem / 1.15rem`) | `15px / 1.2` | `+0.01em` | Texto de botones y acciones |

### 3.4 Pautas de Redacción UX Médica
* **Máximo 2 a 3 líneas:** Las citas del Dr. Andrés Gómez o explicaciones diagnósticas deben ser concisas. Evitar parrafadas de más de 65 caracteres por línea.
* **Escaneabilidad:** Resaltar conceptos clave con negrita sutil (`font-semibold`) o en color azul (`#2243A9`) para usuarios que navegan desde el móvil en salas de espera o descansos.

---

## 4. Retícula, Espaciado y Elevación (Sistema de 8pt)

### 4.1 Grid y Contenedor Principal
* **Ancho Máximo (`max-width`):** `1280px` (`max-w-7xl` en Tailwind).
* **Contenedor Estrecho para Artículos / Formularios:** `840px` (`max-w-3xl`).
* **Padding Lateral (`gutter`):**
  * Mobile (`< 640px`): `20px` (`px-5`)
  * Tablet (`640px - 1024px`): `32px` (`px-8`)
  * Desktop (`> 1024px`): `48px` a `64px` (`px-12` a `px-16`)
* **Grilla de Columnas:** 12 columnas en Desktop (`gap-6` o `gap-8`), 6 columnas en Tablet (`gap-4`), 1 o 2 columnas en Mobile.

### 4.2 Escala de Espaciado Modular
Se basa en múltiplos de `8px` (con subdivisión de `4px` para microespaciados):
* `space-1` (4px): Espacio entre icono y microtexto.
* `space-2` (8px): Padding interno de chips y tags.
* `space-3` (12px): Espaciado entre elementos en un grupo cerrado.
* `space-4` (16px): Padding interno estándar de inputs, botones compactos.
* `space-6` (24px): Padding interno de tarjetas y espaciado entre bloques de formulario.
* `space-8` (32px): Padding de tarjetas destacadas, separación entre títulos y párrafos.
* `space-12` (48px): Margen entre módulos relacionados.
* `space-16` (64px): Separación estándar entre subsecciones.
* `space-20` (80px): Padding vertical de secciones en tablet (`py-20`).
* `space-28` (112px): Padding vertical de secciones principales en desktop (`py-28`), proporcionando el "aire editorial".

### 4.3 Sistema de Radios de Borde (`border-radius`)
* **Píldora Completa (`rounded-full` / `9999px`):** Botones principales (CTAs), chips de estado, badges de "Antes / Después" y tags de procedimientos.
* **Contenedores y Tarjetas Grandes (`rounded-2xl` / `16px` a `20px`):** Tarjetas de servicios, bloques testimoniales y caja de formulario.
* **Inputs y Elementos de Formulario (`rounded-xl` / `10px` a `12px`):** Campos de texto, selects y botones secundarios.

### 4.4 Sombras Suaves y Elevación (`box-shadow`)
Para mantener la limpieza y evitar estéticas toscas, las sombras son difusas y usan tintes de azul navy (`#202B53`) al 4%-8%:

```css
/* Card flotante sutil */
--shadow-card: 0px 4px 20px -2px rgba(32, 43, 83, 0.05), 0px 2px 6px -1px rgba(32, 43, 83, 0.03);

/* Card en estado hover */
--shadow-card-hover: 0px 16px 32px -4px rgba(32, 43, 83, 0.09), 0px 6px 12px -2px rgba(32, 43, 83, 0.04);

/* Menú sticky, modal o botón flotante WhatsApp */
--shadow-elevated: 0px 20px 40px -8px rgba(32, 43, 83, 0.12), 0px 8px 16px -4px rgba(32, 43, 83, 0.06);
```

---

## 5. Arquitectura de Componentes de Interfaz (UX/UI)

A partir del análisis exhaustivo del mockup (`propuesta para doctor.pdf`), se definen los componentes adaptados a la marca del **Dr. Andrés Gómez**:

### 5.1 Barra de Contacto Superior (Top Utility Bar)
* **Función:** Comunicar inmediatez, ubicación y disponibilidad de guardia.
* **Contenido:**
  * Sede: *"Torre Zentai, Bogotá"* (con enlace a Maps).
  * Teléfono PBX: *`+57 315 873 9927`*.
  * WhatsApp Directo: *`+57 312 325 5900`*.
  * Horario: *"Lunes a Sábado | Guardia postquirúrgica activa"*.
* **Estilo:** Fondo `#F4EFE9` o `#202B53` (texto blanco/crema sutil), altura fija `36px`, tipografía `Figtree 13px`.

### 5.2 Header & Navegación Principal (Sticky Navbar)
* **Estructura:**
  * **Logotipo del Doctor:** "Dr. Andrés Gómez" en `Cormorant Garamond 24px` con subtítulo en `Figtree 10px uppercase`: "Cirujano Plástico & Reconstructivo". En versión compacta móvil, se optimiza para no saturar.
  * **Navegación:** Enlaces claros: *Cirugías Corporales*, *Cirugías Faciales*, *Resultados (Antes/Después)*, *Sobre el Dr. Gómez*, *Sede Zentai*.
  * **CTA Header:** Botón pill en Azul Corporativo `#2243A9`: *"Agendar Valoración"*.
* **Comportamiento UX:** `position: sticky; top: 0; z-index: 50;` con fondo blanco o `#F4EFE9` translúcido (`backdrop-blur-md` al 90%) y borde inferior sutil `#E3DCD3`.

### 5.3 Hero Section (Portada de Alto Impacto y Autoridad)
* **Kicker / Badge Superior:**
  * Texto en cápsula: `"29 AÑOS DE EXCELENCIA QUIRÚRGICA • MIEMBRO SCCP"` en fondo `#CAE7F4` con texto `#10365C`.
* **Titular H1:**
  * *"Cirugía Plástica Avanzada con **precisión** láser y calidez médica"*.
* **Lead:**
  * *"Más de dos décadas transformando vidas en Bogotá. Protocolos hospitalarios rigurosos, tecnología Vaser/Láser de última generación y un enfoque de acompañamiento continuo 1 a 1."*
* **Chips de Confianza Médica:**
  * Fila de 3 a 4 pastillas con microiconos: `[Acompañamiento 1 a 1]` `[Quirófanos Habilitados Sec. Salud]` `[Tecnología Láser & Vaser]` `[Sede Torre Zentai]`.
* **Doble CTA Principal:**
  * Primario: Botón Pill `#2243A9` → *"Reservar Valoración Diagnóstica"* (con icono de calendario o flecha).
  * Secundario: Botón Pill con borde o fondo blanco → *"Chatear por WhatsApp"* (con icono oficial de WhatsApp en verde).
* **Elemento Gráfico Hero:** Fotografía real del Dr. Andrés Gómez con bata médica o indumentaria quirúrgica impecable, con tarjeta flotante superpuesta:
  * *"Dr. Andrés Gómez — Cirujano Plástico & Director Científico | Consulta Presencial & Teleconsulta"*.

### 5.4 Cinta de Métricas y Validación (Trust Proof Bar)
* **Módulos Numéricos (4 Columnas):**
  1. `+29` — Años de Trayectoria (Desde 1996 en Bogotá).
  2. `+18.000` — Procedimientos Exitosos (Pacientes nacionales e internacionales).
  3. `100%` — Quirófanos Acreditados (Cumplimiento de estándares de bioseguridad).
  4. `SCCP` — Miembro de Número (Sociedad Colombiana de Cirugía Plástica).
* **Tratamiento Visual:** Los números en `Cormorant Garamond 44px` en Azul `#2243A9` o `#202B53`; etiquetas explicativas en `Figtree 13px` gris grafito.

### 5.5 Portafolio de Especialidades Médicas (Estructura en 3 Ejes)
Presentación de los procedimientos en 3 tarjetas o columnas con jerarquía visual:
1. **Eje 01: Contorno Corporal & Alta Definición (Láser / Vaser):**
   * Lipólisis Láser 3D, Lipo Vaser HD, Abdominoplastia y Lipectomía masculina/femenina, Marcación atlética.
2. **Eje 02: Cirugía de Busto & Facial Armónica:**
   * Pexia mamaria (elevación con/sin prótesis), Mamoplastia de aumento o reducción, Rinoplastia estructural y funcional, Blefaroplastia.
3. **Eje 03: Medicina Estética & Recuperación Avanzada:**
   * Tensamax, bioestimuladores de colágeno, drenajes linfáticos con enfermera jefe y sueroterapias metabólicas postquirúrgicas.
* **Componente Card:** Fondo `#FFFFFF`, borde `#E3DCD3`, tag superior en `#CAE7F4`, viñetas con checks minimalistas y enlace a detalle con flecha animada `hover:translate-x-1`.

### 5.6 Galería de Casos Clínicos (Antes y Después Ético)
* **Directrices Visuales:**
  * Comparativa dual simétrica: Imagen "Antes" e Imagen "Después".
  * Badge de estado: Cápsula oscura o azul marina: `"ANTES"` y `"DESPUÉS"`.
  * Metadatos obligatorios para credibilidad médica:
    * Nombre del procedimiento: ej. *"Lipólisis Láser"*
    * Tiempo de evolución: ej. *"4 meses postoperatorio"*
    * Indicadores clínicos: *"Paciente femenina, 34 años, reducción de 12 cm de contorno"*.
* **Aviso Legal & Bioética (Box Destacado):**
  * Fondo blanco o neutro cálido con borde izquierdo en `#2243A9`:
  * *"Aviso Legal: Los resultados quirúrgicos varían según las características anatómicas, genéticas y metabólicas de cada paciente. Las imágenes son testimonios clínicos reales bajo autorización informada. Toda intervención requiere valoración médica presencial previa."*

### 5.7 Equipo Médico & Seguridad Postoperatoria
* **Humanización del equipo del Dr. Gómez:**
  * Tarjeta del **Dr. Andrés Gómez** (Cirujano y Director Científico).
  * Tarjeta de **Dora Calderón Vega** (Enfermera Jefe de Postoperatorio — asistencia directa y monitoreo de drenajes).
  * Tarjeta de **Coordinación de Pacientes Internacionales** (logística para pacientes que viajan desde EE.UU., Europa o Latinoamérica).
* **Propósito UX:** Eliminar el temor del paciente sobre "qué pasará después de la cirugía", demostrando que el cuidado no termina al salir del quirófano.

### 5.8 Ruta del Paciente en 3 Pasos (Ruta sin Fricción)
Visualización horizontal (desktop) o vertical conectada por línea discontinua (mobile):
1. **Paso 01 — Solicitud Ágil:** Envía tus datos por web o escribe a WhatsApp. Respuesta y agenda en < 15 minutos en jornada laboral.
2. **Paso 02 — Valoración Diagnóstica:** Cita presencial en Torre Zentai o Teleconsulta guiada. Análisis corporal exhaustivo y definición de expectativas reales.
3. **Paso 03 — Plan Quirúrgico Integral:** Cotización transparente todo incluido (clínica, honorarios, póliza médica, fajas y controles postoperatorios).

### 5.9 Formulario de Valoración y Captación de Pacientes
* **UX Form Optimization:** Máximo 4 a 5 campos para reducir el abandono:
  1. *Nombre Completo* (Input text con placeholder claro: "Ej. Carolina Montoya").
  2. *WhatsApp / Teléfono* (Input tel con selector de indicativo país `+57`).
  3. *Procedimiento de Interés* (Select nativo estilizado: Lipólisis Láser, Abdominoplastia, Busto, Rostro, etc.).
  4. *Modalidad y Horario Preferido* (Radio buttons o select: Presencial Zentai / Virtual, Mañana / Tarde).
  5. *Checkbox de Consentimiento:* "Autorizo el tratamiento de mis datos personales según la Ley 1581 y la Política de Privacidad del Dr. Andrés Gómez."
* **Botón de Envío:** `#2243A9` ancho completo (`w-full`), texto `"Confirmar Solicitud de Valoración"`.
* **Alternativa Inmediata:** Recuadro inferior: *"¿Prefieres respuesta inmediata? Chatea directamente con nuestra enfermera de admisiones por WhatsApp al +57 312 325 5900"*.

### 5.10 Testimonios y Casos de Éxito Reales
* **Tarjeta Testimonial:**
  * Fotografía de la paciente o iniciales en círculo (`avatar-initials` en `#CAE7F4`).
  * Estrellas de satisfacción o badge *"Paciente Real Verificada"*.
  * Cita textual de la paciente (2 a 4 renglones).
  * Datos contextuales: *Nombre, Procedimiento realizado, Ciudad/País de procedencia* (ej. "Claudia F. — Lipólisis Láser — Bogotá / Sandra M. — Abdominoplastia — Miami, EE.UU.").

### 5.11 Respaldo Transaccional y Financiamiento
* Información tranquilizadora contra fraudes:
  * *"Por tu tranquilidad, todos los pagos se realizan directamente en nuestras instalaciones en Torre Zentai o mediante canales bancarios y pasarelas oficiales cifradas SSL 256-bit. No solicitamos giros a cuentas de personas naturales desconocidas."*
  * Logos de métodos aceptados: Visa, MasterCard, PSE, Tarjeta Débito, Financiación Asistida.

### 5.12 Sede Médica Torre Zentai & Mapa
* **Módulo de Ubicación:**
  * Dirección: *Edificio Torre Zentai, Cra. 23 # 124-87, Torre 1, Consultorio 805, Bogotá, Colombia*.
  * Horarios de consulta programada: *Lunes a Viernes 7:30 a.m. - 5:00 p.m. / Sábados 8:00 a.m. - 12:00 m.*
  * Botón interactivo: *"Abrir Ubicación en Google Maps"*.
  * Fotografía real de la fachada o recepción del consultorio en Torre Zentai.

### 5.13 Footer Institucional y Cumplimiento Legal
* Respaldo institucional: *"Dr. Andrés Gómez — Especialista en Cirugía Plástica, Estética y Reconstructiva. Registro Médico y Habilitación Seccional de Salud de Bogotá."*
* Menú de enlaces rápidos: Procedimientos, Antes y Después, Solicitud de Historia Clínica, Derechos del Paciente, Política de Datos Ley 1581, Términos y Condiciones.
* Copyright actualizado: *© 2025 Dr. Andrés Gómez. Todos los derechos reservados.*

---

## 6. Especificación de Componentes UI en Código

### 6.1 Tokens en Variables CSS (`variables.css`)
```css
:root {
  /* Paleta Base y Superficies (85%) */
  --color-bg-base: #F4EFE9;
  --color-bg-surface: #FFFFFF;
  --color-bg-subtle: #FAF7F2;
  --color-bg-dark: #0E1424;

  /* Contraste y Tipografía (10%) */
  --color-text-main: #111625;
  --color-text-body: #475467;
  --color-text-muted: #717680;
  --color-text-inverse: #FFFFFF;

  /* Acentos Estratégicos (5%) */
  --color-brand-primary: #2243A9;
  --color-brand-hover: #1A3587;
  --color-brand-active: #142966;
  --color-brand-deep: #202B53;
  --color-brand-soft: #CAE7F4;
  --color-brand-soft-text: #10365C;

  /* Bordes y Líneas */
  --color-border-subtle: #E3DCD3;
  --color-border-card: rgba(34, 67, 169, 0.08);

  /* Estados y Canales */
  --color-whatsapp: #25D366;
  --color-whatsapp-hover: #1EBE5D;
  --color-success: #12B76A;
  --color-warning: #F79009;
  --color-error: #D92D20;

  /* Tipografías */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Elevaciones */
  --shadow-sm: 0 1px 2px rgba(32, 43, 83, 0.05);
  --shadow-md: 0 4px 16px -2px rgba(32, 43, 83, 0.06), 0 2px 4px -1px rgba(32, 43, 83, 0.03);
  --shadow-lg: 0 16px 32px -4px rgba(32, 43, 83, 0.08), 0 6px 12px -2px rgba(32, 43, 83, 0.03);
  --shadow-float: 0 20px 48px -8px rgba(32, 43, 83, 0.14);

  /* Radios */
  --radius-pill: 9999px;
  --radius-card: 16px;
  --radius-input: 10px;
}
```

### 6.2 Configuración para Tailwind CSS (`tailwind.config.js`)
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,astro,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF7F2',
          100: '#F4EFE9', // Fondo base
          200: '#E7DEC3',
          300: '#E3DCD3', // Borde sutil
        },
        navy: {
          900: '#0E1424',
          800: '#111625', // Texto carbón principal
          700: '#202B53', // Acento azul oscuro profundo
          600: '#2A386D',
        },
        medical: {
          blue: '#2243A9', // Azul corporativo / CTA principal
          hover: '#1A3587',
          light: '#CAE7F4', // Azul glaciar suave
          darkText: '#10365C', // Texto contrastado sobre azul claro
        },
        graphite: {
          700: '#475467', // Texto párrafos
          500: '#717680', // Texto secundario / placeholder
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Figtree"', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'input': '10px',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(32, 43, 83, 0.05)',
        'card-hover': '0 16px 32px -4px rgba(32, 43, 83, 0.09)',
        'floating': '0 20px 40px -8px rgba(32, 43, 83, 0.12)',
      },
    },
  },
  plugins: [],
};
```

### 6.3 Botones y Estados Interactivos
```html
<!-- Botón Primario (Llamado a la acción principal) -->
<button class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-medical-blue text-white font-sans font-semibold text-[15px] shadow-sm hover:bg-medical-hover active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-medical-blue focus:ring-offset-2">
  <span>Agendar Valoración Médica</span>
  <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
  </svg>
</button>

<!-- Botón Secundario WhatsApp -->
<a href="https://wa.me/573123255900" target="_blank" rel="noopener noreferrer" 
   class="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-navy-800 border border-cream-300 font-sans font-semibold text-[15px] hover:border-medical-blue hover:text-medical-blue transition-all duration-200 shadow-card">
  <svg class="mr-2.5 w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
    <!-- SVG Icon WhatsApp -->
  </svg>
  <span>Escribir por WhatsApp</span>
</a>

<!-- Badge / Tag Informativo -->
<span class="inline-flex items-center px-3.5 py-1 rounded-full bg-medical-light text-medical-darkText font-sans text-xs font-bold uppercase tracking-wider">
  Procedimiento Láser
</span>
```

---

## 7. Buenas Prácticas de UX/UI y Accesibilidad (WCAG 2.1 AA)

### 7.1 Accesibilidad y Contraste
1. **Ratio de Contraste:** 
   * Todo texto regular (`16px`) cumple un ratio mínimo de `4.5:1`. 
   * El texto carbón (`#111625`) sobre el fondo arena (`#F4EFE9`) alcanza un ratio de `13.8:1` (Nivel AAA).
   * El texto azul marino (`#10365C`) sobre el fondo azul claro (`#CAE7F4`) alcanza un ratio de `7.9:1` (Nivel AAA).
2. **Navegación por Teclado:** Estados `:focus-visible` explícitos con un anillo de color `--color-brand-primary` de 2px de grosor y 2px de separación (`offset`).
3. **Imágenes con Alt Text Descriptivo:** Fotografías de procedimientos y del doctor con etiquetas descriptivas reales (ej. *"Dr. Andrés Gómez examinando tecnología Vaser en consultorio de Torre Zentai"*).

### 7.2 Experiencia Mobile First
* Más del **75% del tráfico de pacientes** en cirugía estética proviene de dispositivos móviles (Instagram, WhatsApp, Google Maps).
* **Zona del Pulgar (Thumb Zone):**
  * Botón flotante permanente de WhatsApp posicionado en la esquina inferior derecha con `z-index: 40`, con espaciado de seguridad respecto al borde de la pantalla (`bottom-6 right-6`).
  * Botones con altura táctil mínima de `48px` para evitar clics erróneos.
* **Formularios con teclado adecuado:** `type="tel"` para WhatsApp, `type="email"` para correo, facilitando la autocumplimentación.

### 7.3 Optimización de Rendimiento Web (Core Web Vitals & LCP)
* **Formato de Imagen:** Todas las fotos de pacientes y del doctor deben servirse en formato moderno **WebP** o **AVIF** con resoluciones `@1x` y `@2x`.
* **Carga Prioritaria:** La fotografía principal del Dr. Gómez en el Hero debe cargarse con `fetchpriority="high"` y `loading="eager"` para asegurar que el **Largest Contentful Paint (LCP)** sea inferior a 1.8 segundos.
* **Fuentes Web:** Se utiliza `font-display: swap` en Google Fonts para evitar parpadeos de texto invisible (FOIT).

---

## 8. Checklist de Validación para el Diseñador y Desarrollador

Antes de dar por finalizada cualquier maqueta o pantalla del sitio del Dr. Andrés Gómez, verificar:

- [ ] ¿El fondo general respeta el tono neutro cálido `#F4EFE9` sin recurrir a blancos puros fríos de hospital?
- [ ] ¿El color azul (`#2243A9`) ocupa únicamente un ~5% visual, reservado para CTAs, números clave y pequeños acentos?
- [ ] ¿Los titulares principales en `Cormorant Garamond` tienen **exactamente una palabra en _italic_ (cursiva)** para mantener la identidad editorial?
- [ ] ¿El subtítulo o párrafo introductorio está en `Figtree` con un máximo de 2 a 3 renglones?
- [ ] ¿Las tarjetas de "Antes y Después" presentan la información objetiva (edad, peso, tiempo post) y no contienen marcos invasivos ni montajes saturados?
- [ ] ¿Está presente la caja de aviso legal y advertencia ética médica?
- [ ] ¿El eslogan dentro de la franja azul suave (`#CAE7F4`) se lee con total nitidez usando el color `#10365C`?
- [ ] ¿Los accesos a WhatsApp y llamada telefónica a Torre Zentai son accesibles en 1 toque en versión móvil?
- [ ] ¿Se cuenta con el certificado de habilitación de la Secretaría de Salud de Bogotá en el footer?

---
*Documento estructurado y listo como guía maestra para la fase de prototipado y desarrollo del sitio web oficial del Dr. Andrés Gómez.*
