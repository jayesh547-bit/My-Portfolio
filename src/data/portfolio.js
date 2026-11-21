import {
  Award,
  BadgeCheck,
  BookOpen,
  Braces,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  LayoutTemplate,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
  Zap,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#story' },
  { label: 'Projects', href: '#projects' },
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'Jayesh Mehra',
  initials: 'JM',
  role: 'Creative Frontend Developer',
  tagline: 'Building responsive React websites, modern user interfaces, and interactive web experiences.',
  education: 'B.Tech in Information Technology',
  location: 'Jaipur, Rajasthan, India',
  email: 'jayeshmehra547@gmail.com',
  phone: '+91 8890856181',
  phoneDisplay: '+91 88908 56181',
  whatsappNumber: '918890856181',
  whatsappMessage: 'Hi Jayesh, I came across your portfolio and would like to discuss a frontend project / opportunity.',
  whatsappLink: 'https://wa.me/918890856181?text=Hi%20Jayesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20frontend%20project%20%2F%20opportunity.',
  emailSubject: 'Frontend Project Enquiry / Opportunity — Jayesh Mehra',
  emailLink: 'mailto:jayeshmehra547@gmail.com?subject=Frontend%20Project%20Enquiry%20%2F%20Opportunity%20%E2%80%94%20Jayesh%20Mehra',
  linkedin: 'https://www.linkedin.com/in/jayesh-mehra-5ba06424a',
  github: 'https://github.com/jayesh547-bit',
  resumeUrl: '/Jayesh-Mehra-Resume.pdf',
};

export const qualities = [
  'Clean Component Architecture',
  'Responsive & Mobile-First',
  'Fluid Framer Motion',
  'Design-to-Code Precision',
  'Performance Conscious',
];

export const journey = [
  {
    year: '2021',
    title: 'Computer Science & IT Foundations',
    tag: '@college',
    age: 'B.Tech begins · Arya College',
    description:
      'Commenced formal studies in Information Technology at Arya College of Engineering & IT, building rigorous foundations in data structures, algorithms, and core computing principles.',
  },
  {
    year: '2024',
    title: 'From Programming to Frontend',
    tag: '@frontend',
    age: 'Direction crystallized',
    description:
      'Specialized directly in frontend engineering. Moved from static markup to modular JavaScript (ES6+), component thinking, CSS systems, and responsive design for modern browsers.',
  },
  {
    year: '2025',
    title: 'B.Tech Completed & Deep React',
    tag: '@react',
    age: 'Degree earned · CGPA 7.3',
    description:
      'Completed my B.Tech in IT and advanced into modern React, custom hooks, reusable design systems with Tailwind CSS, and interaction design using Framer Motion and Lenis.',
  },
  {
    year: '2026',
    title: 'Live Client-Focused Productions',
    tag: '@production',
    age: 'Sweet Crumbs & All For One',
    description:
      'Engineered and shipped two full-scale responsive web experiences on Netlify—delivering distinctive brand identities, smooth animations, and mobile-first storefronts.',
  },
];

/*
  IMPORTANT REQUIREMENT COMPLIANCE:
  Git and GitHub are intentionally excluded from the skillGroups/toolkit below
  as requested by the user, while preserving the repository and GitHub links elsewhere.
*/
export const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Braces,
    purpose: 'Core application layer for fast, interactive single-page applications.',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 Semantic Web', 'CSS3 Modern Layouts'],
  },
  {
    title: 'UI & Interaction',
    icon: Sparkles,
    purpose: 'Choreographed motion that guides attention, provides feedback, and feels responsive.',
    skills: ['Framer Motion', 'GSAP Animation', 'Lenis Smooth Scroll', 'Interactive Micro-UI'],
  },
  {
    title: 'Responsive Systems',
    icon: MonitorSmartphone,
    purpose: 'Mobile-first styling, consistent spacing tokens, and accessible interfaces.',
    skills: ['Tailwind CSS', 'Mobile-First Design', 'Component Architecture', 'Accessibility (a11y)'],
  },
  {
    title: 'Developer Tooling',
    icon: Wrench,
    purpose: 'Fast build cycles, cross-device debugging, and modern web developer workflows.',
    skills: ['Vite', 'Chrome DevTools', 'VS Code', 'REST API Integration'],
  },
];

