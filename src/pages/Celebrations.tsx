import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles, ChevronDown, ChevronUp, BookOpen, Heart } from 'lucide-react';
import { dogCelebrations } from '../constants/data';

export default function Celebrations() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero Header */}
      <div className="text-center mb-8">
        <div className="relative inline-flex mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-secondary" />
          </div>
          <span className="absolute -top-1 -right-1 text-lg">🐾</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          Dog Day Celebrations
        </h1>
        <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
          From International Dog Day to National Puppy Day — celebrate every moment with your best friend.
          Discover fun ways to honor your pup all year round.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        <div className="bg-card border border-border rounded-2xl p-4 text-center hover:shadow-md transition-all duration-200">
          <div className="font-heading text-2xl font-bold text-secondary">{dogCelebrations.length}</div>
          <div className="text-xs text-foreground/60">Celebrations</div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-4 text-center hover:shadow-md transition-all duration-200">
          <div className="font-heading text-2xl font-bold text-accent">12</div>
          <div className="text-xs text-foreground/60">Months of Fun</div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-4 text-center hover:shadow-md transition-all duration-200">
          <div className="font-heading text-2xl font-bold text-secondary">365</div>
          <div className="text-xs text-foreground/60">Days to Love Dogs</div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-4 text-center hover:shadow-md transition-all duration-200">
          <div className="font-heading text-2xl font-bold text-accent">∞</div>
          <div className="text-xs text-foreground/60">Reasons to Celebrate</div>
        </div>
      </div>

      {/* Celebration Cards */}
      <div className="space-y-6">
        {dogCelebrations.map((celebration, index) => {
          const isExpanded = expandedId === celebration.id;

          return (
            <div
              key={celebration.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Image */}
                <div className="md:col-span-1 overflow-hidden">
                  <img
                    src={celebration.image}
                    alt={celebration.name}
                    className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${celebration.color}`}>
                      <Calendar className="w-3.5 h-3.5" />
                      {celebration.date}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {celebration.name}
                  </h2>

                  <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                    {celebration.description}
                  </p>

                  {/* Fun Fact */}
                  <div className="bg-accent/5 border border-accent/10 rounded-xl p-4 mb-4">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">🐾 Did You Know?</p>
                    <p className="text-sm text-foreground/70 italic">{celebration.funFact}</p>
                  </div>

                  {/* How to Celebrate (expandable) */}
                  <button
                    onClick={() => toggleExpand(celebration.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors duration-150 cursor-pointer"
                    aria-expanded={isExpanded}
                    aria-controls={`celebration-details-${celebration.id}`}
                  >
                    {isExpanded ? 'Show less' : 'How to celebrate'}
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div id={`celebration-details-${celebration.id}`} className="mt-4 animate-fade-in">
                      <ul className="space-y-2">
                        {celebration.howToCelebrate.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center bg-gradient-to-r from-secondary/5 to-accent/5 border border-secondary/10 rounded-2xl p-8 sm:p-10">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Every day is a dog day!
        </h2>
        <p className="text-foreground/60 max-w-lg mx-auto mb-6">
          Whether it's a national celebration or just a regular Tuesday, your dog deserves love.
          Explore our guides and articles for year-round inspiration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/articles"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-secondary/90 transition-all duration-150 active:scale-[0.97]"
          >
            <BookOpen className="w-4 h-4" />
            Read Celebration Articles
          </Link>
          <Link
            to="/guides"
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all duration-150 active:scale-[0.97]"
          >
            <Heart className="w-4 h-4" />
            New Owner Guide
          </Link>
        </div>
      </div>
    </div>
  );
}