import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import ProceduresIndexPage from './ProceduresIndexPage';
import ProcedureCategoryPage from './ProcedureCategoryPage';
import ProcedureDetailPage from './ProcedureDetailPage';
import { getProcedureBySlug, normalizeCategorySlug } from '@/data/procedures';

function CategoryRouteHandler() {
  const { categoria } = useParams<{ categoria: string }>();
  const normalized = normalizeCategorySlug(categoria || '');

  if (!normalized) {
    return <Navigate to="/procedimientos" replace />;
  }

  // Redirect alias to canonical category (e.g., 'corporal' -> 'cirugia-corporal')
  if (categoria !== normalized) {
    return <Navigate to={`/procedimientos/${normalized}`} replace />;
  }

  return <ProcedureCategoryPage categorySlug={normalized} />;
}

function DetailRouteHandler() {
  const { categoria, slug } = useParams<{ categoria: string; slug: string }>();
  const procedure = getProcedureBySlug(slug || '');

  if (!procedure) {
    return <Navigate to={`/procedimientos/${categoria || ''}`} replace />;
  }

  // Canonical redirection if slug was an alias OR accessed under wrong category
  if (procedure.slug !== slug || procedure.category !== categoria) {
    return <Navigate to={`/procedimientos/${procedure.category}/${procedure.slug}`} replace />;
  }

  return <ProcedureDetailPage procedure={procedure} />;
}

export default function ProcedureRoutes() {
  return (
    <Routes>
      <Route index element={<ProceduresIndexPage />} />
      <Route path=":categoria" element={<CategoryRouteHandler />} />
      <Route path=":categoria/:slug" element={<DetailRouteHandler />} />
      {/* Resilient fallback */}
      <Route path="*" element={<Navigate to="/procedimientos" replace />} />
    </Routes>
  );
}
