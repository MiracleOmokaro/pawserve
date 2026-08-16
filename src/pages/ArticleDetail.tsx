import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar, User } from 'lucide-react';
import { articles } from '../constants/data';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <BookOpen className="w-12 h-12 text-foreground/20 mx-auto mb-4" />
        <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Article not found</h1>
        <p className="text-foreground/60 mb-6">The article you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-secondary/90 transition-all duration-150 active:scale-[0.97]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Back link */}
      <Link
        to="/articles"
        className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors duration-150 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Articles
      </Link>

      {/* Hero Image */}
      <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-8">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1.5 rounded-full">
          {article.category}
        </span>
        <div className="flex items-center gap-1.5 text-sm text-foreground/50">
          <Calendar className="w-3.5 h-3.5" />
          {article.publishedAt}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-foreground/50">
          <User className="w-3.5 h-3.5" />
          {article.author}
        </div>
      </div>

      {/* Title */}
      <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
        {article.title}
      </h1>

      {/* Content */}
      <div className="prose prose-sm sm:prose-base max-w-none">
        <div className="text-foreground/80 leading-relaxed space-y-4 whitespace-pre-line">
          {article.content}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-foreground/50">Written by {article.author}</p>
            <p className="text-sm text-foreground/40">Published {article.publishedAt}</p>
          </div>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-secondary/90 transition-all duration-150 active:scale-[0.97]"
          >
            <ArrowLeft className="w-4 h-4" />
            More Articles
          </Link>
        </div>
      </div>
    </article>
  );
}