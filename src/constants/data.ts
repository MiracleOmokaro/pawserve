// Mock data for PawServe demo — no Supabase needed for initial version

export interface Vet {
  id: string;
  name: string;
  specialty: string;
  location: string;
  phone: string;
  image: string;
  rating: number;
  available: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Food' | 'Toys' | 'Health' | 'Grooming';
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Emotional Care' | 'Rehab' | 'Dog Day';
  author: string;
  publishedAt: string;
  image: string;
}

export interface FirstAidGuide {
  id: string;
  condition: string;
  symptoms: string;
  firstAidSteps: string;
  whenToSeeVet: string;
  severity: 'green' | 'yellow' | 'red';
}

export const vets: Vet[] = [
  {
    id: 'v1',
    name: 'Dr. Sarah Mitchell',
    specialty: 'General',
    location: 'Downtown',
    phone: '(555) 123-4567',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
    rating: 4.8,
    available: true,
  },
  {
    id: 'v2',
    name: 'Dr. James Chen',
    specialty: 'Surgery',
    location: 'Westside',
    phone: '(555) 234-5678',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop',
    rating: 4.9,
    available: true,
  },
  {
    id: 'v3',
    name: 'Dr. Emily Park',
    specialty: 'Dermatology',
    location: 'Eastside',
    phone: '(555) 345-6789',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop',
    rating: 4.7,
    available: false,
  },
  {
    id: 'v4',
    name: 'Dr. Marcus Rivera',
    specialty: 'Dentistry',
    location: 'Northside',
    phone: '(555) 456-7890',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop',
    rating: 4.6,
    available: true,
  },
  {
    id: 'v5',
    name: 'Dr. Lisa Thompson',
    specialty: 'Emergency',
    location: 'Downtown',
    phone: '(555) 567-8901',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&h=200&fit=crop',
    rating: 4.9,
    available: true,
  },
  {
    id: 'v6',
    name: 'Dr. Omar Hassan',
    specialty: 'Orthopedics',
    location: 'Southside',
    phone: '(555) 678-9012',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop',
    rating: 4.5,
    available: true,
  },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Premium Kibble Blend',
    description: 'All-natural, grain-free dog food with real chicken and vegetables.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1565708097881-bfc8c9b0e22e?w=400&h=400&fit=crop',
    category: 'Food',
  },
  {
    id: 'p2',
    name: 'Squeaky Bone Toy',
    description: 'Durable rubber bone with squeaker — keeps dogs entertained for hours.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    category: 'Toys',
  },
  {
    id: 'p3',
    name: 'Flea & Tick Treatment',
    description: 'Monthly topical treatment that protects against fleas, ticks, and mosquitoes.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=400&fit=crop',
    category: 'Health',
  },
  {
    id: 'p4',
    name: 'Gentle Puppy Shampoo',
    description: 'pH-balanced, tearless formula with oatmeal and aloe vera.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be2c2a?w=400&h=400&fit=crop',
    category: 'Grooming',
  },
  {
    id: 'p5',
    name: 'Organic Dental Chews',
    description: 'Natural chews that clean teeth and freshen breath.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    category: 'Health',
  },
  {
    id: 'p6',
    name: 'Rope Tug Toy',
    description: 'Braided cotton rope toy — great for tug-of-war and dental health.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=400&fit=crop',
    category: 'Toys',
  },
  {
    id: 'p7',
    name: 'Grain-Free Salmon Recipe',
    description: 'Salmon-based dry food for sensitive stomachs.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1622484211144-47f3c0e54447?w=400&h=400&fit=crop',
    category: 'Food',
  },
  {
    id: 'p8',
    name: 'Grooming Brush Set',
    description: 'Professional-grade brush set for all coat types.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1577956259774-1e0b5e33e9f3?w=400&h=400&fit=crop',
    category: 'Grooming',
  },
];

