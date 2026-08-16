<p align="center">
  <img src="public/nativelyai.svg" alt="PawServe Logo" width="120" height="120" />
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
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react" alt="React 18.3" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript" alt="TypeScript 5.9" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite" alt="Vite 7.2" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss" alt="Tailwind CSS 4.1" />
  <img src="https://img.shields.io/badge/Gemini_AI-8E75B2?logo=google" alt="Gemini AI" />
</p>

---

## ✨ Features

### 🏥 AI-Powered Symptom Checker
Describe your dog's symptoms and get instant AI-powered first aid advice powered by **Google Gemini**. The checker returns possible causes, immediate steps, and a severity assessment (green/yellow/red) to help you decide when to see a vet.

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
| **[Google Gemini API](https://ai.google.dev/)** | AI symptom checker |
| **[Supabase](https://supabase.com/)** | Database (optional) |
| **[Lucide React](https://lucide.dev/)** | UI icons |

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
├── public/                  # Static assets
│   └── nativelyai.svg       # App logo
├── src/
│   ├── components/          # Shared components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Site footer
│   │   └── Layout.tsx       # Page layout wrapper
│   ├── constants/           # Config & data
│   │   ├── config.ts        # App configuration
│   │   └── data.ts          # Static data (vets, products, articles)
│   ├── pages/               # Route pages
│   │   ├── Home.tsx         # Landing page
│   │   ├── Shop.tsx         # Pet supply catalog
│   │   ├── Vets.tsx         # Vet directory & booking
│   │   ├── Guides.tsx       # New owner guidelines
│   │   ├── Articles.tsx     # Article listings
│   │   ├── ArticleDetail.tsx# Individual article
│   │   ├── Health.tsx       # Symptom checker (Gemini AI)
│   │   └── Rehab.tsx        # Rehab & psychiatry info
│   ├── App.tsx              # Root component with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & Tailwind theme
├── index.html               # HTML entry
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Configuration

### Gemini API Key (Required for Symptom Checker)

The symptom checker requires a **Google Gemini API key**. Get one free at [Google AI Studio](https://aistudio.google.com/).

Create a `.env` file (or set in your environment):

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> **Note:** For hackathon/demo purposes, the key is used client-side via the `@google/generative-ai` SDK. For production, route API calls through a backend.

### Supabase (Optional)

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 🌐 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero & feature cards |
| `/vets` | Vet Finder | Directory + booking |
| `/health` | Symptom Checker | AI-powered health advice |
| `/shop` | Pet Supply Shop | Product catalog |
| `/guides` | New Owner Guides | Care guidelines |
| `/articles` | Articles | Expert content listings |
| `/articles/:id` | Article Detail | Full article view |
| `/rehab` | Rehab & Psychiatry | Dog mental health info |

---

## 📦 Deployment

PawServe is a static Vite app and can be deployed to any static hosting:

**Build:**

```bash
npm run build
```

Deploy the `dist/` folder to:

- **Vercel** — `vercel --prod`
- **Netlify** — drag & drop `dist/`
- **GitHub Pages** — via `gh-pages`
- **Cloudflare Pages** — connect repo

---

## 🤝 Contributing

This project was built for the **DEV Weekend Challenge: Dog Days Edition**, targeting the **Best Use of Google AI** category. Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ for the DEV Weekend Challenge · <strong>Dog Days Edition</strong>
  <br />
  <a href="https://nativelyai.com">nativelyai.com</a>
</p>