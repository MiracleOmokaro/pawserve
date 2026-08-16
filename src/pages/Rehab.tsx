import { Heart, Activity, Dumbbell, Waves, Sparkles, Stethoscope, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const therapies = [
  {
    icon: Waves,
    title: 'Hydrotherapy',
    description: 'Underwater treadmills and swimming pools allow dogs to exercise without putting stress on joints. Ideal for post-surgery recovery and arthritis management.',
    benefits: ['Low-impact exercise', 'Builds muscle without strain', 'Improves range of motion'],
  },
  {
    icon: Sparkles,
    title: 'Laser Therapy',
    description: 'Cold laser therapy uses light energy to reduce inflammation, promote healing at the cellular level, and relieve pain without medication.',
    benefits: ['Non-invasive pain relief', 'Reduces inflammation', 'Accelerates healing'],
  },
  {
    icon: Dumbbell,
    title: 'Therapeutic Exercise',
    description: 'Targeted exercises — balance work, strength training, and stretching — restore function, improve coordination, and prevent re-injury.',
    benefits: ['Builds strength', 'Improves balance', 'Restores mobility'],
  },
  {
    icon: Activity,
    title: 'Massage Therapy',
    description: 'Gentle massage reduces muscle tension, improves circulation, and promotes relaxation. Especially helpful for anxious dogs and those with chronic pain.',
    benefits: ['Reduces muscle tension', 'Improves circulation', 'Promotes relaxation'],
  },
  {
    icon: Heart,
    title: 'Acupuncture',
    description: 'Fine needles stimulate specific points on the body to relieve pain, reduce inflammation, and promote natural healing. Backed by veterinary research.',
    benefits: ['Natural pain relief', 'Reduces inflammation', 'Treats chronic conditions'],
  },
  {
    icon: Stethoscope,
    title: 'Neurological Rehab',
    description: 'Specialized exercises and techniques for dogs recovering from spinal cord injuries, IVDD, or other neurological conditions.',
    benefits: ['Improves coordination', 'Regains motor function', 'Enhances quality of life'],
  },
];

const conditions = [
  'Post-operative recovery (especially cruciate ligament surgery)',
  'Hip dysplasia and arthritis',
  'Spinal cord injuries and IVDD',
  'Neurological conditions',
  'Obesity management',
  'Age-related mobility issues',
  'Sports injuries (agility, flyball)',
];

export default function Rehab() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Heart className="w-7 h-7 text-accent" />
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">Dog Rehabilitation & Psychiatry</h1>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          Helping dogs recover from injuries, manage chronic conditions, and thrive at every stage of life. Canine rehabilitation combines physical therapy, alternative medicine, and behavioral support.
        </p>
      </div>

      {/* Intro Section */}
      <div className="bg-gradient-to-r from-accent/5 to-secondary/5 border border-accent/20 rounded-2xl p-6 sm:p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What is Canine Rehab?</h2>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              Like physical therapy for humans, canine rehabilitation focuses on restoring function, reducing pain, and improving quality of life for dogs. Whether recovering from surgery, managing a chronic condition, or simply aging gracefully, rehab can make a profound difference.
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Many dogs who were written off as "too old" or "too injured" have made remarkable recoveries through consistent rehabilitation therapy.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-heading font-semibold text-foreground mb-4">Conditions We Help With</h3>
            <ul className="space-y-2.5">
              {conditions.map((condition) => (
                <li key={condition} className="flex items-start gap-2.5 text-sm text-foreground/70">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  {condition}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Therapy Modalities */}
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Therapy Modalities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {therapies.map((therapy) => {
          const Icon = therapy.icon;
          return (
            <div
              key={therapy.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{therapy.title}</h3>
              <p className="text-sm text-foreground/60 mb-4 leading-relaxed">{therapy.description}</p>
              <ul className="space-y-1.5">
                {therapy.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-xs text-foreground/50">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* When to Consider Rehab */}
      <div className="bg-muted rounded-2xl p-6 sm:p-8 mb-12">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">When to Consider Rehab</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Your dog shows stiffness after exercise',
            'Difficulty getting up or climbing stairs',
            'Recently had surgery (especially TPLO or IVDD)',
            'Diagnosed with arthritis or hip dysplasia',
            'Limping or favoring a leg',
            'Sudden reluctance to jump on furniture',
            'Changes in behavior or activity level',
            'Recovering from a neurological condition',
          ].map((sign) => (
            <div key={sign} className="flex items-start gap-2.5 text-sm text-foreground/70">
              <ArrowRight className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
              {sign}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Ready to help your dog thrive?</h2>
        <p className="text-foreground/60 mb-6 max-w-md mx-auto">
          Find a vet who specializes in rehabilitation near you, or use our symptom checker for immediate guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/vets"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-secondary/90 transition-all duration-150 active:scale-[0.97]"
          >
            <Stethoscope className="w-4 h-4" />
            Find a Rehab Vet
          </Link>
          <Link
            to="/health"
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all duration-150 active:scale-[0.97]"
          >
            <Heart className="w-4 h-4" />
            Check Symptoms
          </Link>
        </div>
      </div>
    </div>
  );
}