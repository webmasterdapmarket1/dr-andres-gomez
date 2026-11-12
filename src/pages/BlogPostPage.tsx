import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { blogPosts } from '@/data/resources';
import { PROCEDURE_CATEGORIES } from '@/data/navigation';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/recursos/blog" replace />;
  }

  // Find related procedures
  const allProcedures = PROCEDURE_CATEGORIES.flatMap((c) =>
    c.procedures.map((p) => ({ ...p, categorySlug: c.slug }))
  );
  const relatedProcedures = allProcedures.filter((p) =>
    post.relatedProcedureSlugs.includes(p.slug)
  );

  return (
    <div className="py-10 lg:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <Link
          to="/recursos/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-medical-primary hover:text-medical-hover"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al Blog Médico</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="badge-medical-soft font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-graphite-muted flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </span>
            <span className="text-graphite-muted flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-navy-800 leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-graphite-body leading-relaxed border-l-4 border-medical-primary pl-4 italic">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body Content */}
        <div className="prose prose-sm max-w-none text-graphite-body space-y-5 text-sm sm:text-base leading-relaxed border-t border-cream-300 pt-8">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Clinical Tip Box */}
          <div className="my-8 p-6 rounded-2xl bg-cream-50 border border-cream-300 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-navy-800 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-medical-primary" />
              <span>Criterio Quirúrgico del Dr. Gómez</span>
            </div>
            <p className="text-xs sm:text-sm text-graphite-body leading-relaxed">
              La indicación quirúrgica adecuada y la elección tecnológica no son intercambiables; cada anatomía responde a un análisis médico particular. Nunca tomes una decisión basada únicamente en tendencias de redes sociales.
            </p>
          </div>
        </div>

        {/* Related Procedures Section */}
        {relatedProcedures.length > 0 && (
          <div className="pt-8 border-t border-cream-300 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-navy-800">
              Procedimientos Relacionados con este Artículo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedProcedures.map((proc) => (
                <Link
                  key={proc.slug}
                  to={`/procedimientos/${proc.categorySlug}/${proc.slug}`}
                  className="p-4 rounded-xl bg-white border border-cream-300 hover:shadow-card transition-all flex items-center justify-between group"
                >
                  <div className="space-y-0.5">
                    <span className="font-semibold text-xs text-navy-800 group-hover:text-medical-primary transition-colors block">
                      {proc.name}
                    </span>
                    <span className="text-[11px] text-graphite-muted block">
                      {proc.description}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-graphite-muted group-hover:text-medical-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Author Card */}
        <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300 flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/images/dr-andres-gomez-ccoym-1024x682.webp"
            alt="Dr. Andrés Gómez MD"
            className="w-20 h-20 rounded-full object-cover object-[45%_18%] border-2 border-medical-primary shadow-sm flex-shrink-0"
          />
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-medical-primary uppercase tracking-wider block">
              Autor Médico
            </span>
            <h4 className="font-serif text-lg font-bold text-navy-800">
              Dr. Andrés Gómez MD
            </h4>
            <p className="text-xs text-graphite-body leading-relaxed">
              Cirujano Plástico, Estético y Reconstructivo con más de 29 años de experiencia. Especialista SACPER, miembro de número SCCP y Director Científico de Cirugía Plástica en CCOM Bogotá.
            </p>
          </div>
        </div>

        {/* Bottom Booking CTA Banner */}
        <div className="p-8 rounded-3xl bg-navy-900 text-white text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            ¿Deseas una valoración diagnóstica personalizada?
          </h3>
          <p className="text-xs sm:text-sm text-cream-200/90 max-w-lg mx-auto">
            Agenda tu cita en el Consultorio 805 de Torre Zentai o mediante teleconsulta médica guiada.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link to="/agendar" className="btn-primary py-3 px-6 text-xs inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Reserva tu cita de valoración</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
