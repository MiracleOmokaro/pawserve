import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Shield,
  PawPrint,
  Ruler,
  Zap,
  Heart,
  MapPin,
  DollarSign,
  Home,
  X,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { breeds, breedCategories, type DogBreed, type BreedCategory } from '../constants/breeds';

function EnergyDots({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Energy level ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${i <= level ? 'bg-secondary' : 'bg-muted'}`}
        />
      ))}
    </div>
  );
}

function BreedDetailModal({ breed, onClose }: { breed: DogBreed; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${breed.name} details`}
    >
      <div className="absolute inset-0 bg-black/50 animate-fade-in" onClick={onClose} aria-hidden="true" />
      <div className="relative bg-background w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl animate-fade-in-up shadow-2xl">
        <div className="relative">
          <img src={breed.image} alt={breed.name} className="w-full h-56 sm:h-64 object-cover rounded-t-3xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors duration-150 cursor-pointer"
            aria-label="Close breed details"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-white">{breed.category}</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-foreground">{breed.size}</span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">{breed.name}</h2>
              <p className="text-sm text-foreground/50 flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5" /> Origin: {breed.origin}
              </p>
            </div>
            <EnergyDots level={breed.energy} />
          </div>

          <p className="text-foreground/70 leading-relaxed mb-6">{breed.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-card border border-border rounded-xl p-4">
              <Ruler className="w-5 h-5 text-secondary mb-2" />
              <div className="text-xs text-foreground/50">Height</div>
              <div className="font-semibold text-foreground text-sm">{breed.height}</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <PawPrint className="w-5 h-5 text-secondary mb-2" />
              <div className="text-xs text-foreground/50">Weight</div>
              <div className="font-semibold text-foreground text-sm">{breed.weight}</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <Heart className="w-5 h-5 text-secondary mb-2" />
              <div className="text-xs text-foreground/50">Lifespan</div>
              <div className="font-semibold text-foreground text-sm">{breed.lifespan}</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" /> Temperament
              </h3>
              <div className="flex flex-wrap gap-2">
                {breed.temperament.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                <Home className="w-4 h-4 text-secondary" /> Good With
              </h3>
              <div className="flex flex-wrap gap-2">
                {breed.goodWith.map((g) => (
                  <span key={g} className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5 mb-6">
            <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-secondary" /> Did You Know?
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{breed.funFact}</p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/95 rounded-2xl p-5 text-on-primary mb-6">
            <h3 className="font-heading font-semibold mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-secondary" /> Where to Buy or Adopt
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-on-primary/60 mb-1">From a responsible breeder</div>
                <div className="font-heading text-lg font-bold text-secondary">{breed.priceRange}</div>
                <p className="text-xs text-on-primary/60 mt-1">Always verify health testing & kennel conditions.</p>
              </div>
              <div>
                <div className="text-xs text-on-primary/60 mb-1">Shelter / rescue availability</div>
                <div className="font-heading text-lg font-bold text-secondary">{breed.adoptionAvailability}</div>
                <p className="text-xs text-on-primary/60 mt-1">Check breed-specific rescues & local shelters first.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/health"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-secondary/90 transition-all duration-150 active:scale-[0.97]"
            >
              <Sparkles className="w-4 h-4" /> Health Advice
            </Link>
            <Link
              to="/schools"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all duration-150 active:scale-[0.97]"
            >
              <GraduationCap className="w-4 h-4" /> Find a Training School
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Breeds() {
  const [category, setCategory] = useState<BreedCategory | 'All'>('All');
  const [query, setQuery] = useState('');
  const [size, setSize] = useState<'All' | DogBreed['size']>('All');
  const [selected, setSelected] = useState<DogBreed | null>(null);

  const filtered = useMemo(() => {
    return breeds.filter((b) => {
      const matchCat = category === 'All' || b.category === category;
      const matchSize = size === 'All' || b.size === size;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.temperament.some((t) => t.toLowerCase().includes(q)) ||
        b.purpose.toLowerCase().includes(q);
      return matchCat && matchSize && matchQuery;
    });
  }, [category, query, size]);

  const clearFilters = () => {
    setCategory('All');
    setQuery('');
    setSize('All');
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary via-primary to-primary/95 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary/20 p-3.5 rounded-full">
              <PawPrint className="w-9 h-9 text-secondary" />
            </div>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-on-primary mb-4">Breed Finder</h1>
          <p className="text-on-primary/80 max-w-2xl mx-auto text-base sm:text-lg">
            Explore {breeds.length} dog breeds across {breedCategories.length} categories — find your perfect match by temperament, size, and lifestyle.
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search breeds, traits, or purpose..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Search dog breeds"
              />
            </div>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value as typeof size)}
              className="px-4 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer"
              aria-label="Filter by size"
            >
              <option value="All">All sizes</option>
              <option value="Toy">Toy</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Giant">Giant</option>
            </select>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1" role="tablist" aria-label="Breed categories">
            <button
              onClick={() => setCategory('All')}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 cursor-pointer ${
                category === 'All' ? 'bg-primary text-on-primary' : 'bg-card border border-border text-foreground/70 hover:text-foreground'
              }`}
              aria-pressed={category === 'All'}
            >
              All
            </button>
            {breedCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 cursor-pointer ${
                  category === c.id ? 'bg-primary text-on-primary' : 'bg-card border border-border text-foreground/70 hover:text-foreground'
                }`}
                aria-pressed={category === c.id}
              >
                {c.id}
              </button>
            ))}
          </div>

          {category !== 'All' && (
            <p className="text-sm text-foreground/60">
              {breedCategories.find((c) => c.id === category)?.description}
            </p>
          )}
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              {filtered.length} {filtered.length === 1 ? 'breed' : 'breeds'}
            </h2>
            {(category !== 'All' || query || size !== 'All') && (
              <button
                onClick={clearFilters}
                className="text-sm text-secondary font-medium hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-foreground/40" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No breeds match your search</h3>
              <p className="text-foreground/60 mb-4">Try a different keyword or clear your filters to browse all breeds.</p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-secondary/90 transition-all duration-150 active:scale-[0.97] cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((breed) => (
                <button
                  key={breed.id}
                  onClick={() => setSelected(breed)}
                  className="group text-left bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                  aria-label={`View ${breed.name} details`}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={breed.image}
                      alt={breed.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-secondary transition-colors duration-150">
                        {breed.name}
                      </h3>
                      <span className="shrink-0 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-secondary/10 text-secondary">
                        {breed.size}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-foreground/50">{breed.category}</span>
                      <span className="text-foreground/30">•</span>
                      <EnergyDots level={breed.energy} />
                    </div>
                    <p className="text-sm text-foreground/60 line-clamp-2 leading-relaxed">{breed.description}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {breedCategories.map((c) => {
              const count = breeds.filter((b) => b.category === c.id).length;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setCategory(c.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-card border border-border rounded-xl p-4 text-left hover:bg-card-hover hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span className="font-heading font-semibold text-foreground text-sm">{c.label}</span>
                  </div>
                  <p className="text-xs text-foreground/50">{count} breeds</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {selected && <BreedDetailModal breed={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
