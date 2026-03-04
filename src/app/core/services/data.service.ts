import { Injectable, signal } from '@angular/core';
import { Project, Experience, AboutInfo, Education, Skill } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Signals for state management
  private themeSignal = signal<'dark' | 'light'>('dark');
  public theme = this.themeSignal.asReadonly();

  toggleTheme() {
    this.themeSignal.update((t: 'dark' | 'light') => t === 'dark' ? 'light' : 'dark');
    if (this.themeSignal() === 'dark') {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }

  // Data Signals
  private projectsSignal = signal<Project[]>([
    {
      id: 'scalc',
      title: 'SCalc',
      stack: ['Java', 'Android Native', 'SQLite', 'Flutter'],
      description: 'Salary & Metrics Calculator for delivery drivers. Developed as a Capstone Project (TFG) for DAM. Currently porting to Flutter.',
      type: 'Main Project'
    },
    {
      id: 'kbevi',
      title: 'kbevi',
      stack: ['PHP', 'MySQL'],
      description: 'Professional web catalog for custom mechanical keyboards. My first functional web development created during Evirom internship.',
      type: 'Web Application'
    },
    {
      id: 'nerd-corner',
      title: 'Nerd Corner (Custom Keyboards)',
      stack: ['Hardware', 'Modding'],
      description: 'Productivity starts with the right switch. ⌨️. Passion for hardware, electromechanical logic, and touch typing.',
      type: 'Special Section'
    }
  ]);
  public projects = this.projectsSignal.asReadonly();

  private experiencesSignal = signal<Experience[]>([
    {
      id: 'dinaprise',
      company: 'Dinaprise (Internship)',
      role: 'Backend & Mobile Developer',
      date: 'Nov 2025 - Mar 2026',
      description: 'Native Android apps, Spring Boot architectures, and business logic implementation.',
      tech: ['Java', 'Spring Boot', 'Android Studio', 'SQL']
    },
    {
      id: 'evirom',
      company: 'Evirom Soluciones (Internship)',
      role: 'Full-Stack Web Developer',
      date: 'Jan 2025 - Apr 2025',
      description: 'Development of dynamic web solutions.',
      tech: ['PHP', 'MySQL', 'HTML/CSS']
    },
    {
      id: 'oido-kocina',
      company: 'Oído Kocina',
      role: 'Delivery Driver',
      date: 'Apr 2024 - Present',
      description: 'Last-mile logistics. Key note: This experience was the inspiration to independently develop my main project, SCalc.',
      tech: ['Logistics', 'Customer Service']
    },
    {
      id: 'colour-technology',
      company: 'Colour Technology (Internship)',
      role: 'Microcomputer Technician',
      date: 'Apr 2024 - Jun 2024',
      description: 'Hardware diagnostics and Apple ecosystem (iPhone) repair.',
      tech: ['Hardware Repair', 'Diagnostics', 'iOS']
    }
  ]);
  public experiences = this.experiencesSignal.asReadonly();

  private aboutInfoSignal = signal<AboutInfo>({
    name: 'Salvador López Trigueros',
    title: 'Multiplatform Software Developer',
    subtitle: 'Building Robust Architectures through Analytical Logic',
    bio: 'Specialist in solving complex logical problems. Strong focus on Backend with Spring Boot and the mobile ecosystem. Advanced AI user for productivity optimization and hardware enthusiast (Custom Keyboards).',
    interests: ['Spring Boot', 'Android Native', 'AI Development', 'Custom Keyboards'],
    languages: ['Spanish (Native)', 'English (Fluent Conversational & Technical)'],
    availability: 'Ready for Junior roles starting May 2026'
  });
  public aboutInfo = this.aboutInfoSignal.asReadonly();

  private educationSignal = signal<Education[]>([
    {
      title: 'Master FP in AI & Big Data Development',
      date: 'Starts Sept 2026',
      description: 'Includes Nex-IA Certification (Expertise in maximizing Google\'s AI ecosystem).'
    },
    {
      title: 'Higher Degree in Multiplatform Application Development (DAM)',
      date: 'Graduates May 2026',
      description: 'Specialized training in multiplatform application development.'
    },
    {
      title: 'Technician in Microcomputer Systems and Networks (SMR)',
      date: 'Graduated 2024',
      description: 'Fundamentals of hardware, networks, and operating systems.'
    }
  ]);
  public education = this.educationSignal.asReadonly();

  private skillsSignal = signal<Skill[]>([
    { name: 'Java', category: 'Backend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'SQL', category: 'Database' },
    { name: 'Android', category: 'Mobile' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Dart', category: 'Mobile' },
    { name: 'PHP', category: 'Web' },
    { name: 'Angular', category: 'Web' }
  ]);
  public skills = this.skillsSignal.asReadonly();
}