export const projects = [
  {
    number: '01',
    title: 'All For One Gym',
    tagline: 'High-energy fitness club web experience designed to showcase training programs and drive member enquiries.',
    category: 'Fitness & Athletics / Web Experience',
    image: '/assets/all-for-one-gym.webp',
    live: 'https://all-for-one-gym.netlify.app/',
    github: profile.github,
    accent: '#b9ff45',
    text: '#10100f',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'Vite'],
    clientNeed:
      'Fitness studios require an impactful digital storefront that captures athletic energy, clearly organizes classes and pricing tiers, and converts visitors into trial gym sessions.',
    solution:
      'Built a bold dark-mode layout accented with vibrant acid-lime highlights. Integrated structured class breakdowns, trainer highlights, interactive pricing cards, and clear contact triggers.',
    technicalDetails:
      'Coupled Lenis smooth scrolling with Framer Motion viewport triggers for cinematic pacing without frame drops. Applied responsive Tailwind grids to guarantee legibility on all mobile screens.',
    exploreFeatures: [
      'Interactive class & program breakdown',
      'Certified trainer showcase profiles',
      'Tiered membership pricing cards',
      'Smooth scroll pacing & reveal animations',
    ],
  },
  {
    number: '02',
    title: 'Sweet Crumbs',
    tagline: 'Artisan bakery storefront UI pairing appetizing visual storytelling with intuitive product browsing.',
    category: 'Bakery & Confectionery / Storefront UI',
    image: '/assets/sweet-crumbs.webp',
    live: 'https://sweetcrumbs547.netlify.app/',
    github: 'https://github.com/jayesh547-bit/bakery-website',
    accent: '#ffb703',
    text: '#10100f',
    tech: ['React', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Vite'],
    clientNeed:
      'Artisan bakeries depend on mouth-watering visual presentation, organized category discovery, and straightforward order enquiry channels for local customers.',
    solution:
      'Created a warm, chocolate-and-honey aesthetic with inviting product cards, category filtering, customer testimonials, operational hours, and direct order actions.',
    technicalDetails:
      'Implemented touch-friendly carousel displays, fluid hover transitions, and optimized layout assets to deliver fast rendering and consistent responsiveness across mobile devices.',
    exploreFeatures: [
      'Curated artisanal pastry & cake gallery',
      'Specialty menu category navigation',
      'Responsive touch-friendly carousels',
      'Direct order and visit enquiry CTAs',
    ],
  },
  {
    number: '03',
    title: "Yogita's Beauty Parlour",
    tagline: 'A premium women-only beauty salon experience combining elegant visual storytelling, immersive interactions, and seamless appointment booking.',
    category: 'Beauty & Wellness / Premium Salon Experience',
    image: '/assets/yogitas-beauty-parlour.webp',
    live: 'https://yogita-s-beauty-parlour-beauty-salo.vercel.app/',
    github: 'https://github.com/jayesh547-bit/YOGITA-S-BEAUTY-PARLOUR-BEAUTY-SALON',
    accent: '#d4a373',
    text: '#10100f',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    clientNeed:
      'Exclusive women-only beauty salons need an upscale digital presence that communicates bespoke luxury, hospital-grade hygiene, transparent package pricing, and convenient online or WhatsApp appointment scheduling.',
    solution:
      'Designed and developed a luxury salon sanctuary experience featuring curated beauty rituals, bridal packages, specialist profiles, visual storytelling gallery, and an integrated appointment enquiry system.',
    technicalDetails:
      'Engineered with Next.js, React, and TypeScript. Integrated responsive Tailwind design tokens, Three.js 3D visual touches, Framer Motion viewport transitions, accessible booking dialogs, and instant WhatsApp inquiry flows.',
    exploreFeatures: [
      'Interactive beauty service catalog & rituals',
      'Curated bridal & self-care beauty packages',
      'Specialist profiles & salon visual gallery',
      'Appointment booking with WhatsApp integration',
    ],
  },
  {
    number: '04',
    title: 'Bookly SaaS',
    tagline: 'A modern smart booking and business management platform designed to simplify appointment scheduling and business operations.',
    category: 'SaaS Platform / Booking Management',
    image: '/assets/bookly-saas.webp',
    live: 'https://booklysaas.netlify.app/',
    github: 'https://github.com/jayesh547-bit/bookly-saas',
    accent: '#6366f1',
    text: '#10100f',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'GSAP', 'Recharts'],
    clientNeed:
      'Service businesses, studios, and consultants require a streamlined booking management platform that eliminates scheduling friction, presents dynamic pricing tiers, and showcases client operations.',
    solution:
      'Developed a modern SaaS product interface featuring an interactive live platform demo, industry-tailored workflows, billing frequency toggles, revenue metric cards, and a clean client CRM dashboard.',
    technicalDetails:
      'Built with React, Vite, and Tailwind CSS. Layered Framer Motion and GSAP for micro-interactions, responsive dashboard preview tabs, Recharts analytics components, and dark/light mode toggle support.',
    exploreFeatures: [
      'Interactive live demo & dashboard preview',
      'Industry-tailored workflow showcases',
      'Tiered subscription pricing with billing toggle',
      'Client CRM, calendar buffers & analytics presentation',
    ],
  },
];

