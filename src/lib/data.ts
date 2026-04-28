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
  bio: `Graduate software engineer with a Master's from the University of Melbourne. I build robust, scalable systems - from real-time BLE medical devices to cloud-native platforms - with a focus on precision, performance and purposeful design.`,
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
    stack: ['Next.js 14', 'TypeScript', 'GSAP', 'Tailwind CSS', 'Vercel'],
    description:
      'This site - a magazine-style portfolio with scroll-driven GSAP animations, Lenis smooth scroll, custom cursor and editorial typography. Built from scratch and deployed on Vercel.',
    highlights: [
      'GSAP ScrollTrigger for cinematic section reveals',
      'Lenis smooth scroll with per-frame GSAP ticker integration',
      'Fully responsive, accessible and < 100 KB initial JS bundle',
    ],
    featured: true,
    link: 'https://github.com/damiantrajkovski',
  },
  {
    id: '03',
    // ── Replace this with your next project ──────────────────────────────────
    title: '- Coming Soon -',
    client: 'Personal Project',
    period: '2026',
    role: 'Engineer',
    stack: ['TBD'],
    description:
      'Replace this entry in src/lib/data.ts with your next impressive project once it\'s underway.',
    highlights: [],
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