export const articles: Article[] = [
  {
    id: 'a1',
    title: 'Understanding Your Dog\'s Emotional Needs',
    excerpt: 'Learn how to recognize and respond to your dog\'s emotional cues for a stronger bond.',
    content: `Dogs experience a wide range of emotions, from joy and excitement to fear and anxiety. Understanding these emotional states is key to building a trusting relationship with your furry friend.

## Signs of Emotional Well-being
- Relaxed body posture with a wagging tail
- Soft, blinking eyes
- Playful bowing
- Healthy appetite
- Comfortable sleeping patterns

## Signs of Emotional Distress
- Excessive panting or drooling
- Hiding or avoidance behavior
- Loss of appetite
- Destructive behavior
- Excessive barking or whining

## How to Support Your Dog's Emotional Health
1. **Establish a routine** — Dogs thrive on predictability
2. **Provide mental stimulation** — Puzzle toys, training sessions, and new experiences
3. **Create a safe space** — A quiet corner where your dog can retreat
4. **Positive reinforcement** — Reward good behavior with treats and praise
5. **Regular exercise** — Physical activity releases endorphins for both of you

Remember, every dog is unique. Pay attention to what your specific dog is telling you, and don't hesitate to consult a professional if you notice persistent changes in behavior.`,
    category: 'Emotional Care',
    author: 'Dr. Sarah Mitchell',
    publishedAt: '2024-12-15',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=400&fit=crop',
  },
  {
    id: 'a2',
    title: 'International Dog Day: Celebrating Our Best Friends',
    excerpt: 'A look at how International Dog Day brings communities together to celebrate our canine companions.',
    content: `International Dog Day, celebrated on August 26th, is a global event dedicated to honoring dogs of all breeds and recognizing the vital role they play in our lives.

## The History
International Dog Day was founded in 2004 by Animal Welfare Advocate and Pet Lifestyle Expert, Colleen Paige. The day serves not only as a celebration but also as a platform to raise awareness about dog adoption and the importance of providing loving homes for all dogs.

## How to Celebrate
- **Adopt, don't shop** — Consider giving a rescue dog a forever home
- **Volunteer** — Spend time at your local animal shelter
- **Donate** — Shelters always need food, toys, and supplies
- **Spoil your pup** — Extra walks, a new toy, or a special treat
- **Spread awareness** — Share adoption stories on social media

## The Impact
Every year, millions of dogs find their forever homes thanks to the awareness raised on International Dog Day. The event has also helped reduce the number of dogs in shelters and promoted responsible pet ownership.

Whether you're a long-time dog owner or considering adopting your first, International Dog Day is a wonderful reminder of the joy and unconditional love that dogs bring into our lives.`,
    category: 'Dog Day',
    author: 'PawServe Team',
    publishedAt: '2024-08-26',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=400&fit=crop',
  },
  {
    id: 'a3',
    title: 'Canine Rehab: Helping Dogs Recover and Thrive',
    excerpt: 'Explore the world of dog rehabilitation and how it helps injured, aging, and post-surgery dogs.',
    content: `Canine rehabilitation is a growing field that helps dogs recover from injuries, surgeries, and age-related conditions. Like physical therapy for humans, it focuses on restoring function, reducing pain, and improving quality of life.

## Common Conditions Treated
- Post-operative recovery (especially after cruciate ligament surgery)
- Hip dysplasia and arthritis
- Spinal cord injuries
- Neurological conditions
- Obesity management
- Age-related mobility issues

## Therapy Modalities
**Hydrotherapy:** Underwater treadmills and swimming pools allow dogs to exercise without putting stress on joints.

**Laser Therapy:** Cold laser therapy reduces inflammation and promotes healing at the cellular level.

**Therapeutic Exercise:** Targeted exercises build strength, improve balance, and restore range of motion.

**Massage Therapy:** Helps reduce muscle tension, improve circulation, and promote relaxation.

**Acupuncture:** Fine needles stimulate specific points to relieve pain and promote healing.

## When to Consider Rehab
If your dog is showing signs of stiffness, has difficulty getting up or climbing stairs, has recently had surgery, or is struggling with a chronic condition, a rehabilitation consultation could make a world of difference.

Many dogs who were written off as "too old" or "too injured" have made remarkable recoveries through consistent rehabilitation therapy.`,
    category: 'Rehab',
    author: 'Dr. James Chen',
    publishedAt: '2024-11-10',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=400&fit=crop',
  },
];

