# Arquitectura de contenidos — Sitio web Dr. Andrés Gómez

**Versión:** 1.0 · **Fecha:** 12/11/2026 · **Idioma:** Español (estructura preparada para `/en` a futuro)
**Fuente de contenido principal:** https://clinicacolombianaobesidad.com
**Estado:** Para aprobación del cliente

---

## 1. Objetivos y alcance

| Aspecto | Definición |
|---|---|
| Enfoque | Sitio de **marca personal** del Dr. Andrés Gómez, cirujano plástico. La Clínica Colombiana de Obesidad y Metabolismo se nombra como respaldo, sin protagonismo. |
| Dominio | Dominio propio del doctor, independiente del de la clínica (sitio nuevo). |
| Conversión principal | **Reserva tu cita** → WhatsApp (canal principal) + formulario en `/agendar` + teléfono (secundario). |
| Se incluye | Procedimientos de cirugía corporal, facial e íntima; resultados; blog; historias de vida; prensa; contacto; política de datos. |
| Se omite | Equipo multidisciplinario, tratamientos estéticos no quirúrgicos, sueroterapias, tratamiento metabólico, balón gástrico, rejuvenecimiento facial, PQRSF, estados financieros, asociación de usuarios, participación social, formas de pago, solicitud de historia clínica. |

---

## 2. Mapa del sitio

```
/                                   Home
├── /sobre-el-dr-gomez              Trayectoria, formación, filosofía + la clínica
├── /procedimientos                 Índice general
│   ├── /cirugia-corporal           Índice de categoría (15)
│   │   ├── /abdominoplastia
│   │   ├── /lipolisis-laser
│   │   ├── /lipo-vaser
│   │   ├── /lipoinyeccion-glutea
│   │   ├── /gluteoplastia
│   │   ├── /pexia-glutea-laser
│   │   ├── /marcacion-abdominal
│   │   ├── /tonificacion-corporal
│   │   ├── /extraccion-de-biopolimeros
│   │   ├── /renuvion-j-plasma
│   │   ├── /mamoplastia-de-aumento
│   │   ├── /pexia-mamaria
│   │   ├── /reduccion-mamaria
│   │   ├── /explantacion-mamaria
│   │   └── /ginecomastia
│   ├── /cirugia-facial             Índice de categoría (7)
│   │   ├── /rinoplastia
│   │   ├── /otoplastia
│   │   ├── /blefaroplastia
│   │   ├── /lifting-facial
│   │   ├── /face-up
│   │   ├── /bichectomia
│   │   └── /hilos-tensores
│   └── /cirugia-intima             Índice de categoría (6)
│       ├── /lipoplastia-pubica
│       ├── /rejuvenecimiento-vaginal
│       ├── /frenuloplastia
│       ├── /faloplastia
│       ├── /escrotoplastia
│       └── /engrosamiento-de-pene
├── /resultados                     Resultados globales
│   ├── /cirugia-corporal
│   ├── /cirugia-facial
│   └── /cirugia-intima
├── /recursos
│   ├── /blog                       Listado + /blog/[articulo]
│   ├── /historias-de-vida          Listado + /historias-de-vida/[historia]
│   └── /prensa                     Listado de notas de prensa
├── /agendar                        Reserva tu cita
├── /contacto
└── /politica-de-datos
```

**Totales:** 1 Home · 1 Sobre el Dr. · 1 índice general · 3 índices de categoría · 28 procedimientos · 1 índice de resultados + 3 galerías · 3 listados de recursos (+ detalles) · Agendar · Contacto · Política de datos.

---

## 3. Inventario de procedimientos y fuente de contenido

Los textos de cada procedimiento se toman **fielmente** de la página correspondiente en el sitio de la clínica. Las fotos de antes/después provienen de las páginas `/antes-y-despues/` actuales y se publican en `/resultados/[categoría]`.

Base de las URLs fuente: `https://clinicacolombianaobesidad.com/servicios/`

### 3.1 Cirugía corporal (15)

