import { BookOpen, CheckCircle, AlertTriangle, Heart, Home, Bone, Syringe, PawPrint } from 'lucide-react';

const sections = [
  {
    icon: Home,
    title: 'Preparing Your Home',
    items: [
      'Puppy-proof all electrical cords — tuck them away or use cord protectors',
      'Remove toxic plants (lilies, azaleas, sago palms are dangerous)',
      'Secure cabinets with child-proof locks for cleaning supplies',
      'Set up a designated safe space with a crate or bed',
      'Choose a spot for food and water bowls away from foot traffic',
    ],
  },
  {
    icon: Heart,
    title: 'First 24 Hours',
    items: [
      'Keep the environment calm — no loud noises or big crowds',
      'Show your dog where the food, water, and potty area are',
      'Let them explore at their own pace — don\'t force interaction',
      'Start feeding their regular food to avoid upset stomach',
      'Establish a bedtime routine — a crate or bed near you helps them feel safe',
    ],
  },
  {
    icon: Bone,
    title: 'Nutrition & Feeding',
    items: [
      'Choose a high-quality dog food appropriate for your dog\'s age and size',
      'Puppies need 3-4 small meals per day; adults do well with 2 meals',
      'Always provide fresh, clean water — change it daily',
      'Avoid "people food" — chocolate, grapes, onions, and garlic are toxic',
      'Treats should make up no more than 10% of daily calorie intake',
    ],
  },
  {
    icon: Syringe,
    title: 'Health & Vaccinations',
    items: [
      'Schedule a vet visit within the first week for a wellness check',
      'Core vaccines: Distemper, Parvovirus, Adenovirus, Rabies',
      'Start flea/tick and heartworm prevention as recommended by your vet',
      'Spay/neuter is typically recommended between 6-12 months',
      'Keep a health record book with vaccination dates and vet visits',
    ],
  },
  {
    icon: PawPrint,
    title: 'Training Basics',
    items: [
      'Start with the essentials: sit, stay, come, and leave it',
      'Use positive reinforcement — treats and praise work better than punishment',
      'Keep training sessions short (5-10 minutes) and end on a positive note',
      'Socialize your dog early — introduce them to different people, places, and other dogs',
      'Crate training helps with housetraining and gives your dog a safe den',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Safety Checklist',
    items: [
      'Ensure your dog has a collar with ID tags and a microchip',
      'Dog-proof your yard — check for gaps in fences and toxic plants',
      'Never leave your dog alone in a parked car',
      'Keep human medications, cleaning products, and antifreeze out of reach',
      'Know the number of your nearest 24-hour emergency vet',
    ],
  },
];

export default function Guides() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-7 h-7 text-accent" />
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">New Owner Guide</h1>
        <p className="text-foreground/60 max-w-xl mx-auto">
          Everything you need to know to give your new furry family member the best start.
        </p>
      </div>

      {/* Intro Card */}
      <div className="bg-gradient-to-r from-accent/5 to-secondary/5 border border-accent/20 rounded-2xl p-6 sm:p-8 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">Welcome to Dog Parenthood!</h2>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Bringing a new dog home is one of life's greatest joys. Whether you're a first-time owner or a seasoned pro, this guide covers the essentials — from puppy-proofing your home to training basics and health care. Remember, every dog is unique, so be patient and enjoy the journey!
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.title}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 text-center p-8 bg-muted rounded-2xl">
        <h2 className="font-heading text-xl font-bold text-foreground mb-3">Still have questions?</h2>
        <p className="text-foreground/60 mb-6 max-w-md mx-auto">
          Our AI-powered symptom checker is here 24/7 for health concerns, or browse our articles for expert advice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/health"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-secondary/90 transition-all duration-150 active:scale-[0.97]"
          >
            <Heart className="w-4 h-4" />
            Check Symptoms
          </a>
          <a
            href="/articles"
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all duration-150 active:scale-[0.97]"
          >
            <BookOpen className="w-4 h-4" />
            Read Articles
          </a>
        </div>
      </div>
    </div>
  );
}