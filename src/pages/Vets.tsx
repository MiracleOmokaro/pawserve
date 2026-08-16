import { useState } from 'react';
import { Stethoscope, MapPin, Star, Phone, Calendar, Search, X, CheckCircle, XCircle } from 'lucide-react';
import { vets, type Vet } from '../constants/data';

export default function Vets() {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('All');
  const [selectedVet, setSelectedVet] = useState<Vet | null>(null);
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', date: '', notes: '' });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const specialties = ['All', ...new Set(vets.map((v) => v.specialty))];

  const filteredVets = vets.filter((vet) => {
    const matchesSearch =
      vet.name.toLowerCase().includes(search.toLowerCase()) ||
      vet.location.toLowerCase().includes(search.toLowerCase()) ||
      vet.specialty.toLowerCase().includes(search.toLowerCase());
    const matchesSpecialty = specialty === 'All' || vet.specialty === specialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setSelectedVet(null);
      setBookingSubmitted(false);
      setBookingForm({ name: '', email: '', date: '', notes: '' });
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Stethoscope className="w-7 h-7 text-secondary" />
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">Find a Vet</h1>
        <p className="text-foreground/60 max-w-lg mx-auto">
          Browse trusted veterinarians in your area, check their availability, and book an appointment.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
          <input
            type="text"
            placeholder="Search by name, location, or specialty..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-xl text-sm focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all duration-150"
            aria-label="Search vets"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {specialties.map((s) => (
            <button
              key={s}
              onClick={() => setSpecialty(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                specialty === s
                  ? 'bg-secondary text-white'
                  : 'bg-muted text-foreground/70 hover:bg-muted/80'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Vet Grid */}
      {filteredVets.length === 0 ? (
        <div className="text-center py-16">
          <Stethoscope className="w-12 h-12 text-foreground/20 mx-auto mb-4" />
          <p className="text-foreground/50 text-lg">No vets found matching your search.</p>
          <p className="text-foreground/40 text-sm mt-2">Try a different search term or filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVets.map((vet) => (
            <div
              key={vet.id}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-foreground truncate">{vet.name}</h3>
                  <p className="text-sm text-secondary font-medium">{vet.specialty}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
                    <span className="text-sm text-foreground/70">{vet.rating}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <MapPin className="w-4 h-4" />
                  {vet.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Phone className="w-4 h-4" />
                  {vet.phone}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {vet.available ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-accent font-medium">Available</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-destructive" />
                      <span className="text-destructive font-medium">Not accepting new patients</span>
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedVet(vet);
                  setBookingSubmitted(false);
                }}
                disabled={!vet.available}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-150 active:scale-[0.97] cursor-pointer ${
                  vet.available
                    ? 'bg-secondary text-white hover:bg-secondary/90'
                    : 'bg-muted text-foreground/40 cursor-not-allowed'
                }`}
              >
                <Calendar className="w-4 h-4" />
                {vet.available ? 'Book Appointment' : 'Unavailable'}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Booking Modal */}
      {selectedVet && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => !bookingSubmitted && setSelectedVet(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Book appointment"
        >
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {bookingSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Booking Submitted!</h3>
                <p className="text-foreground/60">
                  Your appointment request has been sent to {selectedVet.name}. They'll confirm shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img src={selectedVet.image} alt={selectedVet.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{selectedVet.name}</h3>
                      <p className="text-sm text-foreground/60">{selectedVet.specialty}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedVet(null)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors duration-150 cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">Your Name</label>
                    <input
                      id="name"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all duration-150"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all duration-150"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground/80 mb-1">Preferred Date</label>
                    <input
                      id="date"
                      type="date"
                      required
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                      className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all duration-150"
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-foreground/80 mb-1">Notes</label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      className="w-full px-4 py-2.5 border border-border rounded-xl text-sm focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all duration-150 resize-none"
                      placeholder="Reason for visit, preferred time, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-secondary text-white py-3 rounded-xl font-semibold text-sm hover:bg-secondary/90 transition-all duration-150 active:scale-[0.97] cursor-pointer"
                  >
                    Submit Booking Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}