// PawServe comprehensive data — carefully curated for your dog's every need

export interface Vet {
  id: string;
  name: string;
  specialty: string;
  location: string;
  phone: string;
  image: string;
  rating: number;
  available: boolean;
  bio?: string;
  experience?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Food' | 'Toys' | 'Health' | 'Grooming';
  rating?: number;
  inStock?: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Emotional Care' | 'Rehab' | 'Dog Day' | 'Nutrition' | 'Training' | 'Health Tips';
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
    specialty: 'General Practice',
    location: 'Downtown',
    phone: '(555) 123-4567',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
    rating: 4.8,
    available: true,
    bio: '15+ years of experience in general veterinary care with a special love for senior dogs.',
    experience: '18 years',
  },
  {
    id: 'v2',
    name: 'Dr. James Chen',
    specialty: 'Surgery',
    location: 'Westside',
    phone: '(555) 234-5678',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
    rating: 4.9,
    available: true,
    bio: 'Board-certified veterinary surgeon specializing in orthopedic and soft tissue procedures.',
    experience: '14 years',
  },
  {
    id: 'v3',
    name: 'Dr. Emily Park',
    specialty: 'Dermatology',
    location: 'Eastside',
    phone: '(555) 345-6789',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face',
    rating: 4.7,
    available: false,
    bio: 'Expert in canine skin conditions, allergies, and autoimmune disorders.',
    experience: '10 years',
  },
  {
    id: 'v4',
    name: 'Dr. Marcus Rivera',
    specialty: 'Dentistry',
    location: 'Northside',
    phone: '(555) 456-7890',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face',
    rating: 4.6,
    available: true,
    bio: 'Passionate about canine dental health — cleanings, extractions, and oral surgery.',
    experience: '12 years',
  },
  {
    id: 'v5',
    name: 'Dr. Lisa Thompson',
    specialty: 'Emergency Care',
    location: 'Downtown',
    phone: '(555) 567-8901',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=300&fit=crop&crop=face',
    rating: 4.9,
    available: true,
    bio: '24/7 emergency veterinarian — calm under pressure, dedicated to saving lives.',
    experience: '16 years',
  },
  {
    id: 'v6',
    name: 'Dr. Omar Hassan',
    specialty: 'Orthopedics',
    location: 'Southside',
    phone: '(555) 678-9012',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face',
    rating: 4.5,
    available: true,
    bio: 'Specialist in canine orthopedic conditions — hip dysplasia, ACL tears, and arthritis.',
    experience: '11 years',
  },
  {
    id: 'v7',
    name: 'Dr. Priya Sharma',
    specialty: 'Internal Medicine',
    location: 'Midtown',
    phone: '(555) 789-0123',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
    rating: 4.8,
    available: true,
    bio: 'Expert in diagnosing and treating complex internal medical conditions in dogs.',
    experience: '13 years',
  },
  {
    id: 'v8',
    name: 'Dr. Michael Torres',
    specialty: 'Behavioral Medicine',
    location: 'Westside',
    phone: '(555) 890-1234',
    image: 'https://images.unsplash.com/photo-1612277795421-9bc770e5eeb1?w=300&h=300&fit=crop&crop=face',
    rating: 4.7,
    available: true,
    bio: 'Helping dogs with anxiety, aggression, and behavioral challenges through science-based methods.',
    experience: '9 years',
  },
  {
    id: 'v9',
    name: 'Dr. Anna Kowalski',
    specialty: 'Rehabilitation',
    location: 'Eastside',
    phone: '(555) 901-2345',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=300&h=300&fit=crop&crop=face',
    rating: 4.9,
    available: true,
    bio: 'Certified canine rehabilitation therapist — hydrotherapy, laser, and therapeutic exercise.',
    experience: '8 years',
  },
  {
    id: 'v10',
    name: 'Dr. David Okafor',
    specialty: 'Cardiology',
    location: 'Northside',
    phone: '(555) 012-3456',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
    rating: 4.6,
    available: true,
    bio: 'Veterinary cardiologist specializing in heart disease diagnosis and management.',
    experience: '15 years',
  },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Premium Kibble Blend',
    description: 'All-natural, grain-free dog food with real chicken and vegetables. Rich in protein and omega fatty acids.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1565708097881-bfc8c9b0e22e?w=400&h=400&fit=crop',
    category: 'Food',
    rating: 4.7,
    inStock: true,
  },
  {
    id: 'p2',
    name: 'Squeaky Bone Toy',
    description: 'Durable rubber bone with squeaker — keeps dogs entertained for hours. Tough enough for heavy chewers.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    category: 'Toys',
    rating: 4.5,
    inStock: true,
  },
  {
    id: 'p3',
    name: 'Flea & Tick Treatment',
    description: 'Monthly topical treatment that protects against fleas, ticks, and mosquitoes. Fast-acting, long-lasting formula.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=400&fit=crop',
    category: 'Health',
    rating: 4.8,
    inStock: true,
  },
  {
    id: 'p4',
    name: 'Gentle Puppy Shampoo',
    description: 'pH-balanced, tearless formula with oatmeal and aloe vera. Perfect for sensitive skin and frequent baths.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be2c2a?w=400&h=400&fit=crop',
    category: 'Grooming',
    rating: 4.6,
    inStock: true,
  },
  {
    id: 'p5',
    name: 'Organic Dental Chews',
    description: 'Natural chews that clean teeth and freshen breath. Made with fresh mint, coconut oil, and chlorophyll.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    category: 'Health',
    rating: 4.4,
    inStock: true,
  },
  {
    id: 'p6',
    name: 'Rope Tug Toy',
    description: 'Braided cotton rope toy — great for tug-of-war and dental health. Naturally cleans teeth during play.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=400&fit=crop',
    category: 'Toys',
    rating: 4.3,
    inStock: true,
  },
  {
    id: 'p7',
    name: 'Grain-Free Salmon Recipe',
    description: 'Salmon-based dry food for sensitive stomachs. Rich in omega-3s for healthy skin and shiny coat.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1622484211144-47f3c0e54447?w=400&h=400&fit=crop',
    category: 'Food',
    rating: 4.9,
    inStock: true,
  },
  {
    id: 'p8',
    name: 'Grooming Brush Set',
    description: 'Professional-grade brush set for all coat types — deshedding, bristle, and undercoat rake included.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1577956259774-1e0b5e33e9f3?w=400&h=400&fit=crop',
    category: 'Grooming',
    rating: 4.5,
    inStock: true,
  },
  {
    id: 'p9',
    name: 'Freeze-Dried Liver Treats',
    description: 'Single-ingredient, freeze-dried beef liver treats. High-value reward perfect for training.',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    category: 'Food',
    rating: 4.8,
    inStock: true,
  },
  {
    id: 'p10',
    name: 'Interactive Puzzle Feeder',
    description: 'Mental stimulation toy that dispenses kibble as your dog plays. Slows fast eaters and prevents bloat.',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=400&fit=crop',
    category: 'Toys',
    rating: 4.6,
    inStock: true,
  },
  {
    id: 'p11',
    name: 'Joint Health Chews',
    description: 'Glucosamine, chondroitin, and MSM soft chews for healthy joints. Great for senior dogs and active breeds.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=400&fit=crop',
    category: 'Health',
    rating: 4.7,
    inStock: true,
  },
  {
    id: 'p12',
    name: 'Waterless Foam Shampoo',
    description: 'No-rinse foaming shampoo for quick clean-ups between baths. Aloe-infused, deodorizing formula.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be2c2a?w=400&h=400&fit=crop',
    category: 'Grooming',
    rating: 4.2,
    inStock: true,
  },
  {
    id: 'p13',
    name: 'Dehydrated Raw Beef Recipe',
    description: 'Gently dehydrated raw beef and organ meat. Just add water for a complete, species-appropriate meal.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1565708097881-bfc8c9b0e22e?w=400&h=400&fit=crop',
    category: 'Food',
    rating: 4.9,
    inStock: true,
  },
  {
    id: 'p14',
    name: 'Floating Fetch Toy',
    description: 'Tough rubber fetch toy that floats — perfect for pool, lake, and beach days. Visible bright orange.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    category: 'Toys',
    rating: 4.4,
    inStock: true,
  },
  {
    id: 'p15',
    name: 'Calming Aid Spray',
    description: 'Drug-free pheromone spray that helps reduce anxiety during storms, fireworks, and travel. Vet-recommended.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=400&fit=crop',
    category: 'Health',
    rating: 4.3,
    inStock: true,
  },
  {
    id: 'p16',
    name: 'Nail Grinder Kit',
    description: 'Quiet, cordless nail grinder with multiple speeds and safety guard. Diamond drum bit for smooth finishing.',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1577956259774-1e0b5e33e9f3?w=400&h=400&fit=crop',
    category: 'Grooming',
    rating: 4.5,
    inStock: true,
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
  {
    id: 'a4',
    title: 'Adopting a Shelter Dog: What to Expect',
    excerpt: 'Everything you need to know about bringing a shelter dog home — from the first day to the first year.',
    content: `Adopting a shelter dog is one of the most rewarding experiences a person can have. But it also comes with unique challenges and responsibilities. Here's what every new adopter should know.

## Before You Adopt
- **Assess your lifestyle** — Do you have time for daily walks, training, and play?
- **Consider your living situation** — Do you have a yard? Are there breed restrictions?
- **Budget for expenses** — Food, vet care, supplies, and emergency funds
- **Research the shelter** — Ask about the dog's history, temperament, and medical needs

## The First 48 Hours
1. **Give them space** — Let your new dog explore at their own pace
2. **Keep it calm** — No big parties or overwhelming introductions
3. **Establish a routine** — Consistent feeding, walking, and bedtime
4. **Set boundaries** — Start as you mean to continue with rules
5. **Contact a vet** — Schedule a wellness check within the first week

## The 3-3-3 Rule
Many rescue organizations reference the "3-3-3 rule" for shelter dogs:
- **3 days** to decompress and adjust to their new environment
- **3 weeks** to learn your routine and start feeling at home
- **3 months** to fully settle in and show their true personality

## Common Challenges
- **House training accidents** — Be patient, establish a schedule
- **Separation anxiety** — Practice short departures and build up
- **Resource guarding** — Consult a positive-reinforcement trainer
- **Fear of new things** — Introduce new experiences gradually

Remember: adopting a shelter dog means giving a second chance to an animal who deserves love. The bond you'll build is worth every moment of patience.`,
    category: 'Emotional Care',
    author: 'PawServe Team',
    publishedAt: '2024-10-05',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=400&fit=crop',
  },
  {
    id: 'a5',
    title: 'How to Celebrate National Puppy Day',
    excerpt: 'Fun ideas and meaningful ways to celebrate National Puppy Day on March 23rd.',
    content: `National Puppy Day, celebrated every March 23rd, is the perfect excuse to shower your pup with extra love — or take the leap and bring a new puppy into your life.

## The Purpose Behind the Day
Founded by Colleen Paige in 2006, National Puppy Day isn't just about cute photos (though those are great too). It's a day to:
- Raise awareness about puppy mills
- Encourage adoption from shelters and rescues
- Educate new owners about responsible puppy care
- Celebrate the joy puppies bring

## 10 Ways to Celebrate
1. **Adopt, don't shop** — Visit your local shelter
2. **Puppy photoshoot** — Capture their cuteness with a themed setup
3. **Homemade treats** — Bake peanut butter and oat puppy cookies
4. **Puppy playdate** — Socialize with other friendly pups
5. **Training milestone** — Teach a new trick
6. **Donation drive** — Collect supplies for a rescue
7. **Puppy-proofing check** — Walk through your home and remove hazards
8. **Memory book** — Start a puppy scrapbook or journal
9. **Spoil session** — New toy, new bed, extra cuddles
10. **Share online** — Post your puppy's story with #NationalPuppyDay

## Is a Puppy Right for You?
Puppies are adorable, but they're also a huge responsibility. They need:
- Time for training and socialization
- Energy for play and exercise
- Patience for accidents and teething
- Financial resources for vet care and supplies

If you're ready, there's no greater joy than watching a puppy grow into a happy, healthy dog.`,
    category: 'Dog Day',
    author: 'PawServe Team',
    publishedAt: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=400&fit=crop',
  },
  {
    id: 'a6',
    title: 'Senior Dog Care: Loving Your Aging Companion',
    excerpt: 'Tips for keeping your senior dog comfortable, happy, and healthy in their golden years.',
    content: `As our dogs age, their needs change. With proper care, senior dogs can enjoy their golden years with comfort, dignity, and plenty of tail wags.

## When is a Dog "Senior"?
Small breeds (under 20 lbs): around 10-12 years
Medium breeds (20-50 lbs): around 8-10 years
Large breeds (50-90 lbs): around 7-8 years
Giant breeds (90+ lbs): around 5-7 years

## Health Care for Senior Dogs
- **Twice-yearly vet visits** — Early detection is critical
- **Blood work annually** — Checks organ function and thyroid
- **Dental cleanings** — Dental disease can affect the heart and kidneys
- **Weight management** — Extra weight strains aging joints
- **Joint supplements** — Glucosamine and chondroitin can help

## Home Adjustments
- **Orthopedic bed** — Provides cushioning for sore joints
- **Non-slip flooring** — Rugs and runners prevent falls
- **Raised food bowls** — Easier on the neck and back
- **Ramps** — For getting on furniture or into the car
- **Night lights** — Helps with vision loss

## Nutrition for Seniors
Senior dogs benefit from food that is:
- Lower in calories (to prevent weight gain)
- Higher in protein (to preserve muscle mass)
- Fortified with joint-supporting nutrients
- Easy to digest

## Quality of Life
The most important thing you can give your senior dog is your time. Gentle walks, soft brushes, and quiet companionship mean the world to them. Watch for signs of pain or discomfort, and don't wait to consult your vet if something seems off.

Your senior dog gave you years of loyalty and love. Now it's your turn to take the best possible care of them.`,
    category: 'Emotional Care',
    author: 'Dr. Lisa Thompson',
    publishedAt: '2024-09-20',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&h=400&fit=crop',
  },
  {
    id: 'a7',
    title: 'The Benefits of Hydrotherapy for Dogs',
    excerpt: 'How water-based therapy helps dogs recover from surgery, manage arthritis, and build strength.',
    content: `Hydrotherapy is one of the most effective and gentle forms of rehabilitation for dogs. Whether your dog is recovering from surgery or managing a chronic condition, water-based therapy offers remarkable benefits.

## What is Canine Hydrotherapy?
Hydrotherapy involves controlled exercise in water, typically using an underwater treadmill or a dedicated therapy pool. The buoyancy of water reduces stress on joints while providing resistance that builds muscle.

## Key Benefits
**Low-Impact Exercise:** Water supports up to 90% of a dog's body weight, allowing them to exercise without painful joint impact.

**Muscle Building:** Water provides natural resistance that strengthens muscles without strenuous effort.

**Pain Relief:** Warm water soothes sore muscles and joints while improving circulation.

**Range of Motion:** The water's support allows dogs to move joints through their full range of motion more easily than on land.

**Weight Management:** Swimming burns calories efficiently without stressing joints.

## Which Dogs Benefit Most?
- Dogs recovering from orthopedic surgery (TPLO, FHO, etc.)
- Dogs with arthritis or hip dysplasia
- Overweight dogs starting a fitness program
- Dogs with spinal cord injuries or neurological conditions
- Senior dogs needing gentle exercise
- Working and sport dogs in conditioning programs

## What to Expect
A typical hydrotherapy session lasts 20-30 minutes. Your dog will wear a life vest and be supervised by a certified therapist. Most dogs take to the water quickly, and many absolutely love it!

If your dog struggles with mobility, ask your vet about a referral to a hydrotherapy center.`,
    category: 'Rehab',
    author: 'Dr. Anna Kowalski',
    publishedAt: '2024-07-12',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=400&fit=crop',
  },
  {
    id: 'a8',
    title: 'Dog Walking Tips for Walk Your Dog Month',
    excerpt: 'Make the most of January\'s Walk Your Dog Month with tips for safe, enjoyable walks in any weather.',
    content: `January is Walk Your Dog Month — the perfect time to recommit to daily walks, explore new routes, and strengthen the bond between you and your dog.

## Why Walking Matters
Walking isn't just about bathroom breaks. Regular walks provide:
- Physical exercise for both of you
- Mental stimulation through new sights and smells
- Socialization opportunities with other dogs and people
- Training practice in real-world environments
- Quality bonding time

## Cold Weather Walking Tips
- **Check the pavement** — Place your hand on the ground for 5 seconds. If it's too cold for you, it's too cold for your dog's paws
- **Protect paws** — Dog booties or paw wax provide protection from salt and ice
- **Layer up** — Short-haired and small dogs may need a sweater or coat
- **Watch for shivering** — If your dog is shivering, it's time to head inside
- **Stay visible** — Reflective gear and LED collars for dark winter walks

## Make Walks More Fun
1. **Try a "sniffari"** — Let your dog lead and sniff as much as they want
2. **Explore new routes** — Different neighborhoods, parks, or trails
3. **Practice training** — Work on loose-leash walking and recall
4. **Bring a friend** — Walk with another dog-owning friend
5. **Vary the pace** — Mix in some jogging intervals

## Goal Setting
Challenge yourself to walk your dog every day this month. Start with 15-20 minutes and gradually increase. Track your walks on a calendar — you'll be amazed at how good it feels for both of you!`,
    category: 'Dog Day',
    author: 'PawServe Team',
    publishedAt: '2024-01-02',
    image: 'https://images.unsplash.com/photo-1554692918-08e0f3f60336?w=800&h=400&fit=crop',
  },
  {
    id: 'a9',
    title: 'Dog Nutrition 101: Feeding Your Dog Right',
    excerpt: 'A complete guide to balanced nutrition for dogs of all ages, sizes, and dietary needs.',
    content: `Good nutrition is the foundation of your dog's health. What you feed your dog affects everything from their energy level and coat condition to their long-term health and longevity.

## The Basics of Canine Nutrition
Dogs need six essential nutrient categories:
1. **Protein** — Builds and repairs tissues (meat, fish, eggs)
2. **Fats** — Provides energy and supports skin/coat health
3. **Carbohydrates** — Provides energy and fiber
4. **Vitamins** — Supports immune function and metabolism
5. **Minerals** — Builds bones and supports organ function
6. **Water** — The most essential nutrient of all

## Reading Dog Food Labels
Look for foods that:
- Name a specific protein source first (e.g., "Chicken" not "Meat meal")
- Meet AAFCO nutritional standards
- Include a statement of nutritional adequacy
- List whole foods rather than by-products

## Feeding by Life Stage
**Puppies (0-12 months):** Need 2-3x more calories per pound than adults. Feed puppy-specific food 3-4 times daily.

**Adults (1-7 years):** Maintain weight with 2 meals per day. Adjust portions based on activity level.

**Seniors (7+ years):** Lower calorie, higher protein diets help maintain muscle mass. Joint-supporting ingredients are beneficial.

## Foods to Avoid
- Chocolate, grapes, raisins, onions, garlic
- Xylitol (artificial sweetener)
- Macadamia nuts
- Cooked bones (can splinter)
- Raw dough
- Alcohol and caffeine

## Hydration
Always provide fresh, clean water. A general rule: dogs need about 1 ounce of water per pound of body weight per day. Clean water bowls daily.

When in doubt about your dog's diet, consult your veterinarian. Proper nutrition is one of the best investments you can make in your dog's health and happiness.`,
    category: 'Emotional Care',
    author: 'Dr. Priya Sharma',
    publishedAt: '2024-06-18',
    image: 'https://images.unsplash.com/photo-1565708097881-bfc8c9b0e22e?w=800&h=400&fit=crop',
  },
  {
    id: 'a10',
    title: 'Understanding Dog Body Language',
    excerpt: 'Learn to read your dog\'s signals — from tail wags to ear positions and everything in between.',
    content: `Dogs communicate primarily through body language. Learning to read your dog's signals will deepen your bond and help you respond appropriately to their needs and feelings.

## The Happy Dog
- **Tail:** Loose, wide wagging (helicopter tail = overjoyed)
- **Ears:** Relaxed, neutral position
- **Eyes:** Soft, blinking normally
- **Mouth:** Slightly open with a relaxed tongue ("doggy smile")
- **Body:** Loose, wiggly movement

## The Anxious Dog
- **Tail:** Tucked between legs or low, tense wagging
- **Ears:** Pinned back against the head
- **Eyes:** Whale eye (showing the whites), avoiding eye contact
- **Mouth:** Lip licking, panting when not hot, closed tight
- **Body:** Tense, lowered posture, trembling

## The Alert Dog
- **Tail:** Stiff, held high, slow wagging
- **Ears:** Perked up and forward
- **Eyes:** Wide, focused, staring intently
- **Mouth:** Closed
- **Body:** Tense, weight forward, hackles raised

## The Fearful/Threatened Dog
- **Tail:** Tucked tightly
- **Ears:** Flattened completely
- **Eyes:** Wide, dilated pupils
- **Mouth:** Lips pulled back (can be a warning snarl)
- **Body:** Cowering, frozen, or trying to make themselves small

## Calming Signals
Dogs use specific signals to de-escalate situations:
- Yawning (when not tired)
- Licking their nose
- Turning their head away
- Sniffing the ground
- Slow blinking

## What to Do
If your dog is showing signs of stress or fear:
- Remove them from the situation
- Give them space
- Use a calm, reassuring voice
- Don't force interaction
- Reward brave behavior with treats

Understanding your dog's body language is like learning a new language — it takes practice, but it's incredibly rewarding.`,
    category: 'Emotional Care',
    author: 'Dr. Michael Torres',
    publishedAt: '2024-05-22',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=400&fit=crop',
  },
];