| # | Procedimiento | URL nueva | Fuente (slug actual) | Antes/después disponible |
|---|---|---|---|---|
| 1 | Abdominoplastia | `/procedimientos/cirugia-corporal/abdominoplastia` | `lipectomia-abdominoplastia-abdomen-firme/` | Sí |
| 2 | Lipólisis láser | `/procedimientos/cirugia-corporal/lipolisis-laser` | `lipolisis-laser/` | Sí |
| 3 | Lipo Vaser | `/procedimientos/cirugia-corporal/lipo-vaser` | `lipo-vaser/` | — |
| 4 | Lipoinyección glútea | `/procedimientos/cirugia-corporal/lipoinyeccion-glutea` | `lipoinyeccion-glutea/` | Sí |
| 5 | Gluteoplastia | `/procedimientos/cirugia-corporal/gluteoplastia` | `gluteoplastia/` | — |
| 6 | Pexia glútea láser | `/procedimientos/cirugia-corporal/pexia-glutea-laser` | `levantamiento-gluteos-pexia-glutea-laser/` | — |
| 7 | Marcación abdominal | `/procedimientos/cirugia-corporal/marcacion-abdominal` | `marcacion-abdominal/` | — |
| 8 | Tonificación corporal | `/procedimientos/cirugia-corporal/tonificacion-corporal` | `tonificacion-corporal/` | — |
| 9 | Extracción de biopolímeros | `/procedimientos/cirugia-corporal/extraccion-de-biopolimeros` | `extraccion-de-biopolimeros/` | — |
| 10 | Renuvion / J-Plasma | `/procedimientos/cirugia-corporal/renuvion-j-plasma` | `renuvion-jplasma-tratamiento-flacidez/` | — |
| 11 | Mamoplastia de aumento | `/procedimientos/cirugia-corporal/mamoplastia-de-aumento` | `mamoplastia-de-aumento/` | Sí |
| 12 | Pexia mamaria | `/procedimientos/cirugia-corporal/pexia-mamaria` | `levantamiento-de-senos/` | Sí |
| 13 | Reducción mamaria | `/procedimientos/cirugia-corporal/reduccion-mamaria` | `reduccion-mamaria/` | — |
| 14 | Explantación mamaria | `/procedimientos/cirugia-corporal/explantacion-mamaria` | `explantacion-mamaria/` | — |
| 15 | Ginecomastia | `/procedimientos/cirugia-corporal/ginecomastia` | `ginecomastia/` | — |

**Secciones internas (no son páginas propias):**

| Tecnología | Fuente (slug actual) | Se integra como sección en |
|---|---|---|
| Tensamax | `tensamax/` | Lipólisis láser / Lipo Vaser (según corresponda) |
| Retraction | `retraction/` | Lipólisis láser / Lipo Vaser (según corresponda) |
| Microaire | `microaire/` | Lipo Vaser / Lipólisis láser (según corresponda) |

### 3.2 Cirugía facial (7)

| # | Procedimiento | URL nueva | Fuente (slug actual) | Antes/después disponible |
|---|---|---|---|---|
| 1 | Rinoplastia | `/procedimientos/cirugia-facial/rinoplastia` | `rinoplastia/` | Sí |
| 2 | Otoplastia | `/procedimientos/cirugia-facial/otoplastia` | `otoplastia/` | — |
| 3 | Blefaroplastia | `/procedimientos/cirugia-facial/blefaroplastia` | `blefaroplastia/` | — |
| 4 | Lifting facial | `/procedimientos/cirugia-facial/lifting-facial` | `lifting-facial/` | — |
| 5 | Face Up | `/procedimientos/cirugia-facial/face-up` | `face-up/` | — |
| 6 | Bichectomía | `/procedimientos/cirugia-facial/bichectomia` | `bichectomia/` | — |
| 7 | Hilos tensores | `/procedimientos/cirugia-facial/hilos-tensores` | `hilos-tensores/` | — |

### 3.3 Cirugía íntima (6)

| # | Procedimiento | URL nueva | Fuente (slug actual) |
|---|---|---|---|
| 1 | Lipoplastia púbica | `/procedimientos/cirugia-intima/lipoplastia-pubica` | `lipoplastia-pubica/` |
| 2 | Rejuvenecimiento vaginal | `/procedimientos/cirugia-intima/rejuvenecimiento-vaginal` | `rejuvenecimiento-vaginal/` |
| 3 | Frenuloplastia | `/procedimientos/cirugia-intima/frenuloplastia` | `frenuloplastia/` |
| 4 | Faloplastia | `/procedimientos/cirugia-intima/faloplastia` | `faloplastia/` |
| 5 | Escrotoplastia | `/procedimientos/cirugia-intima/escrotoplastia` | `escrotoplastia/` |
| 6 | Engrosamiento de pene | `/procedimientos/cirugia-intima/engrosamiento-de-pene` | `engrosamiento-tratamiento/` |

### 3.4 Galerías de antes/después (fuente)

