<p align="center">
  <img src="public/pawserve-logo.svg" alt="PawServe Logo" width="100" height="100" />
</p>

<h1 align="center">🐾 PawServe</h1>

<p align="center">
  <strong>Everything your dog needs, in one place.</strong>
  <br />
  Find vets · AI health advice · Shop for supplies · Expert care guides
</p>

<p align="center">
  <a href="#-features">Features</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-tech-stack">Tech Stack</a> ·
  <a href="#-project-structure">Structure</a> ·
  <a href="#-configuration">Configuration</a> ·
  <a href="#-deployment">Deployment</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white" alt="React 18.3" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5.9" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white" alt="Vite 7.2" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4.1" />
  <img src="https://img.shields.io/badge/Gemini_AI-8E75B2?logo=google&logoColor=white" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Speechmatics-FF6B6B?logo=speechmatics&logoColor=white" alt="Speechmatics" />
  <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="MIT License" />
</p>

---

## 📖 About

**PawServe** is a comprehensive dog care platform that brings together everything you need to keep your best friend happy and healthy. Whether you're a new puppy parent or a seasoned dog owner, PawServe provides:

- 🏥 **AI-powered symptom checker** — instant first aid guidance powered by Google Gemini
- 👨‍⚕️ **Vet directory** — browse specialists, locations, and connect with care
- 🛍️ **Pet supply shop** — food, toys, health, and grooming products
- 📚 **Expert guides & articles** — care guides, rehabilitation, and emotional wellness
- 🎙️ **Voice-powered input** — hands-free symptom descriptions via Speechmatics

Built with React, TypeScript, and Tailwind CSS for a warm, approachable experience that dog owners love.

---

## ✨ Features

### 🏥 AI-Powered Symptom Checker

Describe your dog's symptoms and get instant AI-powered first aid advice powered by **Google Gemini**. The checker returns possible causes, immediate steps, and a severity assessment (green/yellow/red) to help you decide when to see a vet. **Also supports voice input** — just tap the mic and describe symptoms hands-free.

### 👨‍⚕️ Vet Finder

Browse a directory of veterinarians with specialties, locations, and ratings. Filter by specialty and connect with nearby vets directly through the platform.

### 🛍️ Pet Supply Shop

Browse products across categories — Food, Toys, Health, and Grooming. Filter by category, view detailed product info, and manage your cart.

### 📚 Expert Content

- **New Owner Guides** — step-by-step care guidelines for new dog parents
- **Articles** — expert-written content on emotional care, rehabilitation, and dog wellness
- **Rehab & Psychiatry** — information on dog rehabilitation, emotional support, and behavioral health

### 🎙️ Voice-Powered Input

