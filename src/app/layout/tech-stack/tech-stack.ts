import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Tech {
  name: string;
  category: string;
  description: string;
  icon: string;
  status: string;
}

@Component({
  selector: 'app-tech-stack',
  imports: [CommonModule],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStack {

  readonly techs: Tech[] = [
    {
      name: 'Angular',
      category: 'Frontend Framework',
      description: 'Modern web application framework',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      status: 'Active',
    },
    {
      name: 'TypeScript',
      category: 'Language',
      description: 'Type-safe JavaScript superset',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      status: 'Active',
    },
    {
      name: 'RxJS',
      category: 'Reactive Library',
      description: 'Reactive programming with observables',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg',
      status: 'Active',
    },
    {
      name: 'Node.js',
      category: 'Backend Runtime',
      description: 'Server-side JavaScript engine',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      status: 'Active',
    },
    {
      name: 'Firebase',
      category: 'Cloud Platform',
      description: 'Real-time database & hosting',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
      status: 'Active',
    },
    {
      name: 'Ionic',
      category: 'Mobile Framework',
      description: 'Cross-platform mobile development',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg',
      status: 'Active',
    },
    {
      name: 'MongoDB',
      category: 'Database',
      description: 'NoSQL document database',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      status: 'Active',
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling Framework',
      description: 'Utility-first CSS framework',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      status: 'Active',
    },
    {
      name: 'Docker',
      category: 'DevOps',
      description: 'Container platform for deployments',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      status: 'Active',
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      description: 'Advanced relational database',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      status: 'Active',
    },
    {
      name: 'React',
      category: 'Frontend Library',
      description: 'Component-based UI library',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      status: 'Active',
    },
    {
      name: 'Python',
      category: 'Language',
      description: 'Versatile scripting & AI language',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      status: 'Active',
    },
    {
      name: 'Git',
      category: 'Version Control',
      description: 'Distributed version control system',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      status: 'Active',
    },
    {
      name: 'AWS',
      category: 'Cloud Provider',
      description: 'Scalable cloud infrastructure',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      status: 'Active',
    },
    {
      name: 'Figma',
      category: 'Design Tool',
      description: 'Collaborative UI/UX design',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      status: 'Active',
    },
    {
      name: 'GraphQL',
      category: 'API Layer',
      description: 'Flexible query language for APIs',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
      status: 'Active',
    },
  ];

  get allTechs(): Tech[] {
    return [...this.techs, ...this.techs];
  }
}
