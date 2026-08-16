import { useState } from 'react';
import { TreePine, MapPin, Star, Search, Footprints } from 'lucide-react';
import { dogParks } from '../constants/places';

export default function Parks() {
  const [query, setQuery] = useState('');

  const filtered = dogParks.filter((p) => {
    const q = query.trim().toLowerCase();
    return (
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.country.toLowerCase().includes(q) ||
      p.bestFor.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <section className="bg-gradient-to-br from-primary via-primary to-primary/95 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary/20 p-3.5 rounded-full">
              <TreePine className="w-9 h-9 text-secondary" />
            </div>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-on-primary mb-4">Dog Parks Worldwide</h1>
          <p className="text-on-primary/80 max-w-2xl mx-auto text-base sm:text-lg">
            Discover the world's best dog parks and off-leash sites — iconic urban oases, beaches, and forest trails.
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
              placeholder="Search parks by name, city, or country..."
              className="w-full pl-9 pr-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Search dog parks"
            />
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-7 h-7 text-foreground/40" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No parks found</h3>
              <p className="text-foreground/60">Try a different city or country.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((park) => (
                <article
                  key={park.id}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={park.image}
                      alt={park.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-foreground">
                      {park.flag} {park.country}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h2 className="font-heading font-semibold text-foreground group-hover:text-secondary transition-colors duration-150">
                        {park.name}
                      </h2>
                      <span className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                        <Star className="w-4 h-4 text-secondary fill-secondary" /> {park.rating}
                      </span>
                    </div>
                    <p className="flex items-center gap-1 text-xs text-foreground/50 mb-3">
                      <MapPin className="w-3.5 h-3.5" /> {park.location}
                    </p>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-4">{park.description}</p>
                    <div className="mt-auto space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {park.features.map((f) => (
                          <span key={f} className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-accent/10 text-accent">
                            {f}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 pt-3 border-t border-border text-xs text-foreground/60">
                        <Footprints className="w-3.5 h-3.5 text-secondary" />
                        Best for: <span className="font-medium text-foreground">{park.bestFor}</span>
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