| Fuente actual | Se publica en |
|---|---|
| `lipectomia-abdominoplastia-abdomen-firme/antes-y-despues/` | `/resultados/cirugia-corporal` (filtro: Abdominoplastia) |
| `lipolisis-laser/antes-y-despues/` | `/resultados/cirugia-corporal` (filtro: Lipólisis láser) |
| `lipoinyeccion-glutea/antes-y-despues/` | `/resultados/cirugia-corporal` (filtro: Lipoinyección glútea) |
| `mamoplastia-de-aumento/antes-y-despues/` | `/resultados/cirugia-corporal` (filtro: Mamoplastia de aumento) |
| `levantamiento-de-senos/antes-y-despues/` | `/resultados/cirugia-corporal` (filtro: Pexia mamaria) |
| `rinoplastia/antes-y-despues/` | `/resultados/cirugia-facial` (filtro: Rinoplastia) |

---

## 4. Navegación global

### Header
- Logo (enlace a Home)
- **Procedimientos** (mega menú: Cirugía corporal · Cirugía facial · Cirugía íntima, con sus procedimientos)
- Sobre el Dr. Gómez
- Resultados
- **Recursos** (desplegable: Blog · Historias de vida · Prensa)
- Contacto
- Botón CTA: **Reserva tu cita**

### Footer
1. Marca: logo + descripción breve del Dr. Gómez.
2. Enlaces rápidos: Sobre el Dr. · Procedimientos · Resultados · Blog · Contacto.
3. Procedimientos por categoría.
4. Contacto: dirección, teléfonos, WhatsApp, correo, horarios.
5. Redes sociales.
6. Enlace discreto a la web de la clínica.
7. **Disclaimer de imágenes y consentimientos** (texto en sección 6).
8. Política de datos · Copyright.

### Elementos persistentes
- Botón flotante de WhatsApp en todas las páginas.

---

## 5. Contenido detallado por página

### 5.1 Home — `/`
1. **Hero:** propuesta de valor, nombre y especialidad del Dr. Gómez, CTA "Reserva tu cita" + CTA secundario "Ver procedimientos", imagen principal (según mockup).
2. **Sobre el Dr. (resumen):** foto, 2–3 líneas de trayectoria, enlace a `/sobre-el-dr-gomez`.
3. **Cifras clave** (por definir con el cliente; ver sección 8).
4. **Procedimientos:** 3 tarjetas de categoría (Corporal, Facial, Íntima) con imagen, descripción corta y enlace + procedimientos destacados.
5. **Resultados:** slider de antes/después seleccionados → `/resultados`.
6. **Por qué elegirnos:** 3–4 diferenciales (tecnología láser, resultados naturales, recuperación rápida, respaldo clínico).
7. **Historias de vida:** 2–3 testimonios destacados → `/recursos/historias-de-vida`.
8. **Blog:** últimos 3 artículos.
9. **Bloque de agendamiento:** CTA final con WhatsApp + formulario corto.

### 5.2 Sobre el Dr. Gómez — `/sobre-el-dr-gomez`
Fuente inicial: https://drandresgomez.com/dr-andres-gomez-md/ (información desactualizada, **por confirmar con el cliente**).

1. **Encabezado:** foto, nombre, especialidad, frase de filosofía.
2. **Trayectoria:** biografía y experiencia.
   - Contenido base: Médico Cirujano General de la Escuela de Medicina Juan N. Corpas; especialista en Cirugía Plástica, Estética y Reconstructiva de la Universidad SACPER (Buenos Aires, Argentina). Director de Cirugía Plástica de la Clínica Colombiana de Obesidad y Metabolismo. Compromiso con la actualización constante: más de 30 seminarios, cursos, talleres, simposios y congresos.
3. **Formación y actualizaciones:** línea de tiempo con los estudios y una selección de las actualizaciones académicas (listado completo en la fuente; ej.: Curso Universitario de Cirugía de Mamas, Pontificia Universidad Católica Argentina, 2010; Laser Summit Argentina 2010; Congresos Argentinos de Cirugía Plástica 2009 y 2010; Craniofacial Symposium 2009; Cours de Liposculpture à la Seringue, Dr. Pierre Fournier, 2004).
4. **Filosofía de trabajo:** cirugía plástica enfocada en minimizar el trauma quirúrgico, uso de tecnología láser, resultados naturales y recuperación rápida; atención centrada en el paciente.
5. **La clínica (respaldo):** bloque breve sobre la Clínica Colombiana de Obesidad y Metabolismo (trayectoria, instalaciones, tecnología, servicios habilitados) con enlace a su web.
6. **Prensa y reconocimientos:** menciones destacadas → `/recursos/prensa`.
7. **CTA:** Reserva tu cita.

