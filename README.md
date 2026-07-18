# 🌐 Demopedia — Agency Portfolio Website

A multi-page agency portfolio website built with Next.js 13, TypeScript, and TailwindCSS. Demonstrates App Router, server-side rendering, dynamic routing, dark/light theme, and responsive design.

[![Netlify Status](https://api.netlify.com/api/v1/badges/5353cedc-f817-48f2-bbfa-e06935d5f900/deploy-status)](https://app.netlify.com/sites/demopedia/deploys?branch=main)
![Next.js](https://img.shields.io/badge/Next.js%2013-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)

🔗 **[Live Demo](https://demopedia.netlify.app/)**

---

## Pages

| Page | Route | What it shows |
|------|-------|---------------|
| **Home** | `/` | Hero section with CTA |
| **Portfolio** | `/portfolio` | Gallery with category filters (Illustrations, Websites, Applications) |
| **Blog** | `/blog` | Blog post listing |
| **About** | `/about` | Company story with image |
| **Contact** | `/contact` | Contact form |
| **Dashboard** | `/dashboard` | Authenticated dashboard |

---

## Features

- **Dark / Light Mode** — Theme toggle with persistent preference
- **Responsive Design** — Mobile-first layout that works across all screen sizes
- **Dynamic Routing** — Next.js App Router with nested routes (`/portfolio/illustrations`, `/portfolio/websites`, etc.)
- **Image Optimization** — Using `next/image` for automatic lazy loading, resizing, and format conversion
- **Server-Side Rendering** — Pages rendered on the server for fast initial load and SEO
- **Category Filtering** — Portfolio gallery filterable by Illustrations, Websites, and Applications

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 13** | React framework with App Router and SSR |
| **TypeScript** | Type-safe development |
| **TailwindCSS** | Utility-first responsive styling |
| **Netlify** | Continuous deployment and hosting |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/gypsicoder/demopedia.git
cd demopedia

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## Project Structure

```
demopedia/
├── src/               # Application source code
│   ├── app/           # Next.js 13 App Router pages
│   └── components/    # Reusable React components
├── public/            # Static assets and images
├── next.config.js     # Next.js configuration
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json
```

---


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
