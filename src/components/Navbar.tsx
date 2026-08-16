import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Stethoscope, ShoppingBag, BookOpen, Home, Sparkles, TreePine, GraduationCap, UtensilsCrossed, PawPrint } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/breeds', label: 'Breeds', icon: PawPrint },
  { to: '/vets', label: 'Vets', icon: Stethoscope },
  { to: '/health', label: 'Health', icon: Heart },
  { to: '/shop', label: 'Shop', icon: ShoppingBag },
  { to: '/guides', label: 'Guides', icon: BookOpen },
  { to: '/parks', label: 'Parks', icon: TreePine },
  { to: '/schools', label: 'Schools', icon: GraduationCap },
  { to: '/dog-menu', label: 'Dog Menu', icon: UtensilsCrossed },
  { to: '/celebrations', label: 'Celebrate', icon: Sparkles },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — high quality white dog headshot */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="PawServe home">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=128&h=128&fit=crop&crop=faces"
              alt="PawServe"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-secondary/30 transition-transform duration-200 group-hover:scale-110"
            />
            <span className="font-heading text-xl text-primary font-bold">PawServe</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    active
                      ? 'bg-secondary/10 text-secondary'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted transition-colors duration-150"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white animate-fade-in" role="navigation" aria-label="Mobile navigation">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                    active
                      ? 'bg-secondary/10 text-secondary'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