Tap the microphone button on the Symptom Checker to speak your dog's symptoms instead of typing — powered by **Speechmatics** real-time speech-to-text.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 10+ or **yarn** / **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pawserve.git
cd pawserve

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **[React 18](https://react.dev/)** | UI library |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety |
| **[Vite 7](https://vitejs.dev/)** | Build tool & dev server |
| **[Tailwind CSS 4](https://tailwindcss.com/)** | Utility-first styling |
| **[React Router v7](https://reactrouter.com/)** | Client-side routing |
| **[Google Gemini API](https://ai.google.dev/)** | AI-powered symptom checking |
| **[Supabase](https://supabase.com/)** | Edge Functions, database, and secrets management |
| **[Speechmatics](https://www.speechmatics.com/)** | Real-time speech-to-text |
| **[Lucide React](https://lucide.dev/)** | UI icons |

### Architecture

PawServe uses a **client-side** architecture with serverless edge functions for sensitive operations:

- **Google Gemini** — the AI API key is managed server-side via Supabase Edge Functions, keeping credentials secure
- **Speechmatics** — real-time transcription tokens are exchanged through Supabase Edge Functions, never exposing the API key to the client
- **Supabase** — provides authentication, database, and edge function hosting

### Design System

PawServe uses a warm, earthy palette designed for a friendly, approachable feel:

| Role | Color | Hex |
|------|-------|-----|
| Primary | Rich Brown | `#5C4033` |
| Secondary | Warm Orange | `#E07A2F` |
| Accent | Soft Green | `#6B8E5A` |
| Background | Cream | `#FDF8F3` |
| Foreground | Dark Brown | `#3A2A1D` |

- **Heading Font:** [Varela Round](https://fonts.google.com/specimen/Varela+Round)
- **Body Font:** [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)

---

## 📁 Project Structure

```
pawserve/
├── public/                    # Static assets
│   └── pawserve-logo.svg     # App logo / favicon
├── src/
│   ├── components/           # Shared components
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── Footer.tsx        # Site footer
│   │   └── Layout.tsx        # Page layout wrapper
│   ├── constants/            # Config & data
│   │   ├── config.ts         # App configuration
│   │   └── data.ts           # Static data (vets, products, articles)
│   ├── hooks/                # Custom React hooks
│   │   └── useSpeechmatics.ts # Speech-to-text hook
│   ├── lib/                  # Library helpers
│   │   └── supabase.ts       # Supabase client
│   ├── pages/                # Route pages
│   │   ├── Home.tsx          # Landing page
│   │   ├── Shop.tsx          # Pet supply catalog
│   │   ├── Vets.tsx          # Vet directory & booking
│   │   ├── Guides.tsx        # New owner guidelines
│   │   ├── Articles.tsx      # Article listings
│   │   ├── ArticleDetail.tsx # Individual article
│   │   ├── Health.tsx        # Symptom checker (Gemini AI + voice)
│   │   └── Rehab.tsx         # Rehab & psychiatry info
│   ├── App.tsx               # Root component with routing
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles & Tailwind theme
├── .github/workflows/        # CI/CD
│   └── deploy.yml            # GitHub Pages deployment
├── index.html                # HTML entry
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ Configuration

### Google Gemini API Key (Required for Symptom Checker)

The symptom checker requires a **Google Gemini API key**. Get one free at [Google AI Studio](https://aistudio.google.com/).

The API key is stored securely as a Supabase Edge Function secret and never exposed to the client:

1. Go to your Supabase dashboard → **Edge Functions** → **Secrets**
2. Add `GEMINI_API_KEY` with your API key from Google AI Studio

### Speechmatics (Voice Input)

Voice input on the Symptom Checker uses **Speechmatics** real-time transcription. Configure the API key via Supabase Edge Functions secrets:

1. Go to your Supabase dashboard → **Edge Functions** → **Secrets**
2. Add `SPEECHMATICS_API_KEY` with your API key from the [Speechmatics Portal](https://portal.speechmatics.com/)

### Supabase

PawServe uses Supabase for hosting Edge Functions and secrets management. The client configuration is embedded in the app:

```ts
// src/constants/config.ts
export const config = {
  supabase: {
    url: 'https://your-project.supabase.co',
    anonKey: 'your-anon-key',
  },
  // ...
};
```

The **anon key** is safe for client-side use (it's protected by Row Level Security), while actual API keys for Gemini and Speechmatics are stored server-side as Edge Function secrets.

---

## 🌐 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero & feature cards |
| `/vets` | Vet Finder | Directory + booking |
| `/health` | Symptom Checker | AI-powered health advice with voice input |
| `/shop` | Pet Supply Shop | Product catalog |
| `/guides` | New Owner Guides | Care guidelines |
| `/articles` | Articles | Expert content listings |
| `/articles/:id` | Article Detail | Full article view |
| `/rehab` | Rehab & Psychiatry | Dog mental health info |

---

## 📦 Deployment

PawServe is a static Vite app and can be deployed to any static hosting provider.

### GitHub Pages

```bash
npm run build
```

The `dist/` folder is ready for deployment. The project includes a pre-configured [GitHub Actions workflow](.github/workflows/deploy.yml) that automatically builds and deploys to GitHub Pages on every push to `main`.

**Status:** The repository is **public** ✅ — GitHub Pages is ready to deploy. Push to `main` and the workflow will build and deploy automatically.

### Other Hosting Providers

| Provider | Command |
|----------|---------|
| **Netlify** | Drag & drop `dist/` or connect GitHub repo |
| **Vercel** | `vercel --prod` or connect GitHub repo |
| **Cloudflare Pages** | Connect GitHub repo, set build command to `npm run build` |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the [**MIT License**](LICENSE). See the LICENSE file for more information.

---

<p align="center">
  🐶 Built with ❤️ for happy, healthy dogs everywhere
  <br />
  <sub>PawServe — dedicated to helping you care for your best friend.</sub>
</p>