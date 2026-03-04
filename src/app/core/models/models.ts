export interface Project {
  id: string;
  title: string;
  stack: string[];
  description: string;
  type?: string;
  extraText?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  date: string;
  description: string;
  tech?: string[];
}

export interface Skill {
  name: string;
  category: string;
}

export interface AboutInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  interests: string[];
  languages: string[];
  availability: string;
}

export interface Education {
  title: string;
  date?: string;
  description: string;
}

