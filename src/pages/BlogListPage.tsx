import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Clock,
  ArrowRight,
  BookOpen,
  X,
  Filter,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { blogPosts } from '@/data/resources';

type CategoryFilter = 'Todos' | 'Corporal' | 'Facial' | 'Recuperación' | 'Bienestar';

export const BlogListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todos');

  const categories: CategoryFilter[] = ['Todos', 'Corporal', 'Facial', 'Recuperación', 'Bienestar'];

  // Filter blog posts based on search query and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'Todos' || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.some((p) => p.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Todos');
  };

  return (
    <div className="py-10 lg:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          kicker="Educación Médica y Criterio Científico"
          title="Blog de Cirugía Plástica, *tecnología* y bienestar"
          subtitle="Artículos y guías escritas desde la experiencia quirúrgica del Dr. Andrés Gómez para orientarte en cada etapa de tu procedimiento."
        />

        {/* Search Bar & Category Filters */}
        <div className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-graphite-muted absolute left-4 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tema, procedimiento o síntoma (ej. Lipólisis, faja, fibrosis, rinoplastia)..."
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent text-navy-800 placeholder-graphite-muted"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-graphite-muted hover:text-navy-800"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-bold text-navy-800 mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-medical-primary" />
              <span>Temas:</span>
            </span>
            {categories.map((cat) => {
              const count =
                cat === 'Todos'
                  ? blogPosts.length
                  : blogPosts.filter((p) => p.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-medical-primary text-white shadow-sm'
                      : 'bg-cream-50 text-navy-800 hover:bg-cream-200 border border-cream-300'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-graphite-muted px-1">
          <span>
            Mostrando <strong>{filteredPosts.length}</strong> de {blogPosts.length} artículos médicos
          </span>
          {(searchQuery || selectedCategory !== 'Todos') && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-medical-primary font-bold hover:underline"
            >
              Restablecer todos los filtros
            </button>
          )}
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="badge-medical-soft font-bold px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-graphite-muted">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy-800 leading-snug hover:text-medical-primary transition-colors">
                    <Link to={`/recursos/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-graphite-body leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="p-6 pt-0 border-t border-cream-200/60 mt-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-graphite-muted">
                    <span className="font-semibold text-navy-800">{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <Link
                    to={`/recursos/blog/${post.slug}`}
                    className="font-bold text-medical-primary hover:text-medical-hover inline-flex items-center gap-1"
                  >
                    <span>Leer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-12 rounded-3xl bg-white border border-cream-300 text-center space-y-4 max-w-lg mx-auto shadow-sm">
            <div className="w-14 h-14 rounded-full bg-cream-100 text-medical-primary flex items-center justify-center mx-auto">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-navy-800">
              No encontramos artículos para &ldquo;{searchQuery}&rdquo;
            </h3>
            <p className="text-xs text-graphite-body leading-relaxed">
              Prueba buscando por otro término médico (ej. &ldquo;Láser&rdquo;, &ldquo;Vaser&rdquo;, &ldquo;recuperación&rdquo;) o restablece los filtros temáticos.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="btn-primary text-xs py-2 px-5 inline-flex items-center gap-1.5"
            >
              <span>Restablecer filtros de búsqueda</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListPage;
