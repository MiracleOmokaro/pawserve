// PawServe Configuration
// For hackathon: Gemini API key is used client-side (publishable for demo purposes)

export const config = {
  gemini: {
    apiKey: import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY_HERE',
    model: 'gemini-2.0-flash',
  },
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || 'https://xifkkozscsvrrnyzbecf.supabase.co',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpZmtrb3pzY3N2cnJueXpiZWNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4NzIxMTYsImV4cCI6MjEwMjQ0ODExNn0.Ps4V7vI7RdeXbZB-hye5EsUx-EQWL5gOHqQBaj0S_wQ',
  },
  app: {
    name: 'PawServe',
    tagline: 'Everything your dog needs, in one place',
    description: 'Find vets, get AI health advice, shop for supplies, and learn how to care for your best friend.',
  },
} as const;