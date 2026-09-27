import {
  Award,
  BadgeCheck,
  BookOpen,
  Braces,
  Code2,
  Database,
  Github,
  GraduationCap,
  LayoutTemplate,
  Linkedin,
  Mail,
  MapPin,
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
  { label: 'My story', href: '#story' },
  { label: 'Projects', href: '#projects' },
  { label: 'Toolkit', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'Jayesh Mehra',
  initials: 'JM',
  role: 'Creative Front-End Developer',
  education: 'B.Tech in Information Technology',
  location: 'Jaipur, Rajasthan',
  email: 'jayeshmehra547@gmail.com',
  phone: '+91 8890856181',
  linkedin: 'https://www.linkedin.com/in/jayesh-mehra-5ba06424a',
  github: 'https://github.com/jayesh547-bit',
};

export const qualities = ['Creative', 'Reliable', 'Curious', 'Builder', 'Detail-led'];

export const journey = [
  {
    year: '2021',
    title: 'The foundation',
    tag: '@college',
    age: 'B.Tech begins',
    description: 'Started studying Information Technology and built the technical foundation behind everything I create today.',
  },
  {
    year: '2024',
    title: 'From theory to interfaces',
    tag: '@frontend',
    age: 'The direction clicks',
    description: 'HTML, CSS and JavaScript stopped being subjects and became a way to turn ideas into experiences people can use.',
  },
  {
    year: '2025',
    title: 'Graduated. Kept building.',
    tag: '@react',
    age: 'B.Tech complete',
    description: 'Graduated in IT and moved deeper into React, component thinking, responsive layouts and modern development workflows.',
  },
  {
    year: '2026',
    title: 'Two live experiences',
    tag: '@launch',
    age: 'Sweet Crumbs + All For One',
    description: 'Turned two different brand ideas into live, responsive websites—one warm and indulgent, one focused and high-energy.',
  },
];

export const skillGroups = [
  { title: 'Frontend Development', icon: Braces, skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3'] },
  { title: 'Creative Interaction', icon: Sparkles, skills: ['Framer Motion', 'GSAP', 'Lenis', 'Scroll UI'] },
  { title: 'Responsive Systems', icon: MonitorSmartphone, skills: ['Tailwind CSS', 'Mobile-first', 'Reusable UI', 'Accessibility'] },
  { title: 'Developer Workflow', icon: Wrench, skills: ['Git', 'GitHub', 'Vite', 'Chrome DevTools'] },
];

export const projects = [
  {
    number: '01',
    title: 'All For One',
    category: 'Fitness / Brand Experience',
    image: '/assets/all-for-one-gym.webp',
    live: 'https://all-for-one-gym.netlify.app/',
    github: profile.github,
    accent: '#b9ff45',
    text: '#10100f',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Lenis'],
    description: 'A cinematic gym website built around strength, motion and focused conversion. Bold type and controlled interaction give the brand a premium training-studio feel.',
  },
  {
    number: '02',
    title: 'Sweet Crumbs',
    category: 'Bakery / E-commerce UI',
    image: '/assets/sweet-crumbs.webp',
    live: 'https://sweetcrumbs547.netlify.app/',
    github: 'https://github.com/jayesh547-bit/bakery-website',
    accent: '#ffb703',
    text: '#10100f',
    tech: ['React', 'Tailwind', 'GSAP', 'Swiper'],
    description: 'A rich bakery experience pairing dark chocolate visuals with warm golden accents, product storytelling and an inviting mobile-first storefront.',
  },
];

export const capabilities = [
  { title: 'Responsive websites', copy: 'Layouts that stay intentional from a small phone to a wide desktop.', icon: MonitorSmartphone },
  { title: 'React interfaces', copy: 'Clean, reusable components that are easier to extend and maintain.', icon: Code2 },
  { title: 'Creative motion', copy: 'Animation that creates rhythm, focus and feedback—not distraction.', icon: Zap },
  { title: 'Design translation', copy: 'Turning references and rough ideas into polished, usable web experiences.', icon: LayoutTemplate },
];

export const certifications = [
  { title: 'NPTEL — Deep Learning', icon: Award },
  { title: 'Front-End Development — MERN', icon: BadgeCheck },
  { title: 'Front-End Development — React', icon: BadgeCheck },
  { title: 'MongoDB for Students', icon: Database },
  { title: 'Red Hat Certified System Administrator', detail: 'ID: 230-092-280', icon: ShieldCheck },
];

export const education = [
  { institution: 'Arya College of Engineering & IT', program: 'B.Tech — Information Technology', period: '2021 — 2025', result: 'CGPA 7.3', icon: GraduationCap },
  { institution: 'Modern Academy School', program: 'Rajasthan Board — Class XII', period: '2021', result: '83%', icon: BookOpen },
  { institution: 'Modern Academy School', program: 'Rajasthan Board — Class X', period: '2019', result: '71%', icon: BookOpen },
];

export const contactItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'Based in', value: profile.location, href: null, icon: MapPin },
  { label: 'LinkedIn', value: 'Let’s connect', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', value: '@jayesh547-bit', href: profile.github, icon: Github },
];

export const sideStats = [
  { value: '02', label: 'Live projects' },
  { value: '2025', label: 'B.Tech graduate' },
];

export const sideIcons = { Github, Linkedin, Mail, Terminal };
