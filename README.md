# Jayesh Mehra — Interactive Portfolio

A custom React portfolio designed around Jayesh's creative-developer identity, with an interactive story, real project showcases, a floating desktop control panel, and responsive motion.

The opening is a pinned three-stage scene: a large portrait composition, a spring-smoothed zoom/blur depth transition, and a controlled 3D collapse before the story begins. Fine-pointer devices also get mouse parallax, project-card tilt, and dynamic glare. Lenis provides eased wheel scrolling, while section copy uses staggered word reveals.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Update personal content

Most text, profile links, live URLs, skills, journey, education, and certifications live in:

`src/data/portfolio.js`

The resume download uses:

`public/Jayesh-Mehra-Resume.pdf`

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide icons

## Featured live projects

- All For One Gym: https://all-for-one-gym.netlify.app/
- Sweet Crumbs: https://sweetcrumbs547.netlify.app/

## Deployment

The generated `dist` folder can be deployed to Vercel, Netlify, or GitHub Pages. For Vercel or Netlify, import the repository and use `npm run build`; the output directory is `dist`.
