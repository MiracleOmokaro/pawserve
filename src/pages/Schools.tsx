import { useState } from 'react';
import { GraduationCap, MapPin, Star, Search, ExternalLink } from 'lucide-react';
import { dogSchools } from '../constants/places';

export default function Schools() {
  const [query, setQuery] = useState('');

  const filtered = dogSchools.filter((s) => {
    const q = query.trim().toLowerCase();
    return (
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.location.toLowerCase().includes(q) ||
      s.country.toLowerCase().includes(q) ||
      s.specialty.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <section className="bg-gradient-to-br from-primary via-primary to-primary/95 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary/20 p-3.5 rounded-full">
              <GraduationCap className="w-9 h-9 text-secondary" />
            </div>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-on-primary mb-4">Dog School Finder</h1>
          <p className="text-on-primary/80 max-w-2xl mx-auto text-base sm:text-lg">
            Find trusted dog training schools and academies worldwide — from puppy kindergarten to professional K9 programs.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-xl mx-auto mb-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by school, city, or specialty..."
              className="w-full pl-9 pr-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Search dog schools"
            />
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-foreground/40" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No schools found</h3>
              <p className="text-foreground/60">Try a different city or specialty keyword.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((school) => (
                <article
                  key={school.id}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={school.image}
                      alt={school.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-foreground">
                      {school.flag} {school.country}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h2 className="font-heading font-semibold text-foreground group-hover:text-secondary transition-colors duration-150">
                        {school.name}
                      </h2>
                      <span className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                        <Star className="w-4 h-4 text-secondary fill-secondary" /> {school.rating}
                      </span>
                    </div>
                    <p className="flex items-center gap-1 text-xs text-foreground/50 mb-3">
                      <MapPin className="w-3.5 h-3.5" /> {school.location}
                    </p>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-4">{school.description}</p>
                    <div className="mt-auto space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {school.programs.slice(0, 3).map((p) => (
                          <span key={p} className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-secondary/10 text-secondary">
                            {p}
                          </span>
                        ))}
                        {school.programs.length > 3 && (
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-muted text-foreground/60">
                            +{school.programs.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="text-sm font-semibold text-secondary">{school.price}</span>
                        {school.website && (
                          <a
                            href={school.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-foreground/60 hover:text-secondary transition-colors duration-150"
                          >
                            Visit <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
