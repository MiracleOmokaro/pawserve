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
  <a href="#-deployment">Deployment</a>
</p>

---

## 📖 About

**PawServe** is a comprehensive dog care platform that brings together everything you need to keep your best friend happy and healthy — vet directory, AI-powered symptom checker, pet supply shop, and expert care guides.

---

## ✨ Features

- **AI Symptom Checker** — describe symptoms and get AI-powered first aid guidance with severity assessment (green/yellow/red) via Google Gemini. Supports voice input.
- **Vet Finder** — browse a directory of veterinarians by specialty, location, and rating.
- **Pet Supply Shop** — browse Food, Toys, Health, and Grooming products with category filtering.
- **Expert Content** — care guides for new owners, articles on wellness and rehabilitation.
- **Voice Input** — tap the mic to describe symptoms hands-free using Speechmatics.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 10+

### Installation

```bash
git clone https://github.com/your-username/pawserve.git
cd pawserve
npm install
npm run dev
```

### Build

```bash
npm run build
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite 7](https://vitejs.dev/) | Build tool |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [React Router v7](https://reactrouter.com/) | Routing |
| [Google Gemini API](https://ai.google.dev/) | AI symptom checking |
| [Supabase](https://supabase.com/) | Edge Functions & data |
| [Speechmatics](https://www.speechmatics.com/) | Speech-to-text |
| [Lucide React](https://lucide.dev/) | Icons |

### Architecture

PawServe uses a **client-side** architecture with serverless edge functions for sensitive operations — API keys for Gemini and Speechmatics are managed server-side via Supabase Edge Functions.

---

## 🌐 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page |
| `/vets` | Vet Finder | Directory |
| `/health` | Symptom Checker | AI health advice |
| `/shop` | Pet Supply Shop | Product catalog |
| `/guides` | New Owner Guides | Care guidelines |
| `/articles` | Articles | Expert content |
| `/articles/:id` | Article Detail | Full article |
| `/rehab` | Rehab & Psychiatry | Dog wellness |

---

## 📦 Deployment

PawServe is a static Vite app — deploy to any static hosting provider.

### GitHub Pages

Push to `main` and the included [GitHub Actions workflow](.github/workflows/deploy.yml) handles the build and deployment.

### Netlify / Vercel

Connect the GitHub repo and set:
- **Build command:** `npm run build`
- **Output directory:** `dist`

---

## 📄 License

Distributed under the [MIT License](LICENSE).

---

<p align="center">
  🐶 Built for happy, healthy dogs everywhere
</p>