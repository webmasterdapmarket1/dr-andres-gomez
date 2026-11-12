import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Stethoscope } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 lg:py-28 max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <span className="badge-medical-soft text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
        Error 404 • Página No Encontrada
      </span>

      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-800">
        Página no encontrada
      </h1>

      <p className="text-sm text-graphite-body leading-relaxed">
        La ruta que buscas no existe o ha sido trasladada. Puedes regresar al inicio, explorar nuestro catálogo de 28 procedimientos quirúrgicos o contactar a nuestra sede Torre Zentai.
      </p>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link to="/" className="btn-primary py-3 px-6 text-xs inline-flex items-center gap-2">
          <Home className="w-4 h-4" />
          <span>Regresar al Inicio</span>
        </Link>
        <Link to="/procedimientos" className="btn-secondary py-3 px-6 text-xs inline-flex items-center gap-2">
          <Stethoscope className="w-4 h-4" />
          <span>Explorar Procedimientos</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
