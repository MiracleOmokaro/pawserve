import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Heart, Activity, CalendarDays } from 'lucide-react';
import { articles } from '../constants/data';

const categoryIcons: Record<string, React.ReactNode> = {
  'Emotional Care': <Heart className="w-4 h-4" />,
  'Rehab': <Activity className="w-4 h-4" />,
  'Dog Day': <CalendarDays className="w-4 h-4" />,
};

export default function Articles() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-7 h-7 text-secondary" />
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">Articles</h1>
        <p className="text-foreground/60 max-w-lg mx-auto">
          Expert advice on dog care, emotional well-being, rehabilitation, and more.
        </p>
      </div>

      {/* Article Grid */}
      {articles.length === 0 ? (
        <div className="text-center py-16">
          <BookOpen className="w-12 h-12 text-foreground/20 mx-auto mb-4" />
          <p className="text-foreground/50 text-lg">No articles yet.</p>
          <p className="text-foreground/40 text-sm mt-2">Check back soon for new content!</p>
        </div>
      ) : (
        <div className="space-y-8">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              to={`/articles/${article.id}`}
              className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="md:col-span-1 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm">{categoryIcons[article.category]}</span>
                    <span className="text-xs font-medium text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-foreground/40">{article.publishedAt}</span>
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors duration-150">
                    {article.title}
                  </h2>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/50">By {article.author}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-secondary group-hover:gap-2 transition-all duration-150">
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}