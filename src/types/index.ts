export interface Project {
  id: string
  title: string
  client: string
  period: string
  role: string
  stack: string[]
  description: string
  highlights: string[]
  featured: boolean
  link?: string
}

export interface Education {
  degree: string
  institution: string
  period: string
}

export interface Personal {
  name: string
  title: string
  location: string
  email: string
  phone: string
  linkedin: string
  githubWork: string
  githubPersonal: string
  bio: string
}

export type SkillCategory = Record<string, string[]>

export type FormStatus = 'idle' | 'sending' | 'sent' | 'error'