// ── International Dog Day Celebrations ─────────────────────────────
export interface DogCelebration {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
  icon: string;
  howToCelebrate: string[];
  funFact: string;
  color: string;
}

export const dogCelebrations: DogCelebration[] = [
  {
    id: 'c1',
    name: 'International Dog Day',
    date: 'August 26',
    description: 'A global celebration of all dogs, encouraging adoption and honoring the love and companionship dogs bring to our lives every day.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=500&fit=crop',
    icon: 'Heart',
    howToCelebrate: [
      'Adopt a rescue dog and give them a forever home',
      'Volunteer at your local animal shelter for the day',
      'Donate food, toys, or funds to a dog rescue organization',
      'Spoil your pup with an extra-long walk and their favorite treat',
      'Share your dog\'s story on social media with #InternationalDogDay',
      'Foster a dog in need — even a weekend helps',
    ],
    funFact: 'International Dog Day was founded in 2004 by Colleen Paige, an animal welfare advocate, and is celebrated on August 26th every year — the day she adopted her first dog.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    id: 'c2',
    name: 'National Puppy Day',
    date: 'March 23',
    description: 'A day to celebrate the joy puppies bring to our lives and raise awareness about the importance of adopting puppies from shelters and rescues.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=500&fit=crop',
    icon: 'BookOpen',
    howToCelebrate: [
      'Adopt a puppy from a shelter or rescue organization',
      'Puppy-proof your home and prepare for a new arrival',
      'Start a puppy training journal with milestones',
      'Take lots of photos — they grow up so fast!',
      'Donate puppy supplies to a local rescue',
      'Share your puppy\'s cutest photos online',
    ],
    funFact: 'National Puppy Day was also founded by Colleen Paige in 2006 to celebrate the unconditional love puppies bring and to educate about puppy mills.',
    color: 'bg-accent/10 text-accent',
  },
  {
    id: 'c3',
    name: 'National Pet Month',
    date: 'May (all month)',
    description: 'A month-long celebration promoting responsible pet ownership and raising awareness about the benefits of having pets in our lives.',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=500&fit=crop',
    icon: 'CalendarDays',
    howToCelebrate: [
      'Schedule a wellness checkup with your vet',
      'Update your dog\'s vaccinations and microchip info',
      'Start a new exercise routine with your dog',
      'Try a new dog-friendly recipe or treat',
      'Review your pet insurance coverage',
      'Create an emergency preparedness kit for your dog',
    ],
    funFact: 'National Pet Month began in the UK in 1988 and became a global movement. Studies show that pet owners have lower blood pressure and reduced stress levels.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    id: 'c4',
    name: 'Adopt a Shelter Dog Month',
    date: 'October (all month)',
    description: 'An entire month dedicated to finding loving homes for shelter dogs and raising awareness about the millions of dogs waiting for adoption.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=500&fit=crop',
    icon: 'Heart',
    howToCelebrate: [
      'Visit your local shelter and meet the dogs',
      'Share adoption profiles of shelter dogs on social media',
      'Sponsor a dog\'s adoption fee for someone else',
      'Volunteer to walk shelter dogs',
      'Foster a dog to free up shelter space',
      'Donate old blankets, towels, and toys to shelters',
    ],
    funFact: 'Every year, approximately 3.1 million dogs enter shelters in the United States. About 2 million of them find forever homes — but there\'s always room for more happy endings.',
    color: 'bg-accent/10 text-accent',
  },
  {
    id: 'c5',
    name: 'Walk Your Dog Month',
    date: 'January (all month)',
    description: 'A month dedicated to the simple joy of walking your dog — great for both their health and yours, especially during the colder months.',
    image: 'https://images.unsplash.com/photo-1554692918-08e0f3f60336?w=800&h=500&fit=crop',
    icon: 'Activity',
    howToCelebrate: [
      'Commit to a daily walk — no matter the weather',
      'Explore a new trail or park you\'ve never visited',
      'Try a "sniffari" — let your dog lead and sniff to their heart\'s content',
      'Invest in proper winter gear for cold-weather walks',
      'Track your steps and aim for a monthly walking goal',
      'Invite a friend and their dog for a group walk',
    ],
    funFact: 'Regular dog walking reduces the risk of heart disease in humans by 36% and helps dogs maintain a healthy weight, reducing joint problems later in life.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    id: 'c6',
    name: 'Love Your Pet Day',
    date: 'February 20',
    description: 'A day to show extra affection to your furry family members with special treats, extra cuddles, and quality time together.',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&h=500&fit=crop',
    icon: 'Heart',
    howToCelebrate: [
      'Prepare a homemade dog-friendly treat',
      'Give your dog an extra-long belly rub session',
      'Take a special "adventure walk" to a new place',
      'Buy a new interactive toy or puzzle',
      'Take a cute photo together and frame it',
      'Tell your dog everything you love about them (they understand the tone!)',
    ],
    funFact: 'Dogs can recognize human emotions through tone of voice and body language. When you tell them you love them, they show increased activity in the brain\'s reward center!',
    color: 'bg-accent/10 text-accent',
  },
  {
    id: 'c7',
    name: 'National Dog Biscuit Day',
    date: 'February 23',
    description: 'A tasty celebration of the humble dog biscuit — from the classic Milk-Bone to gourmet artisanal treats made with wholesome ingredients.',
    image: 'https://images.unsplash.com/photo-1565708097881-bfc8c9b0e22e?w=800&h=500&fit=crop',
    icon: 'Apple',
    howToCelebrate: [
      'Bake homemade dog biscuits with peanut butter and oats',
      'Visit a local bakery that makes dog treats',
      'Try a new flavor of dog biscuit your pup hasn\'t had',
      'Donate a box of dog biscuits to your local shelter',
      'Host a "treat tasting" with friends and their dogs',
      'Research the ingredients in your dog\'s favorite biscuits',
    ],
    funFact: 'The first commercial dog biscuit was created in 1860 by James Spratt in Cincinnati, Ohio. He called them "Spratt\'s Patent Meat Fibrine Dog Cakes" — a mix of wheat, beetroot, and vegetables.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    id: 'c8',
    name: 'National Dog Day Parade',
    date: 'August 26',
    description: 'Many communities host dog parades and festivals on International Dog Day — a joyful celebration of dogs of every size, breed, and background.',
    image: 'https://images.unsplash.com/photo-1554692918-08e0f3f60336?w=800&h=500&fit=crop',
    icon: 'Briefcase',
    howToCelebrate: [
      'Find a local dog parade or festival near you',
      'Dress up your dog in a fun costume',
      'Decorate a wagon or stroller for smaller dogs',
      'Bring plenty of water and treats for the walk',
      'Take photos and tag your favorites',
      'Meet other dog owners and make new friends',
    ],
    funFact: 'The world\'s largest dog parade takes place in Tijuana, Mexico, with over 10,000 dogs participating each year on International Dog Day.',
    color: 'bg-accent/10 text-accent',
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