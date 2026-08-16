import { useState } from 'react';
import { UtensilsCrossed, MapPin, Star, Search, Coffee } from 'lucide-react';
import { dogFriendlyRestaurants } from '../constants/places';

export default function DogMenu() {
  const [query, setQuery] = useState('');

  const filtered = dogFriendlyRestaurants.filter((r) => {
    const q = query.trim().toLowerCase();
    return (
      !q ||
      r.name.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q) ||
      r.country.toLowerCase().includes(q) ||
      r.cuisine.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <section className="bg-gradient-to-br from-primary via-primary to-primary/95 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary/20 p-3.5 rounded-full">
              <UtensilsCrossed className="w-9 h-9 text-secondary" />
            </div>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-on-primary mb-4">Global Dog Menu</h1>
          <p className="text-on-primary/80 max-w-2xl mx-auto text-base sm:text-lg">
            Dog-friendly cafés, restaurants, and bakeries worldwide — where your pup is the guest of honor.
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
              placeholder="Search by café, city, or cuisine..."
              className="w-full pl-9 pr-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Search dog-friendly restaurants"
            />
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-7 h-7 text-foreground/40" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No spots found</h3>
              <p className="text-foreground/60">Try a different city or cuisine.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((restaurant) => (
                <article
                  key={restaurant.id}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-foreground">
                      {restaurant.flag} {restaurant.country}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h2 className="font-heading font-semibold text-foreground group-hover:text-secondary transition-colors duration-150">
                        {restaurant.name}
                      </h2>
                      <span className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                        <Star className="w-4 h-4 text-secondary fill-secondary" /> {restaurant.rating}
                      </span>
                    </div>
                    <p className="flex items-center gap-1 text-xs text-foreground/50 mb-1">
                      <MapPin className="w-3.5 h-3.5" /> {restaurant.location}
                    </p>
                    <p className="text-xs font-medium text-secondary mb-3">{restaurant.cuisine}</p>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-4">{restaurant.description}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {restaurant.dogPerks.map((perk) => (
                        <span key={perk} className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-secondary/10 text-secondary">
                          {perk}
                        </span>
                      ))}
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
