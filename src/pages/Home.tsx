import { Link } from 'react-router-dom';
import { PawPrint, Stethoscope, Heart, ShoppingBag, BookOpen, ArrowRight, Award, Users, Sparkles, CalendarDays, Globe } from 'lucide-react';
import { dogCelebrations } from '../constants/data';

const features = [
  {
    icon: Stethoscope,
    title: 'Find a Vet',
    description: 'Browse trusted vets in your area, check availability, and book appointments.',
    link: '/vets',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Heart,
    title: 'Symptom Checker',
    description: 'AI-powered health advice — describe symptoms and get first aid guidance instantly.',
    link: '/health',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: ShoppingBag,
    title: 'Shop Supplies',
    description: 'Premium food, toys, health products, and grooming essentials.',
    link: '/shop',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: BookOpen,
    title: 'Expert Guides',
    description: 'New owner tips, emotional care, rehab advice, and more.',
    link: '/guides',
    color: 'bg-accent/10 text-accent',
  },
];

const stats = [
  { icon: Stethoscope, value: '50+', label: 'Trusted Vets' },
  { icon: Heart, value: '10K+', label: 'Health Checks' },
  { icon: Users, value: '5K+', label: 'Happy Owners' },
  { icon: Award, value: '4.8★', label: 'Avg Rating' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary/20 p-4 rounded-full animate-bounce-in">
                <PawPrint className="w-12 h-12 text-secondary" />
              </div>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-on-primary mb-6 leading-tight">
              Everything Your
              <span className="text-secondary block sm:inline"> Dog Needs</span>
            </h1>
            <p className="text-lg sm:text-xl text-on-primary/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Find trusted vets, get AI-powered health advice, shop for premium supplies, and learn expert care tips — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/health"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-secondary/90 transition-all duration-150 active:scale-[0.97]"
              >
                <Heart className="w-5 h-5" />
                Check Symptoms
              </Link>
              <Link
                to="/vets"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-on-primary border border-on-primary/30 px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-white/20 transition-all duration-150 active:scale-[0.97] backdrop-blur-sm"
              >
                <Stethoscope className="w-5 h-5" />
                Find a Vet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">Everything under one paw</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              From finding the right vet to keeping your pup happy and healthy, we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  to={feature.link}
                  className="group bg-card border border-border rounded-2xl p-6 hover:bg-card-hover hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{feature.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-secondary group-hover:gap-2 transition-all duration-150">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent/10 to-secondary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Got a new puppy?
          </h2>
          <p className="text-foreground/60 text-lg mb-8 max-w-xl mx-auto">
            Our step-by-step guide covers everything — from puppy-proofing your home to the first vet visit.
          </p>
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-primary/90 transition-all duration-150 active:scale-[0.97]"
          >
            <BookOpen className="w-5 h-5" />
            Read the New Owner Guide
          </Link>
        </div>
      </section>

      {/* Celebrations Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-transparent via-secondary/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">Dog Day Celebrations</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              From International Dog Day to National Puppy Day — celebrate your best friend all year round!
              Discover fun ways to honor your pup on every special occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dogCelebrations.slice(0, 4).map((c) => (
              <div
                key={c.id}
                className="bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}>
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-semibold text-foreground text-sm group-hover:text-secondary transition-colors duration-150">
                      {c.name}
                    </h3>
                    <p className="text-xs text-foreground/50 mt-0.5">{c.date}</p>
                  </div>
                </div>
                <p className="text-xs text-foreground/60 line-clamp-2 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/celebrations"
              className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-xl font-semibold text-sm hover:bg-secondary/20 transition-all duration-150 active:scale-[0.97] group"
            >
              <Globe className="w-4 h-4" />
              View All Celebrations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">Latest Articles</h2>
              <p className="text-foreground/60">Expert advice for happy, healthy dogs.</p>
            </div>
            <Link to="/articles" className="hidden sm:inline-flex items-center gap-1 text-secondary font-medium hover:gap-2 transition-all duration-150">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Understanding Your Dog's Emotional Needs",
                image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=350&fit=crop',
                category: 'Emotional Care',
                link: '/articles/a1',
              },
              {
                title: 'Canine Rehab: Helping Dogs Recover',
                image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=350&fit=crop',
                category: 'Rehab',
                link: '/articles/a3',
              },
              {
                title: 'International Dog Day Celebration',
                image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=350&fit=crop',
                category: 'Dog Day',
                link: '/articles/a2',
              },
            ].map((article) => (
              <Link
                key={article.title}
                to={article.link}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-secondary transition-colors duration-150">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/articles" className="inline-flex items-center gap-1 text-secondary font-medium">
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}