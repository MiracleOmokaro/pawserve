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
  { id: 'v1', name: 'Dr. Sarah Mitchell', specialty: 'General Practice', location: 'Downtown', phone: '(555) 123-4567', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face', rating: 4.8, available: true, bio: '15+ years of experience in general veterinary care with a special love for senior dogs.', experience: '18 years' },
  { id: 'v2', name: 'Dr. James Chen', specialty: 'Surgery', location: 'Westside', phone: '(555) 234-5678', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face', rating: 4.9, available: true, bio: 'Board-certified veterinary surgeon specializing in orthopedic and soft tissue procedures.', experience: '14 years' },
  { id: 'v3', name: 'Dr. Emily Park', specialty: 'Dermatology', location: 'Eastside', phone: '(555) 345-6789', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face', rating: 4.7, available: false, bio: 'Expert in canine skin conditions, allergies, and autoimmune disorders.', experience: '10 years' },
  { id: 'v4', name: 'Dr. Marcus Rivera', specialty: 'Dentistry', location: 'Northside', phone: '(555) 456-7890', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face', rating: 4.6, available: true, bio: 'Passionate about canine dental health — cleanings, extractions, and oral surgery.', experience: '12 years' },
  { id: 'v5', name: 'Dr. Lisa Thompson', specialty: 'Emergency Care', location: 'Downtown', phone: '(555) 567-8901', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=300&fit=crop&crop=face', rating: 4.9, available: true, bio: '24/7 emergency veterinarian — calm under pressure, dedicated to saving lives.', experience: '16 years' },
  { id: 'v6', name: 'Dr. Omar Hassan', specialty: 'Orthopedics', location: 'Southside', phone: '(555) 678-9012', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face', rating: 4.5, available: true, bio: 'Specialist in canine orthopedic conditions — hip dysplasia, ACL tears, and arthritis.', experience: '11 years' },
  { id: 'v7', name: 'Dr. Priya Sharma', specialty: 'Internal Medicine', location: 'Midtown', phone: '(555) 789-0123', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face', rating: 4.8, available: true, bio: 'Expert in diagnosing and treating complex internal medical conditions in dogs.', experience: '13 years' },
  { id: 'v8', name: 'Dr. Michael Torres', specialty: 'Behavioral Medicine', location: 'Westside', phone: '(555) 890-1234', image: 'https://images.unsplash.com/photo-1612277795421-9bc770e5eeb1?w=300&h=300&fit=crop&crop=face', rating: 4.7, available: true, bio: 'Helping dogs with anxiety, aggression, and behavioral challenges through science-based methods.', experience: '9 years' },
  { id: 'v9', name: 'Dr. Anna Kowalski', specialty: 'Rehabilitation', location: 'Eastside', phone: '(555) 901-2345', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face', rating: 4.9, available: true, bio: 'Certified canine rehabilitation therapist — hydrotherapy, laser, and therapeutic exercise.', experience: '8 years' },
  { id: 'v10', name: 'Dr. David Okafor', specialty: 'Cardiology', location: 'Northside', phone: '(555) 012-3456', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face', rating: 4.6, available: true, bio: 'Veterinary cardiologist specializing in heart disease diagnosis and management.', experience: '15 years' },
  { id: 'v11', name: 'Dr. Rachel Nguyen', specialty: 'Rehabilitation', location: 'Midtown', phone: '(555) 111-2233', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face', rating: 4.9, available: true, bio: 'CCRP-certified rehab specialist focused on post-TPLO recovery, underwater treadmill, and senior mobility.', experience: '11 years' },
  { id: 'v12', name: 'Dr. Benjamin Cole', specialty: 'Rehabilitation', location: 'Westside', phone: '(555) 222-3344', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face', rating: 4.8, available: true, bio: 'Sports-medicine and rehab vet for agility and working dogs — conditioning, injury prevention, return-to-sport plans.', experience: '10 years' },
  { id: 'v13', name: 'Dr. Sofia Alvarez', specialty: 'Rehabilitation', location: 'Southside', phone: '(555) 333-4455', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=300&fit=crop&crop=face', rating: 4.7, available: true, bio: 'Integrative rehab: acupuncture, laser therapy, and therapeutic massage for chronic pain and arthritis.', experience: '9 years' },
  { id: 'v14', name: 'Dr. Helen Brooks', specialty: 'Rehabilitation', location: 'Downtown', phone: '(555) 444-5566', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face', rating: 4.9, available: true, bio: 'Neurological rehab specialist — IVDD recovery, balance work, and gait retraining for spinal patients.', experience: '14 years' },
  { id: 'v15', name: 'Dr. Kenji Watanabe', specialty: 'Rehabilitation', location: 'Northside', phone: '(555) 555-6677', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face', rating: 4.8, available: true, bio: 'Hydrotherapy and land-based rehab for orthopedic recovery and weight-management programs.', experience: '12 years' },
  { id: 'v16', name: 'Dr. Amara Diallo', specialty: 'Rehabilitation', location: 'Eastside', phone: '(555) 666-7788', image: 'https://images.unsplash.com/photo-1612277795421-9bc770e5eeb1?w=300&h=300&fit=crop&crop=face', rating: 4.7, available: true, bio: 'Geriatric rehab and palliative mobility care — keeping senior dogs comfortable and active longer.', experience: '13 years' },
];

export const products: Product[] = [
  { id: 'p1', name: 'Premium Kibble Blend', description: 'All-natural, grain-free dog food with real chicken and vegetables.', price: 34.99, image: 'https://images.unsplash.com/photo-1589924691995-400dc9fac119?w=400&h=400&fit=crop', category: 'Food', rating: 4.7, inStock: true },
  { id: 'p2', name: 'Squeaky Bone Toy', description: 'Durable rubber bone with squeaker — tough enough for heavy chewers.', price: 12.99, image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=400&fit=crop', category: 'Toys', rating: 4.5, inStock: true },
  { id: 'p3', name: 'Flea & Tick Treatment', description: 'Monthly topical protection against fleas, ticks, and mosquitoes.', price: 24.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop', category: 'Health', rating: 4.8, inStock: true },
  { id: 'p4', name: 'Gentle Puppy Shampoo', description: 'pH-balanced, tearless formula with oatmeal and aloe vera.', price: 9.99, image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=400&fit=crop', category: 'Grooming', rating: 4.6, inStock: true },
  { id: 'p5', name: 'Organic Dental Chews', description: 'Natural chews that clean teeth and freshen breath.', price: 15.99, image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop', category: 'Health', rating: 4.4, inStock: true },
  { id: 'p6', name: 'Rope Tug Toy', description: 'Braided cotton rope for tug-of-war and dental health.', price: 8.99, image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64dab7?w=400&h=400&fit=crop', category: 'Toys', rating: 4.3, inStock: true },
  { id: 'p7', name: 'Grain-Free Salmon Recipe', description: 'Salmon-based dry food rich in omega-3s for skin and coat.', price: 39.99, image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=400&fit=crop', category: 'Food', rating: 4.9, inStock: true },
  { id: 'p8', name: 'Grooming Brush Set', description: 'Professional brush set for all coat types.', price: 19.99, image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop', category: 'Grooming', rating: 4.5, inStock: true },
  { id: 'p9', name: 'Freeze-Dried Liver Treats', description: 'Single-ingredient freeze-dried beef liver for training.', price: 11.99, image: 'https://images.unsplash.com/photo-1589924691995-400dc9fac119?w=400&h=400&fit=crop', category: 'Food', rating: 4.8, inStock: true },
  { id: 'p10', name: 'Interactive Puzzle Feeder', description: 'Mental stimulation toy that dispenses kibble during play.', price: 22.99, image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=400&fit=crop', category: 'Toys', rating: 4.6, inStock: true },
  { id: 'p11', name: 'Joint Health Chews', description: 'Glucosamine and chondroitin soft chews for healthy joints.', price: 19.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop', category: 'Health', rating: 4.7, inStock: true },
  { id: 'p12', name: 'Waterless Foam Shampoo', description: 'No-rinse foaming shampoo for quick clean-ups between baths.', price: 8.99, image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=400&fit=crop', category: 'Grooming', rating: 4.2, inStock: true },
  { id: 'p13', name: 'Dehydrated Raw Beef Recipe', description: 'Gently dehydrated raw beef — just add water for a complete meal.', price: 44.99, image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=400&fit=crop', category: 'Food', rating: 4.9, inStock: true },
  { id: 'p14', name: 'Floating Fetch Toy', description: 'Tough rubber fetch toy that floats — perfect for beach days.', price: 14.99, image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64dab7?w=400&h=400&fit=crop', category: 'Toys', rating: 4.4, inStock: true },
  { id: 'p15', name: 'Calming Aid Spray', description: 'Drug-free pheromone spray for storms, fireworks, and travel.', price: 16.99, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop', category: 'Health', rating: 4.3, inStock: true },
  { id: 'p16', name: 'Nail Grinder Kit', description: 'Quiet cordless nail grinder with safety guard.', price: 25.99, image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop', category: 'Grooming', rating: 4.5, inStock: true },
  { id: 'p17', name: 'Puppy Starter Kibble', description: 'Small-bite formula with DHA for growing puppies.', price: 29.99, image: 'https://images.unsplash.com/photo-1589924691995-400dc9fac119?w=400&h=400&fit=crop', category: 'Food', rating: 4.8, inStock: true },
  { id: 'p18', name: 'Plush Squeaker Duck', description: 'Soft plush duck with dual squeakers for puppies.', price: 10.99, image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=400&fit=crop', category: 'Toys', rating: 4.4, inStock: true },
  { id: 'p19', name: 'Probiotic Soft Chews', description: 'Daily digestive support with live probiotics.', price: 18.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop', category: 'Health', rating: 4.6, inStock: true },
  { id: 'p20', name: 'Deshedding Tool', description: 'Removes loose undercoat without cutting the top coat.', price: 21.99, image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop', category: 'Grooming', rating: 4.7, inStock: true },
  { id: 'p21', name: 'Senior Dog Formula', description: 'Lower-calorie joint-support recipe for dogs 7+.', price: 36.99, image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=400&fit=crop', category: 'Food', rating: 4.8, inStock: true },
  { id: 'p22', name: 'Treat-Dispensing Ball', description: 'Rolling puzzle ball that releases treats as your dog plays.', price: 13.99, image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64dab7?w=400&h=400&fit=crop', category: 'Toys', rating: 4.5, inStock: true },
  { id: 'p23', name: 'Ear Cleaning Solution', description: 'Gentle alcohol-free ear cleaner that removes wax and debris.', price: 12.49, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop', category: 'Health', rating: 4.6, inStock: true },
  { id: 'p24', name: 'Paw Balm Stick', description: 'Natural beeswax and shea butter balm for cracked paw pads.', price: 9.49, image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=400&fit=crop', category: 'Grooming', rating: 4.7, inStock: true },
];

export const articles: Article[] = [
  { id: 'a1', title: "Understanding Your Dog's Emotional Needs", excerpt: 'Learn how to recognize and respond to your dog emotional cues.', content: 'Dogs experience a wide range of emotions. Establishing a routine, providing mental stimulation, and creating a safe space supports emotional health.', category: 'Emotional Care', author: 'Dr. Sarah Mitchell', publishedAt: '2024-12-15', image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=400&fit=crop' },
  { id: 'a2', title: 'International Dog Day: Celebrating Our Best Friends', excerpt: 'How International Dog Day brings communities together.', content: 'International Dog Day on August 26 honors dogs worldwide and encourages adoption and responsible ownership.', category: 'Dog Day', author: 'PawServe Team', publishedAt: '2024-08-26', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=400&fit=crop' },
  { id: 'a3', title: 'Canine Rehab: Helping Dogs Recover and Thrive', excerpt: 'How rehabilitation helps injured, aging, and post-surgery dogs.', content: 'Canine rehabilitation restores function, reduces pain, and improves quality of life through hydrotherapy, laser, and therapeutic exercise.', category: 'Rehab', author: 'Dr. James Chen', publishedAt: '2024-11-10', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=400&fit=crop' },
];

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
  { id: 'c1', name: 'International Dog Day', date: 'August 26', description: 'A global celebration of all dogs, encouraging adoption.', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=500&fit=crop', icon: 'Heart', howToCelebrate: ['Adopt a rescue dog', 'Volunteer at a shelter', 'Donate supplies'], funFact: 'Founded in 2004 by Colleen Paige.', color: 'bg-secondary/10 text-secondary' },
  { id: 'c2', name: 'National Puppy Day', date: 'March 23', description: 'Celebrate the joy puppies bring and support adoption.', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=500&fit=crop', icon: 'BookOpen', howToCelebrate: ['Adopt a puppy', 'Donate supplies', 'Share photos'], funFact: 'Founded by Colleen Paige in 2006.', color: 'bg-accent/10 text-accent' },
];

export const firstAidGuides: FirstAidGuide[] = [
  { id: 'f1', condition: 'Choking', symptoms: 'Pawing at mouth, gagging, difficulty breathing', firstAidSteps: 'Open the mouth, remove visible object carefully, or perform canine Heimlich.', whenToSeeVet: 'Immediately — even after clearing the airway.', severity: 'red' },
  { id: 'f2', condition: 'Heat Stroke', symptoms: 'Excessive panting, drooling, red gums, weakness', firstAidSteps: 'Move to shade, pour cool water, offer small amounts of water, use a fan.', whenToSeeVet: 'Go to the vet immediately after initial cooling.', severity: 'red' },
  { id: 'f3', condition: 'Minor Cuts & Scrapes', symptoms: 'Visible wound, bleeding, limping', firstAidSteps: 'Clean with warm water, apply pressure, use antiseptic, bandage if needed.', whenToSeeVet: 'If bleeding continues or infection appears.', severity: 'yellow' },
];
