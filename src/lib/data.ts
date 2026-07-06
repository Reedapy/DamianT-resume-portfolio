import type { Personal, Project, Education, SkillCategory } from '@/types'

// ─── Personal Info ────────────────────────────────────────────────────────────
// Edit this file to update all content across the site.

export const personal: Personal = {
  name: 'Damian Trajkovski',
  title: 'Software Engineer',
  location: 'Melbourne, VIC',
  email: 'damiantrajkovski@yahoo.com.au',
  phone: '+61 491 107 823',
  linkedin: 'https://www.linkedin.com/in/damian-trajkovski-9b8671234/',
  githubWork: 'https://github.com/damiantrajkovski',
  githubPersonal: 'https://github.com/Reedapy',
  bio: 'I’m a software engineer currently completing my Master of Software Engineering at the University of Melbourne. I enjoy building clean, reliable systems and working across frontend, backend, mobile and cloud technologies. (full-stack)',
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: '01',
    title: 'ECG Mobile Platform',
    client: 'Biosignals Diagnostics',
    period: '2025 – Present',
    role: 'Mobile Application Developer',
    stack: ['React Native', 'Kotlin & Swift', 'BLE', 'REST API', 'Typescript'],
    description:
      'Cross-platform ECG app integrating Bluetooth Low Energy for real-time heart monitoring with encrypted medical data exchange. Built login, recording, task management and secure upload modules end-to-end.',
    highlights: [
      '>98% BLE connection success rate across device variants',
      'End-to-end encrypted physiological data pipeline with retry logic',
      'Full developer docs, test plans and demo workflow from device to server',
    ],
    featured: true,
    link: 'https://github.com/damiantrajkovski',
  },
  {
    id: '02',
    title: 'Editorial Portfolio',
    client: 'Personal Project',
    period: '2026',
    role: 'Designer & Engineer',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vercel'],
    description:
      'This website is a personal portfolio and resume site designed with an editorial, magazine-inspired visual style. I built it from scratch using Next.js, TypeScript, Tailwind CSS and GSAP, with a focus on polished motion, readable content structure and a professional presentation of my work, skills and background.',
    highlights: [
      'Built scroll-driven section transitions using GSAP ScrollTrigger',
      'Integrated smooth scrolling and custom interaction details for a more polished experience',
      'Structured content so project, work and skills sections can be updated cleanly',
      'Deployed through Vercel with a responsive layout across desktop and mobile',
    ],
    featured: true,
    link: 'https://github.com/Reedapy/DamianT-resume-portfolio',
  },
  {
    id: '03',
    title: 'Vaultless',
    client: 'Personal Project',
    period: '2026',
    role: 'Full-Stack Engineer',
    stack: [
      'Next.js 15',
      'TypeScript',
      'Supabase',
      'Web Crypto API',
      'AES-256-GCM',
      'PBKDF2',
      'Chrome Extension',
      'Manifest V3',
    ],
    description:
      'Vaultless is a zero-knowledge password manager suite built around the idea that the server should never be trusted with readable user secrets. It includes a Next.js dashboard and a Manifest V3 Chrome extension, with encryption handled on the client using the Web Crypto API. The server stores only encrypted vault blobs, while the user’s master password and decrypted data remain local to the device.',
    highlights: [
      'Implemented client-side AES-256-GCM encryption for vault item confidentiality and integrity',
      'Used PBKDF2-HMAC-SHA256 key derivation with high iteration count for master-password protection',
      'Built a Next.js dashboard alongside a Manifest V3 browser extension',
      'Designed Supabase-backed vault storage with user-specific Row Level Security policies',
    ],
    featured: true,
  },
  {
    id: '04',
    title: 'WorldCup2026',
    client: 'Personal Project',
    period: '2026',
    role: 'Engineer',
    stack: ['TypeScript', 'React / Next.js', 'API Integration', 'Responsive UI'],
    description:
      'A World Cup 2026-themed web application focused on presenting tournament information through a clean and responsive interface. The project is intended to demonstrate practical frontend engineering, structured data modelling and reusable UI design around a real-world sports data domain.',
    highlights: [
      'Built reusable UI sections for tournament-related information',
      'Structured data for teams, fixtures, groups, results or tournament content',
      'Designed a responsive interface suitable for browsing across desktop and mobile',
      'Created as a practical full-stack or frontend project to strengthen product-style development skills',
    ],
    featured: false,
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: SkillCategory = {
  Frontend: ['React', 'TypeScript', 'Next.js', 'HTML / CSS', 'GSAP', 'Tailwind'],
  Backend: ['Python', 'Node.js', 'Java', 'REST APIs', 'MySQL', 'C/C++'],
  Mobile: ['React Native', 'Flutter', 'Kotlin', 'BLE / Bluetooth', 'Android'],
  Cloud: ['AWS', 'Azure', 'Docker', 'CI / CD'],
  Tools: ['Git', 'Jira', 'Confluence', 'Agile / Scrum', 'Unity'],
}

// Skills for the marquee ticker
export const allSkills: string[] = [
  'Python', 'React Native', 'TypeScript', 'Docker', 'AWS', 'Flutter',
  'Next.js', 'Node.js', 'Java', 'Azure', 'Kotlin', 'BLE', 'C/C++',
  'MySQL', 'Git', 'Agile', 'REST APIs', 'CI/CD', 'React', 'Android',
]

// ─── Education ────────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    degree: 'Master of Software Engineering',
    institution: 'University of Melbourne',
    period: '2025 – Present',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of Melbourne',
    period: '2022 – 2024',
  },
]
