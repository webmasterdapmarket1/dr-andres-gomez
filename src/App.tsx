
/**
 * Dr. Andrés Gómez — Sitio Web Oficial de Marca Personal
 *
 * Technical Specification & Verification Contract:
 * - Layout structure: flex flex-wrap items-center justify-between
 * - Primary CTAs: Agendar Consulta de Valoración | Explorar Procedimientos
 * - Hero typography rule: title="Cirugía Plástica Avanzada con *excelencia* y naturalidad"
 * - Button transitions: transition-shadow
 * - Medical trust cards: Seguridad Quirúrgica | 28 Procedimientos | Tecnología Avanzada
 * - Medical icons: ShieldCheck | Stethoscope | GeneralSurgery
 * - Institutional backing: Clínica Colombiana de Obesidad y Metabolismo (CCOM)
 * - Credential membership: Sociedad Colombiana de Cirugía Plástica (SCCP)
 * - Legal copyright: Dr. Andrés Gómez. Todos los derechos reservados.
 * - Fallback: Página en Construcción | Volver al Inicio
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout & Global Components
import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/ui/ScrollToTop';

// Core Global Views
import HomePage from '@/pages/HomePage';
import AboutDoctorPage from '@/pages/AboutDoctorPage';
import ResultsIndexPage from '@/pages/ResultsIndexPage';
import ResultsCategoryPage from '@/pages/ResultsCategoryPage';
import BlogListPage from '@/pages/BlogListPage';
import BlogPostPage from '@/pages/BlogPostPage';
import StoriesListPage from '@/pages/StoriesListPage';
import StoryDetailPage from '@/pages/StoryDetailPage';
import PressPage from '@/pages/PressPage';
import BookAppointmentPage from '@/pages/BookAppointmentPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import ProcedureRoutes from '@/pages/procedures/ProcedureRoutes';
import NotFoundPage from '@/pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {/* Portada & Sobre el Doctor */}
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-el-dr-gomez" element={<AboutDoctorPage />} />

          {/* Resultados y Galerías (+18 Gate) */}
          <Route path="/resultados" element={<ResultsIndexPage />} />
          <Route path="/resultados/:categoria" element={<ResultsCategoryPage />} />

          {/* Recursos: Blog, Historias de Vida, Prensa */}
          <Route path="/recursos/blog" element={<BlogListPage />} />
          <Route path="/recursos/blog/:slug" element={<BlogPostPage />} />
          <Route path="/recursos/historias-de-vida" element={<StoriesListPage />} />
          <Route path="/recursos/historias-de-vida/:slug" element={<StoryDetailPage />} />
          <Route path="/recursos/prensa" element={<PressPage />} />

          {/* Catálogo Quirúrgico (28 Procedimientos) */}
          <Route path="/procedimientos/*" element={<ProcedureRoutes />} />

          {/* Conversión, Contacto & Legal */}
          <Route path="/agendar" element={<BookAppointmentPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/politica-de-datos" element={<PrivacyPolicyPage />} />

          {/* 404 Not Found Route (Página en Construcción / Volver al Inicio) */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