export const firstAidGuides: FirstAidGuide[] = [
  {
    id: 'f1',
    condition: 'Choking',
    symptoms: 'Pawing at mouth, gagging, difficulty breathing, blue-tinged gums',
    firstAidSteps: '1. Carefully open the mouth and look for the object. 2. If visible, try to remove it with your fingers (use caution — they may bite). 3. If not visible, perform canine Heimlich: place your hands on both sides of the ribcage and give 5 sharp thrusts. 4. Check the mouth again. 5. Repeat until object is dislodged or you reach a vet.',
    whenToSeeVet: 'Immediately — even if you clear the airway, have your dog checked for internal injuries.',
    severity: 'red',
  },
  {
    id: 'f2',
    condition: 'Heat Stroke',
    symptoms: 'Excessive panting, drooling, red gums, vomiting, weakness, collapse',
    firstAidSteps: '1. Move your dog to a cool, shaded area immediately. 2. Pour cool (not cold) water over their body, especially the head and paws. 3. Offer small amounts of cool water to drink. 4. Place a fan on them to increase evaporative cooling. 5. Monitor their temperature — stop cooling once it reaches 103°F.',
    whenToSeeVet: 'Heat stroke is a medical emergency — go to the vet immediately after initial cooling.',
    severity: 'red',
  },
  {
    id: 'f3',
    condition: 'Minor Cuts & Scrapes',
    symptoms: 'Visible wound, bleeding, licking the area, limping (if on leg)',
    firstAidSteps: '1. Clean the wound gently with warm water or saline solution. 2. Apply gentle pressure with a clean cloth to stop bleeding. 3. Apply antiseptic (diluted betadine or chlorhexidine — not alcohol). 4. Apply a clean bandage if on a leg or paw. 5. Prevent licking with an Elizabethan collar if needed.',
    whenToSeeVet: 'If bleeding doesn\'t stop after 10 minutes, wound is deep, or signs of infection appear (redness, swelling, discharge).',
    severity: 'yellow',
  },
  {
    id: 'f4',
    condition: 'Allergic Reaction',
    symptoms: 'Swelling (especially face/ears), hives, itching, redness, difficulty breathing',
    firstAidSteps: '1. Remove the suspected allergen if possible. 2. If there\'s a sting, scrape the stinger out with a credit card (don\'t squeeze). 3. Apply a cold compress to reduce swelling. 4. Give a Benadryl (diphenhydramine) if you know the correct dosage — 1mg per pound of body weight. 5. Monitor breathing closely.',
    whenToSeeVet: 'If breathing is difficult, swelling is severe, or if you\'re unsure — go to the emergency vet. Seek immediate care if symptoms worsen.',
    severity: 'red',
  },
  {
    id: 'f5',
    condition: 'Diarrhea & Upset Stomach',
    symptoms: 'Loose/watery stools, vomiting, lack of appetite, lethargy, abdominal discomfort',
    firstAidSteps: '1. Withhold food for 12-24 hours (but always provide fresh water). 2. After the fast, offer a bland diet: boiled chicken and rice in small portions. 3. Add a probiotic supplement to support gut health. 4. Gradually reintroduce regular food over 2-3 days. 5. Ensure plenty of rest.',
    whenToSeeVet: 'If diarrhea persists more than 48 hours, contains blood, or your dog is very lethargic or showing signs of dehydration.',
    severity: 'yellow',
  },
  {
    id: 'f6',
    condition: 'Limping & Leg Injuries',
    symptoms: 'Holding up a leg, reluctance to bear weight, swelling, yelping when touched',
    firstAidSteps: '1. Examine the paw first — check for cuts, thorns, or objects stuck between pads. 2. Gently feel along the leg for swelling or heat. 3. Apply a cold pack to any swollen area (15 minutes on, 15 off). 4. Restrict activity — no running, jumping, or stairs. 5. Keep your dog confined to a small area.',
    whenToSeeVet: 'If your dog refuses to bear weight at all, there\'s obvious deformity, or limping continues beyond 24 hours.',
    severity: 'yellow',
  },
];