export const capabilities = [
  {
    title: 'Responsive Web Development',
    copy: 'Designing and engineering layouts mobile-first so every interface renders intentionally from compact smartphones to ultra-wide displays.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Modern React Architecture',
    copy: 'Structuring modular, reusable React components with clean state flow, predictable props, and maintainable Tailwind CSS utilities.',
    icon: Code2,
  },
  {
    title: 'Purposeful Interaction & Motion',
    copy: 'Layering thoughtful animations using Framer Motion and Lenis to create rhythm and visual feedback without distracting or slowing down the user.',
    icon: Zap,
  },
  {
    title: 'Design-to-Code Translation',
    copy: 'Accurately translating Figma files, reference sites, or rough concepts into polished, production-ready frontend code with high fidelity.',
    icon: LayoutTemplate,
  },
];

export const certifications = [
  {
    title: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
    detail: 'Certification ID: 230-092-280',
    description: 'Demonstrated system administration, core Linux command line proficiency, storage configuration, and operational security.',
    icon: ShieldCheck,
  },
  {
    title: 'Front-End Development — React',
    issuer: 'Grras Solutions',
    detail: 'React.js & Component Architecture',
    description: 'Practical training covering modern React, functional components, custom hooks, state management, and responsive frontend systems.',
    icon: BadgeCheck,
  },
  {
    title: 'Front-End Development — MERN',
    issuer: 'Grras Solutions',
    detail: 'Full-Stack JavaScript Foundations',
    description: 'Hands-on curriculum in MongoDB, Express, React, and Node.js for modern full-stack web applications.',
    icon: BadgeCheck,
  },
  {
    title: 'Introduction to MongoDB for Students',
    issuer: 'MongoDB University',
    detail: 'Document Database & Data Modeling',
    description: 'Foundational coursework in NoSQL document database structures, queries, indexing, and data modeling for web backends.',
    icon: Database,
  },
  {
    title: 'Deep Learning (Qualified Examination)',
    issuer: 'NPTEL — IIT Kharagpur',
    detail: 'Proctored National Examination',
    description: 'Completed comprehensive coursework and qualified the proctored national exam covering neural networks, architectures, and optimization.',
    icon: Award,
  },
];

export const education = [
  {
    institution: 'Arya College of Engineering & IT, Jaipur',
    program: 'Bachelor of Technology (B.Tech) — Information Technology',
    period: '2021 — 2025',
    result: 'CGPA 7.3 / 10',
    highlight: 'Rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Web Technologies, and Software Engineering.',
    icon: GraduationCap,
  },
  {
    institution: 'Modern Academy Senior Secondary School, Jaipur',
    program: 'Senior Secondary (Class XII) — Science & Mathematics',
    period: '2020 — 2021',
    result: '83%',
    highlight: 'Board of Secondary Education, Rajasthan (RBSE). Strong grounding in Mathematics, Physics, and analytical problem-solving.',
    icon: BookOpen,
  },
  {
    institution: 'Modern Academy Senior Secondary School, Jaipur',
    program: 'Secondary School Examination (Class X)',
    period: '2018 — 2019',
    result: '71%',
    highlight: 'Board of Secondary Education, Rajasthan (RBSE). Comprehensive foundation in Science, Mathematics, and English.',
    icon: BookOpen,
  },
];