### 5.3 Índice general — `/procedimientos`
- Introducción breve.
- 3 tarjetas grandes de categoría (con número de procedimientos).
- Mensaje: "Toda cirugía comienza con una valoración" + CTA `/agendar`.

### 5.4 Índice de categoría — `/procedimientos/[categoria]`
Aplica a Cirugía corporal, Cirugía facial y Cirugía íntima.

1. **Encabezado:** título, descripción de la categoría, imagen.
2. **Listado de procedimientos:** tarjetas (nombre, descripción de una línea, enlace).
   - Corporal: 15 tarjetas, con filtro rápido *Contorno corporal* / *Mamaria*.
   - Facial: 7 tarjetas.
   - Íntima: 6 tarjetas, con tratamiento visual discreto y respetuoso.
3. **Resultados de la categoría:** vista previa de 3–4 casos → `/resultados/[categoria]`.
4. **Preguntas frecuentes** de la categoría.
5. **CTA:** Reserva tu cita.

### 5.5 Plantilla de procedimiento (28 páginas) — `/procedimientos/[categoria]/[procedimiento]`
Textos tomados fielmente de la página fuente en la clínica (ver sección 3). Las secciones se adaptan a la información disponible en cada fuente.

1. **Encabezado:** nombre, frase corta, imagen, CTA agendar.
2. **¿Qué es?:** descripción del procedimiento.
3. **¿Para quién es?:** candidatos ideales e indicaciones.
4. **Beneficios.**
5. **¿Cómo es el procedimiento?:** valoración, cirugía, anestesia, duración, hospitalización.
6. **Recuperación y cuidados.**
7. **Ver resultados:** enlace a `/resultados/[categoria]` filtrado por el procedimiento (si existe galería).
8. **Preguntas frecuentes.**
9. **Procedimientos relacionados:** 3 tarjetas.
10. **CTA:** WhatsApp + `/agendar`.

**Notas específicas:**
- **Lipólisis láser y Lipo Vaser:** incluyen secciones de **Tensamax, Retraction y Microaire**, con el texto de sus páginas fuente.
- **Procedimientos íntimos:** lenguaje sobrio y clínico, imágenes no explícitas, mensaje de confidencialidad.
- **Hilos tensores y Face Up:** aclarar si se trata de procedimientos mínimamente invasivos / no quirúrgicos, según la fuente.

### 5.6 Resultados — `/resultados`
1. **Introducción:** resultados reales; cada caso es individual.
2. **Advertencia de contenido sensible:** aviso previo a las galerías con fotografías clínicas (desnudez médica), con confirmación de mayoría de edad, como en el sitio actual.
3. **Tarjetas de las 3 categorías** con imagen representativa y número de casos.
4. **Casos destacados.**
5. **CTA:** Reserva tu cita.

#### Galería por categoría — `/resultados/[categoria]`
- Galería antes/después con **filtro por procedimiento**.
- Cada caso: foto antes / después, procedimiento realizado y enlace a su página.
- Cierre: listado de procedimientos de la categoría + CTA.

### 5.7 Blog — `/recursos/blog`
- **Listado:** imagen, título, extracto, fecha, categoría.
- **Filtros** por tema (Corporal, Facial, Íntima, Recuperación, Bienestar) + buscador.
- **Detalle `/recursos/blog/[articulo]`:** título, autor (Dr. Gómez), fecha, contenido, procedimientos relacionados, artículos relacionados, CTA.
- **Fuente:** migración de https://clinicacolombianaobesidad.com/blog-saludable/ (seleccionar artículos alineados con cirugía plástica).

### 5.8 Historias de vida — `/recursos/historias-de-vida`
- **Listado:** tarjetas con foto, nombre (o iniciales), procedimiento y extracto.
- **Detalle:** testimonio completo, video si existe, procedimiento relacionado, CTA.
- **Fuente:** https://clinicacolombianaobesidad.com/historias-de-vida/

### 5.9 Prensa — `/recursos/prensa`
- Listado de apariciones en medios: logo del medio, titular, fecha, enlace o video.
- **Fuente:** https://clinicacolombianaobesidad.com/notas-prensa/

### 5.10 Agendar — `/agendar`
1. **Encabezado:** "Reserva tu cita" + qué esperar de la valoración.
2. **Formulario:** nombre, teléfono / WhatsApp, correo, procedimiento de interés (desplegable por categoría con los 28 procedimientos), mensaje, aceptación de política de datos.
3. **Acceso directo a WhatsApp.**
4. **Teléfonos.**
5. **Pasos siguientes:** 1) Te contacta un asesor → 2) Agendamos tu valoración → 3) Consulta con el Dr. Gómez.

