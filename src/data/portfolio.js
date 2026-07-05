import {
  Award,
  BadgeCheck,
  BookOpen,
  Braces,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers3,
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

export const navItems = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'];

export const profile = {
  name: 'Jayesh Mehra',
  role: 'Front-End Developer',
  education: 'B.Tech in Information Technology',
  location: 'Jaipur, Rajasthan',
  email: 'jayeshmehra547@gmail.com',
  phone: '+91 8890856181',
  linkedin: 'https://www.linkedin.com/in/jayesh-mehra-5ba06424a',
  github: 'https://github.com/jayesh547-bit',
};

export const heroBadges = ['React', 'JavaScript', 'GitHub', 'Responsive UI'];

export const highlights = [
  {
    title: 'Front-End Development',
    description: 'Building responsive interfaces with React, JavaScript, HTML, CSS, and modern tooling.',
    icon: Code2,
  },
  {
    title: 'Responsive Web Design',
    description: 'Creating layouts that feel considered on phones, tablets, laptops, and wide screens.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Clean UI & User Experience',
    description: 'Designing polished screens with clear hierarchy, readable content, and smooth interactions.',
    icon: Sparkles,
  },
];

export const skillGroups = [
  {
    title: 'Proficiency',
    icon: Braces,
    skills: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Hands-on',
    icon: Terminal,
    skills: ['C++', 'Linux', 'Git', 'GitHub'],
  },
  {
    title: 'Working Knowledge',
    icon: Server,
    skills: ['React.js', 'Node.js', 'SQL'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['VS Code', 'Chrome DevTools', 'GitHub', 'Vite'],
  },
];

export const projects = [
  {
    title: 'Bakery Website',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    description:
      'Built a responsive bakery website with modern UI, product sections, smooth animations, mobile-friendly layout, and clean reusable components.',
    actions: [
      { label: 'Live Demo', icon: ExternalLink, href: '#' },
      { label: 'GitHub Code', icon: Github, href: profile.github },
    ],
  },
  {
    title: 'Gym Website',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    description:
      'Created a premium gym landing page with responsive navbar, trainer section, pricing cards, smooth animations, and reusable React components.',
    actions: [
      { label: 'Live Demo', icon: ExternalLink, href: '#' },
      { label: 'GitHub Code', icon: Github, href: profile.github },
    ],
  },
  {
    title: 'Real Estate Salesforce Application',
    tech: ['Salesforce', 'Apex', 'SOQL', 'SOSL'],
    description:
      'Built a Salesforce-based application to manage property and client data using Salesforce platform features, Apex, SOQL, SOSL, and automation concepts.',
    actions: [
      { label: 'Case Study', icon: FileText, href: '#' },
      { label: 'Details', icon: Layers3, href: '#experience' },
    ],
  },
  {
    title: 'Sudoku Solver',
    tech: ['C++', 'Problem Solving'],
    description: 'Developed a Sudoku solver project using C++ logic and problem-solving concepts.',
    actions: [{ label: 'Details', icon: LayoutDashboard, href: '#contact' }],
  },
  {
    title: 'E-Commerce Website UI',
    tech: ['React', 'CSS', 'JavaScript'],
    description: 'Created a responsive e-commerce website interface with product cards, modern layout, and clean user experience.',
    actions: [{ label: 'Details', icon: LayoutDashboard, href: '#contact' }],
  },
];

export const certifications = [
  { title: 'Completed and Qualified NPTEL exam in Deep Learning', icon: Award },
  { title: 'Grass Solutions for Front-End Development (MERN)', icon: BadgeCheck },
  { title: 'Grass Solutions for Front-End Development (React)', icon: BadgeCheck },
  { title: 'MongoDB: Introduction to MongoDB for Students', icon: Database },
  { title: 'RHCSA - Red Hat Certified System Administrator', detail: 'Certification ID: 230-092-280', icon: ShieldCheck },
];

export const education = [
  {
    institution: 'Arya College of Engineering and IT',
    program: 'B.Tech - Information Technology',
    period: '2021-2025',
    result: 'CGPA: 7.3',
    icon: GraduationCap,
  },
  {
    institution: 'Modern Academy School',
    program: 'Rajasthan Board - Class XII',
    period: '',
    result: 'Percentage: 83%',
    icon: BookOpen,
  },
  {
    institution: 'Modern Academy School',
    program: 'Rajasthan Board - Class X',
    period: '',
    result: 'Percentage: 71%',
    icon: BookOpen,
  },
];

export const contactItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'Location', value: profile.location, href: '#contact', icon: MapPin },
  { label: 'LinkedIn', value: 'jayesh-mehra-5ba06424a', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'jayesh547-bit', href: profile.github, icon: Github },
];

export const experience = {
  title: 'Salesforce Training / Internship',
  organization: 'TechForce Academy',
  duration: '2 Months',
  description:
    'Learned Salesforce platform fundamentals, Apex, SOQL, SOSL, and automation concepts. Built a basic Salesforce application to manage property and client data.',
  icon: BriefcaseBusiness,
};
