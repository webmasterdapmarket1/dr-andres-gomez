import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-navy-800 font-sans antialiased selection:bg-medical-soft selection:text-medical-softText">
      {/* Skip to Content for WCAG 2.1 AA Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-medical-primary text-white font-semibold px-4 py-2 rounded-full z-[100] shadow-floating transition-all"
      >
        Saltar al contenido principal
      </a>

      {/* Global Fixed Top Contact Bar */}
      <TopBar />

      {/* Global Sticky Navigation Header with 3-Column MegaMenu */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {children || <Outlet />}
      </main>

      {/* Global Footer with 8 Sections & Bioethical Disclaimer */}
      <Footer />

      {/* Floating Contextual WhatsApp Action Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
