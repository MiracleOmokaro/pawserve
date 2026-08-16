<p align="center">
  <img src="public/pawserve-logo.svg" alt="PawServe Logo" width="100" height="100" />
</p>

<h1 align="center">🐾 PawServe</h1>

<p align="center">
  <strong>Everything your dog needs, in one place.</strong>
  <br />
  Find vets · AI health advice · Shop for supplies · Expert care guides · Voice-powered symptom checker
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
  <img src="https://img.shields.io/badge/Edge_Functions-3FCF8E?logo=supabase&logoColor=white" alt="Edge Functions" />
  <img src="https://img.shields.io/badge/Speechmatics-004B87?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzIgNEMxNi41MzYgNCA0IDE2LjUzNiA0IDMyczEyLjUzNiAyOCAyOCAyOCAyOC0xMi41MzYgMjgtMjhTNDcuNDY0IDQgMzIgNHptMCA1MmMtMTMuMjU1IDAtMjQtMTAuNzQ1LTI0LTI0czEwLjc0NS0yNCAyNC0yNCAyNCAxMC43NDUgMjQgMjQtMTAuNzQ1IDI0LTI0IDI0em0tNi0zN2wxMiA2LTEyIDZ2LTEyeiIvPjwvc3ZnPg==" alt="Speechmatics" />
  <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="MIT License" />
</p>

---

## 📖 About

**PawServe** is a comprehensive dog care platform. Whether you're a new puppy parent or a seasoned dog owner, PawServe brings together everything you need to keep your best friend happy and healthy:

- 🏥 **AI-powered symptom checker** (powered by Google Gemini via server-side Edge Functions) for instant first aid guidance and severity assessment
- 🎙️ **Voice-powered input** for hands-free symptom descriptions (via Speechmatics real-time transcription)
- 👨‍⚕️ **Vet directory** with specialties, locations, and booking
- 🛍️ **Pet supply shop** — food, toys, health, grooming
- 📚 **Expert guides & articles** on care, rehabilitation, and emotional wellness

Built with React, TypeScript, and Tailwind CSS with a **server-side architecture** — AI API keys are stored securely in Supabase Secret Manager and called only from Edge Functions, never exposed to the browser.

---

## ✨ Features

### 🏥 AI-Powered Symptom Checker
Describe your dog's symptoms and get instant AI-powered first aid advice powered by **Google Gemini**. The checker returns possible causes, immediate steps, and a severity assessment (🟢 green / 🟡 yellow / 🔴 red) to help you decide when to see a vet. **Also supports voice input** — just tap the mic and describe symptoms hands-free.

> **Security:** The Gemini API key is stored in Supabase Secret Manager and called server-side via an Edge Function — never exposed in client-side code.

### 🎙️ Voice-Powered Input
Tap the microphone button on the Symptom Checker to speak your dog's symptoms instead of typing. Powered by **Speechmatics** real-time speech-to-text via a Supabase Edge Function token exchange — your API key stays server-side.

### 👨‍⚕️ Vet Finder
Browse a directory of veterinarians with specialties, locations, and ratings. Filter by specialty and book appointments directly through the platform.

### 🛍️ Pet Supply Shop
Browse products across categories — Food, Toys, Health, and Grooming. Filter, view details, and add items to your cart.

