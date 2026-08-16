import { Link } from 'react-router-dom';
import { PawPrint, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4" aria-label="PawServe home">
              <PawPrint className="w-6 h-6 text-secondary" />
              <span className="font-heading text-xl font-bold">PawServe</span>
            </Link>
            <p className="text-on-primary/70 text-sm leading-relaxed">
              Everything your dog needs, in one place. Find vets, get health advice, shop for supplies, and learn how to care for your best friend.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4 text-on-primary/90">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/vets" className="text-on-primary/70 hover:text-on-primary text-sm transition-colors duration-150">Find a Vet</Link></li>
              <li><Link to="/health" className="text-on-primary/70 hover:text-on-primary text-sm transition-colors duration-150">Symptom Checker</Link></li>
              <li><Link to="/shop" className="text-on-primary/70 hover:text-on-primary text-sm transition-colors duration-150">Shop Supplies</Link></li>
              <li><Link to="/guides" className="text-on-primary/70 hover:text-on-primary text-sm transition-colors duration-150">New Owner Guide</Link></li>
              <li><Link to="/articles" className="text-on-primary/70 hover:text-on-primary text-sm transition-colors duration-150">Articles</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4 text-on-primary/90">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/health" className="text-on-primary/70 hover:text-on-primary text-sm transition-colors duration-150">First Aid Guides</Link></li>
              <li><Link to="/rehab" className="text-on-primary/70 hover:text-on-primary text-sm transition-colors duration-150">Rehab & Psychiatry</Link></li>
              <li><Link to="/articles" className="text-on-primary/70 hover:text-on-primary text-sm transition-colors duration-150">Emotional Care</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4 text-on-primary/90">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-on-primary/70 text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                (555) 123-PAWS
              </li>
              <li className="flex items-center gap-2 text-on-primary/70 text-sm">
                <Mail className="w-4 h-4 text-secondary" />
                hello@pawserve.com
              </li>
              <li className="flex items-center gap-2 text-on-primary/70 text-sm">
                <MapPin className="w-4 h-4 text-secondary" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-on-primary/20 mt-8 pt-8 text-center">
          <p className="text-on-primary/50 text-sm">
            &copy; {new Date().getFullYear()} PawServe. Built for the DEV Weekend Challenge ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}