export const faqs = [
  {
    question: 'What types of websites and frontend projects do you build?',
    answer:
      'I specialize in building responsive React websites, modern landing pages, interactive product storefronts, and single-page web applications. Whether you need a fresh website built from scratch, an existing site refactored for better responsiveness, or custom interactive components, I focus on clean code, fast load times, and mobile-friendly usability.',
  },
  {
    question: 'How do we start a freelance project or collaboration?',
    answer:
      'We start with a quick conversation on WhatsApp (+91 88908 56181) or email (jayeshmehra547@gmail.com) to discuss your goals, target audience, preferred timeline, and visual ideas. Once aligned, I build out the component architecture, share interactive previews for your review, refine based on your feedback, and deliver a production-ready codebase ready to deploy.',
  },
  {
    question: 'Can you work from a Figma design, reference website, or rough concept?',
    answer:
      'Yes. I can translate Figma mockups, visual references, screenshots, or rough concepts into clean, accessible React code. I pay close attention to typography, spacing tokens, color hierarchy, and mobile breakpoints so the finished website looks polished and faithful to your vision.',
  },
  {
    question: 'How do you handle mobile responsiveness, animations, and accessibility?',
    answer:
      'Every project is developed mobile-first using Tailwind CSS, ensuring smooth adaptation from small smartphone screens to large desktop monitors. I use Framer Motion and Lenis for purposeful animations that guide user attention rather than causing distraction or lag, while maintaining semantic HTML, keyboard focus states, and readable color contrast.',
  },
  {
    question: 'How do you handle project communication, revisions, and delivery?',
    answer:
      'Communication is direct, prompt, and transparent. I provide regular progress updates via WhatsApp or email with live preview links so you always know what is being built. Feedback is incorporated through organized revisions, and final delivery includes clean, commented code with deployment setup for Netlify, Vercel, or your preferred host.',
  },
  {
    question: 'Are you available for full-time frontend developer roles or internships?',
    answer:
      'Yes. Having graduated with a B.Tech in Information Technology and practical hands-on experience building modern React websites, I am actively seeking full-time frontend developer roles, junior developer positions, and internships, alongside select freelance collaborations.',
  },
  {
    question: 'What is the fastest way to get in touch with you?',
    answer:
      'For the quickest response, message me directly on WhatsApp at +91 88908 56181. You can also send an email to jayeshmehra547@gmail.com with your project brief or job details. I typically respond within a few hours.',
  },
];

export const contactItems = [
  {
    label: 'WhatsApp',
    value: profile.phoneDisplay,
    sublabel: 'Quickest response for freelance enquiries',
    href: profile.whatsappLink,
    icon: MessageCircle,
    isExternal: true,
  },
  {
    label: 'Email',
    value: profile.email,
    sublabel: 'Open to roles & detailed project briefs',
    href: profile.emailLink,
    icon: Mail,
    isExternal: false,
  },
  {
    label: 'Phone',
    value: profile.phoneDisplay,
    sublabel: 'Available during Indian business hours',
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    icon: Phone,
    isExternal: false,
  },
  {
    label: 'Location',
    value: profile.location,
    sublabel: 'Available for remote & on-site opportunities',
    href: null,
    icon: MapPin,
    isExternal: false,
  },
  {
    label: 'LinkedIn',
    value: 'jayesh-mehra-5ba06424a',
    sublabel: 'Professional background & networking',
    href: profile.linkedin,
    icon: Linkedin,
    isExternal: true,
  },
  {
    label: 'GitHub',
    value: '@jayesh547-bit',
    sublabel: 'Code repositories & open experiments',
    href: profile.github,
    icon: Github,
    isExternal: true,
  },
];

export const sideStats = [
  { value: '04', label: 'Live featured projects' },
  { value: '2025', label: 'B.Tech IT graduate' },
];
