import { image } from "framer-motion/client"

export const projects = [
  {
    id: 1,
    title: 'HR Analytics Dashboard',
    subtitle: 'Power BI & DAX',
    year: '2026',
    status: 'Completed',
    imageUrl: '/images/projects/HR-analytic.png', // Add your thumbnail here
    description: 'An end-to-end HR dashboard to monitor employee attrition, demographics, and salary distribution, enabling real-time retention strategies.',
    features: [
      'Multi-dimensional attrition analysis',
      'Interactive KPI cards & slicers',
      'Departmental turnover metrics',
    ],
    tech: ['Power BI', 'DAX', 'Data Visualization'],
    links: { github: 'https://github.com/mahima-122/HR-Analytics-Dashboard' },
  },
  {
    id: 2,
    title: 'Used Car Market Analysis',
    subtitle: 'Python (Pandas) & Power BI',
    year: '2026',
    status: 'Completed',
    imageUrl: '/images/projects/Used-Car.png', 
    description: 'Performed EDA on automotive datasets to uncover market trends. Visualized price-to-mileage correlations and depreciation patterns.',
    features: [
      'Data cleaning (Null/Consistency handling)',
      'Exploratory Data Analysis (EDA)',
      'Price depreciation modeling',
    ],
    tech: ['Python', 'Pandas', 'Power BI'],
    links: { github: 'https://github.com/mahima-122/Used-Car-Market-BI-Dashboard' },
  },
  {
    id: 3,
    title: 'Superstore Sales BI',
    subtitle: 'SQL, Python & DAX',
    year: '2026',
    status: 'Completed',
    imageUrl: '/images/projects/Superstore.png', 
    description: 'Retail business intelligence dashboard tracking Total Sales, Profit Margin, and Order Volume using complex DAX measures.',
    features: [
      'Complex DAX Measures (Profit Margin, AOV)',
      'Revenue trend forecasting',
      'Order volume distribution',
    ],
    tech: ['SQL', 'Python', 'Power BI', 'DAX'],
    links: { github: 'https://github.com/mahima-122/Superstore-Retail-BI-Dashboard' },
  },
  {
    id: 4,
    title: 'MuseAI',
    subtitle: 'AI Music Composition System',
    year: '2024',
    status: 'Completed',
    imageUrl: '/images/projects/MuseAI.png',
    description:
      'An intelligent music composition platform that leverages AI to generate original melodies, harmonies, and full arrangements. Users can guide the creative process through mood, genre, and tempo controls.',
    
    features: [
      'AI-generated melodies and chord progressions',
      'Real-time audio playback and MIDI export',
      'Genre and mood-based composition controls',
      'Interactive piano-roll editor',
    ],
    tech: ['Python', 'Flask', 'TensorFlow', 'HTML','CSS','Web Audio API', 'MuseScore'],
    links: { github: 'https://github.com/mahima-122/Music-Composition-System' },
    
  },
 
]

export const skills = [
  {
    category: 'Data Analytics',
    icon: '⬡',
    items: ['SQL (PostgreSQL)', 'Python(Pandas, Numpy, Matplotlib)', 'Power BI (DAX, Data Modeling)', 'Data Cleaning', 'Exploratory Data Analysis (EDA)', 'KPI Reporting'],
  },
  {
    category: 'Tools',
    icon: '◎',
    items: ['Git', 'GitHub', 'Flask', 'Django', 'REST APIs'],
  },
]

export const experience = [
  {
    company: 'Yani International',
    role: 'Technical Development Intern ',
    period: 'Dec. 2025 — March. 2026',
    description:
      'Built responsive web interfaces to improve how business data is presented and accessed on mobile and desktop. Collaborated with the team to turn business needs into user-friendly digital tools.',
  },

  {
    company: 'S&S Trade Limited',
    role: 'Website Infrastructure and Operations Lead ',
    period: 'Aug. 2024 — Oct. 2025',
    description:
      'Managed and audited lead tracking systems, ensuring the accuracy and integrity of customer data collection for marketing analysis.',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