### 📚 Expert Content
- **New Owner Guides** — Step-by-step care guidelines for new dog parents
- **Articles** — Expert-written content on emotional care, rehabilitation, and dog wellness
- **Rehab & Psychiatry** — Information on dog rehabilitation, emotional support, and behavioral health

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 10+ or **yarn** / **pnpm**
- **Supabase account** (free tier) — for Edge Functions and Secret Manager
- **Speechmatics account** (free trial) — for voice transcription
- **Google Gemini API key** — for AI symptom checker

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
| **[Supabase](https://supabase.com/)** | Edge Functions (server-side logic), Secret Manager, Hosting |
| **[Google Gemini API](https://ai.google.dev/)** | AI symptom checker (via server-side Edge Function proxy) |
| **[Speechmatics](https://www.speechmatics.com/)** | Real-time speech-to-text (via server-side token exchange) |
| **[Lucide React](https://lucide.dev/)** | UI icons |

### Architecture Highlights

| Aspect | Approach |
|--------|----------|
| **AI API Keys** | Stored in **Supabase Secret Manager** — never in client code |
| **Backend Logic** | **Supabase Edge Functions** (Deno) — proxy for Gemini & Speechmatics |
| **Authentication** | Optional — can be added via Supabase Auth |
| **Hosting** | Static Vite build — deploy anywhere (Netlify, Vercel, Cloudflare, GitHub Pages) |

### Design System

PawServe uses a warm, earthy palette designed for a friendly, approachable feel:

- **Primary:** Rich brown (`#5C4033`)
- **Secondary:** Warm orange (`#E07A2F`)
- **Accent:** Soft green (`#6B8E5A`)
- **Background:** Cream (`#FDF8F3`)
- **Fonts:** [Varela Round](https://fonts.google.com/specimen/Varela+Round) (headings) + [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) (body)

---

## 📁 Project Structure

```
pawserve/
├── public/                          # Static assets
│   └── pawserve-logo.svg            # App logo
├── supabase/
│   └── functions/                   # Supabase Edge Functions (Deno)
│       ├── speechmatics-token/      # Token exchange for Speechmatics
│       └── gemini-chat/             # Server-side proxy for Google Gemini AI
├── src/
│   ├── components/                  # Shared components
│   │   ├── Navbar.tsx               # Navigation bar
│   │   ├── Footer.tsx               # Site footer
│   │   └── Layout.tsx               # Page layout wrapper
│   ├── constants/                   # Config & data
│   │   ├── config.ts                # App configuration (public keys only)
│   │   └── data.ts                  # Static data (vets, products, articles)
│   ├── hooks/                       # Custom React hooks
│   │   └── useSpeechmatics.ts       # Speech-to-text hook
│   ├── lib/                         # Library helpers
│   │   └── supabase.ts              # Supabase client
│   ├── pages/                       # Route pages
│   │   ├── Home.tsx                 # Landing page
│   │   ├── Shop.tsx                 # Pet supply catalog
│   │   ├── Vets.tsx                 # Vet directory & booking
│   │   ├── Guides.tsx               # New owner guidelines
│   │   ├── Articles.tsx             # Article listings
│   │   ├── ArticleDetail.tsx        # Individual article
│   │   ├── Health.tsx               # Symptom checker (Gemini AI + voice)
│   │   └── Rehab.tsx                # Rehab & psychiatry info
│   ├── App.tsx                      # Root component with routing
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles & Tailwind theme
├── .github/workflows/
│   └── deploy.yml                   # GitHub Actions for Pages deployment
├── index.html                       # HTML entry
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Configuration

### Supabase (Required)

The app uses Supabase for Edge Functions and Secret Manager. The public anon key and URL are configured in `src/constants/config.ts` (already set for the demo project).

### Google Gemini API Key (Required for Symptom Checker)

The symptom checker requires a **Google Gemini API key**. Get one free at [Google AI Studio](https://aistudio.google.com/).

> **Important:** The key is stored **server-side** in Supabase Secret Manager, not in a `.env` file. To configure it:

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard/project/xifkkozscsvrrnyzbecf/settings/secrets)
2. Under **Edge Functions** → **Secrets**, add:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your Gemini API key from Google AI Studio

The `gemini-chat` Edge Function reads the key via `Deno.env.get('GEMINI_API_KEY')` — it never touches the browser.

### Speechmatics API Key (Required for Voice Input)

Voice input on the Symptom Checker uses **Speechmatics** real-time transcription. To configure:

1. Get an API key from [Speechmatics Portal](https://portal.speechmatics.com/)
2. In your Supabase Dashboard → **Edge Functions** → **Secrets**, add:
   - **Name:** `SPEECHMATICS_API_KEY`
   - **Value:** Your Speechmatics API key

The `speechmatics-token` Edge Function exchanges this key for a short-lived JWT token on each session.

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

PawServe is a static Vite app and can be deployed to any static hosting:

```bash
npm run build
```

Deploy the `dist/` folder to:

| Host | Free Tier | Private Repo | Notes |
|------|-----------|-------------|-------|
| **Netlify** | ✅ Yes | ✅ Works | Auto-deploy from GitHub, drag & drop |
| **Vercel** | ✅ Yes | ✅ Works | Auto-deploy from GitHub |
| **Cloudflare Pages** | ✅ Yes | ✅ Works | Connect repo, auto-deploy |
| **GitHub Pages** | ✅ Yes | ❌ Free plan only works on **public repos** | Requires GitHub Pro for private repos |

### GitHub Actions (GitHub Pages)

A `.github/workflows/deploy.yml` workflow is included for GitHub Pages. It builds and deploys automatically on pushes to `main`.

> **Note for private repos:** GitHub Pages requires a public repository on the free plan. If the repo is private, upgrade to GitHub Pro or use Netlify/Vercel instead.

---

## 🤝 Contributing

This project was built for the **DEV Weekend Challenge: Dog Days Edition**, celebrating **International Dog Day** and targeting the **Best Use of Google AI** category. Contributions, issues, and feature requests are welcome!

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
  🐶 Built with ❤️ for International Dog Day
  <br />
  <sub>PawServe — dedicated to happy, healthy dogs everywhere.</sub>
</p>