### 5.11 Contacto — `/contacto`
- **Dirección:** Edificio Torre Zentai, Carrera 23 No. 124 – 87, Torre 1, Consultorio 805. Bogotá D.C., Colombia.
- **Mapa:** Google Maps.
- **Teléfonos:** +57 315 873 9927 · +57 315 801 0982
- **WhatsApp:** +57 312 325 5900 · +57 318 651 5726
- **Correo:** por confirmar (el sitio actual lo oculta con protección anti-spam).
- **Horario de atención:**
  - Lunes, miércoles y jueves: 7:30 a.m. – 5:00 p.m.
  - Martes y viernes: 8:00 a.m. – 5:00 p.m.
  - Sábado: 8:00 a.m. – 12:00 p.m.
  - Domingo: cerrado
- **Redes sociales:** Facebook, Instagram, YouTube, X (ver sección 7).
- Formulario corto de contacto.

### 5.12 Política de datos — `/politica-de-datos`
- Texto legal de tratamiento de datos personales, adaptado de https://clinicacolombianaobesidad.com/politica-de-datos/ y validado por el cliente.

---

## 6. Disclaimer de imágenes (footer)

Texto propuesto, visible en el footer de todas las páginas:

> Las fotografías de resultados (antes y después) publicadas en este sitio corresponden a pacientes reales, quienes otorgaron su consentimiento informado y autorización expresa para su uso con fines informativos y educativos. Los resultados pueden variar de una persona a otra y dependen de las condiciones particulares de cada paciente. La información de este sitio no reemplaza una valoración médica.

---

## 7. Datos de contacto y redes

| Canal | Dato |
|---|---|
| Teléfono | +57 315 873 9927 · +57 315 801 0982 |
| WhatsApp (principal) | +57 312 325 5900 |
| WhatsApp (alterno) | +57 318 651 5726 |
| Dirección | Edificio Torre Zentai, Cra. 23 No. 124 – 87, Torre 1, Cons. 805, Bogotá |
| Facebook | https://www.facebook.com/DrAndresGomezCirujanoplastico |
| Instagram | https://www.instagram.com/clinicaobesidadymetabolismo/ (validar si el Dr. tiene cuenta propia) |
| YouTube | https://www.youtube.com/user/OBESIDADYMETABOLISMO |
| X (Twitter) | https://twitter.com/DrAndresGomez |
| Web clínica | https://clinicacolombianaobesidad.com |

---

## 8. Cifras (por definir)

Indicios disponibles (documento *Servicios_pagina_web* y fuentes actuales), **pendientes de validación**:

| Cifra | Valor indicativo | Fuente |
|---|---|---|
| Trayectoria de la clínica | 29 años (≈30) | Documento de servicios |
| Experiencia en cirugía plástica con láser | 20 años | Footer del sitio de la clínica |
| Procedimientos quirúrgicos | 28 en este sitio (29 según documento) | Arquitectura / documento |
| Satisfacción de pacientes | +90 % | Documento de servicios |
| Servicios habilitados (clínica) | 4 | Documento de servicios |
| Pacientes operados por el Dr. | +2.000 (dato antiguo, actualizar) | drandresgomez.com |
| Cursos, seminarios y congresos | +30 | drandresgomez.com |

---

## 9. Plantillas de diseño a maquetar (8)

| # | Plantilla | Páginas que cubre |
|---|---|---|
| 1 | Home | `/` |
| 2 | Sobre el Dr. | `/sobre-el-dr-gomez` |
| 3 | Índice | `/procedimientos` + 3 índices de categoría |
| 4 | Procedimiento | 28 páginas |
| 5 | Resultados | Índice + 3 galerías |
| 6 | Listado de contenidos | Blog, Historias de vida, Prensa |
| 7 | Detalle de contenido | Artículo de blog, Historia de vida |
| 8 | Formularios / texto | Agendar, Contacto, Política de datos |

---

## 10. Pendientes del cliente

1. **Sobre el Dr.:** confirmar y actualizar trayectoria, formación, filosofía y fotos.
2. **Cifras:** validar los valores de la sección 8.
3. **Correo de contacto** que se publicará.
4. **Redes sociales:** confirmar si se usan las cuentas de la clínica o cuentas propias del Dr.
5. **Procedimientos del documento de servicios que no tienen página en el sitio de la clínica:** Braquioplastia, Cruroplastia, Alectoplastia y Lipopapada. Definir si se incluyen (requerirían texto nuevo) o se omiten.
