import { image } from "framer-motion/client"

export const projects = [
  {
    id: 1,
    title: 'MuseAI',
    subtitle: 'AI Music Composition System',
    year: '2024',
    status: 'Completed',
    imageUrl: 'public/images/projects/MuseAI.png',
    description:
      'An intelligent music composition platform that leverages AI to generate original melodies, harmonies, and full arrangements. Users can guide the creative process through mood, genre, and tempo controls.',
    
    features: [
      'AI-generated melodies and chord progressions',
      'Real-time audio playback and MIDI export',
      'Genre and mood-based composition controls',
      'Interactive piano-roll editor',
    ],
    tech: ['Python', 'Flask', 'TensorFlow', 'HTML','CSS','Web Audio API', 'MuseScore'],
    category: 'web',
    displayType: 'project',
    links: { github: 'https://github.com/mahima-122/Music-Composition-System' },
    
  },
  {
    id: 2,
    title: 'Gold & Silver Investment Platform',
    subtitle: 'Real-time Precious Metals Trading',
    year: '2024',
    status: 'In Production',
    imageUrl: 'public/images/projects/share.jpg',
    description:
      'A full-stack investment platform for tracking and trading precious metals. Features live price feeds, portfolio analytics, and a clean dashboard for monitoring holdings across gold and silver markets.',
    
    features: [
      'Live gold & silver price feeds via API',
      'Portfolio dashboard with P&L tracking',
      'User authentication and trade history',
      'Responsive charts and market analytics',
    ],
    tech: ['Django', 'PostgreSQL', 'HTML', 'CSS', 'REST APIs', 'Javascript', 'JSON'],
    category: 'web',
    displayType: 'project',
    links: { live: 'www.invest-goldsilver.com' },
    
  },
  {
    id: 3,
    title: 'Homebeans',
    subtitle: 'Specialty Coffee Brand Website',
    year: '2023',
    status: 'Live',
    imageUrl: 'public/images/projects/homebeans_logo.jpg',
    description:
      'A premium website for a specialty coffee brand — designed to reflect craft and warmth. Features a product catalogue, brewing guides, and an elegant ordering flow. Focused heavily on UI aesthetics.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS'],
    features: [
      'CMS-driven product catalogue',
      'Interactive brewing guide section',
      'Smooth scroll animations',
      'Mobile-first responsive layout',
    ],
    category: 'web',
    displayType: 'project',
    links: { live: 'https://www.instagram.com/h0mebeans/' },
    
  },
]



export const skills = [
  {
    category: 'Frontend',
    icon: '⬡',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: '◈',
    items: ['Python', 'Django', 'Flask', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Tools',
    icon: '◎',
    items: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman'],
  },
  {
    category: 'Design',
    icon: '◇',
    items: ['UI/UX Basics', 'Graphic Design', 'Brand Identity', 'Adobe Suite', 'Canva Pro'],
  },
]

export const experience = [
  {
    company: 'Yani International',
    role: 'Frontend & Full Stack Developer',
    period: '2023 — Present',
    description:
      'Building and maintaining web applications with a focus on clean UI and reliable backend integration. Responsible for frontend architecture, API development, and UI design direction.',
    tags: ['React', 'Django', 'UI Design', 'REST APIs'],
  },
  {
    company: 'Gold Mart Investment Platform',
    role: 'Full Stack Developer',
    period: '2023',
    description:
      'Developed a real-time precious metals investment platform including live price feeds, portfolio tracking dashboard, and user authentication flows.',
    tags: ['Python', 'Flask', 'PostgreSQL', 'Chart.js'],
  },
  {
    company: 'S&S Trade Limited',
    role: 'UI Designer & Web Maintainer',
    period: '2022 — 2023',
    description:
      'Handled UI design, website updates, and visual identity maintenance. Improved UX across key pages and built reusable design components for consistency.',
    tags: ['UI Design', 'HTML/CSS', 'Figma', 'Branding'],
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
