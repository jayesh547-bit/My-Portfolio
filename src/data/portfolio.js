import {
  Award,
  BadgeCheck,
  BookOpen,
  Braces,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  GraduationCap,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';

export const navItems = ['About', 'Skills', 'Projects', 'Journey', 'Contact'];

export const profile = {
  name: 'Jayesh Mehra',
  initials: 'JM',
  role: 'Front-End Developer',
  education: 'B.Tech in Information Technology',
  location: 'Jaipur, Rajasthan',
  email: 'jayeshmehra547@gmail.com',
  phone: '+91 8890856181',
  linkedin: 'https://www.linkedin.com/in/jayesh-mehra-5ba06424a',
  github: 'https://github.com/jayesh547-bit',
};

export const heroBadges = ['React', 'JavaScript', 'Tailwind', 'Motion'];

export const highlights = [
  {
    number: '01',
    title: 'Interfaces with intent',
    description: 'Every section has a job: guide attention, communicate value, and make the next action obvious.',
    icon: Code2,
  },
  {
    number: '02',
    title: 'Responsive by default',
    description: 'Layouts are designed to feel deliberate on a phone, tablet, laptop, and everything between.',
    icon: MonitorSmartphone,
  },
  {
    number: '03',
    title: 'Motion that earns its place',
    description: 'Subtle animation adds rhythm and feedback without getting in the way of usability.',
    icon: Sparkles,
  },
];

export const skillGroups = [
  { title: 'Core', icon: Braces, skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'] },
  { title: 'Frontend', icon: Terminal, skills: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'] },
  { title: 'Exploring', icon: Server, skills: ['Node.js', 'SQL', 'REST APIs', 'MongoDB'] },
  { title: 'Workflow', icon: Wrench, skills: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools'] },
];

export const projects = [
  {
    number: '01',
    title: 'The Daily Crumb',
    subtitle: 'Artisan bakery experience',
    type: 'E-commerce UI',
    tech: ['React', 'Tailwind CSS', 'GSAP', 'Swiper'],
    description:
      'A warm, editorial storefront that turns browsing pastries into an experience. Built with reusable product sections, smooth reveals, and a mobile-first flow.',
    features: ['Product-led storytelling', 'Reusable React sections', 'Mobile-first navigation'],
    accent: 'coral',
    github: 'https://github.com/jayesh547-bit/bakery-website',
  },
  {
    number: '02',
    title: 'Forge Fitness',
    subtitle: 'High-energy gym website',
    type: 'Marketing Website',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    description:
      'A performance-focused gym website with bold hierarchy, video-led presentation, animated program sections, trainer profiles, and pricing that is easy to compare.',
    features: ['Immersive hero', 'Animated content flow', 'Conversion-focused pricing'],
    accent: 'lime',
    github: profile.github,
  },
  {
    number: '03',
    title: 'PropertyFlow',
    subtitle: 'Real-estate operations app',
    type: 'Salesforce Application',
    tech: ['Salesforce', 'Apex', 'SOQL', 'SOSL'],
    description:
      'A structured Salesforce application for managing properties and client information, created while learning platform automation and data workflows.',
    features: ['Property data model', 'Client management', 'Automation concepts'],
    accent: 'blue',
    github: null,
  },
];

export const miniProjects = [
  { title: 'Sudoku Solver', detail: 'Backtracking and problem solving in C++', icon: LayoutDashboard },
  { title: 'E-commerce UI', detail: 'Responsive product discovery interface', icon: MonitorSmartphone },
];

export const certifications = [
  { title: 'NPTEL — Deep Learning', icon: Award },
  { title: 'Front-End Development — MERN', icon: BadgeCheck },
  { title: 'Front-End Development — React', icon: BadgeCheck },
  { title: 'MongoDB for Students', icon: Database },
  { title: 'Red Hat Certified System Administrator', detail: 'ID: 230-092-280', icon: ShieldCheck },
];

export const education = [
  {
    institution: 'Arya College of Engineering & IT',
    program: 'B.Tech — Information Technology',
    period: '2021 — 2025',
    result: 'CGPA 7.3',
    icon: GraduationCap,
  },
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

export const experience = {
  title: 'Salesforce Training / Internship',
  organization: 'TechForce Academy',
  duration: '2 months',
  description:
    'Learned Salesforce platform fundamentals, Apex, SOQL, SOSL, and automation concepts. Built a working application to organize property and client data.',
  icon: BriefcaseBusiness,
};
