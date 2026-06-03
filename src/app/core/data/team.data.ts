import { CompanyStat, TeamMember, TimelineEvent } from '../models/team.model';

export const TEAM: TeamMember[] = [
  {
    name: 'Vikram Shah',
    role: 'Founder & CEO',
    avatar: 'https://i.pravatar.cc/200?img=68',
    linkedin: 'https://linkedin.com/in/vikram-shah',
    expertise: ['Strategy', 'Product', 'Cloud'],
  },
  {
    name: 'Priya Nair',
    role: 'Principal Cloud Architect',
    avatar: 'https://i.pravatar.cc/200?img=47',
    linkedin: 'https://linkedin.com/in/priya-nair',
    expertise: ['AWS', 'Azure', 'Kubernetes'],
  },
  {
    name: 'Arjun Mehta',
    role: 'Staff Engineer',
    avatar: 'https://i.pravatar.cc/200?img=12',
    linkedin: 'https://linkedin.com/in/arjun-mehta',
    expertise: ['Angular', 'TypeScript', 'Platform'],
  },
  {
    name: 'Daniela Ortiz',
    role: 'Head of Security',
    avatar: 'https://i.pravatar.cc/200?img=32',
    linkedin: 'https://linkedin.com/in/daniela-ortiz',
    expertise: ['SOC 2', 'Pentesting', 'GRC'],
  },
  {
    name: 'Kenji Sato',
    role: 'ML Engineering Lead',
    avatar: 'https://i.pravatar.cc/200?img=15',
    linkedin: 'https://linkedin.com/in/kenji-sato',
    expertise: ['LLMs', 'MLOps', 'Python'],
  },
  {
    name: 'Leah Okonkwo',
    role: 'Head of Design',
    avatar: 'https://i.pravatar.cc/200?img=44',
    linkedin: 'https://linkedin.com/in/leah-okonkwo',
    expertise: ['Product Design', 'UX Research', 'Design Systems'],
  },
];

export const STATS: CompanyStat[] = [
  { label: 'Projects Shipped', value: 60, suffix: '+' },
  { label: 'Happy Clients', value: 24, suffix: '+' },
  { label: 'Engineers & Designers', value: 18, suffix: '' },
  { label: 'Countries Covered', value: 9, suffix: '' },
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2023',
    title: 'Founded in Chennai',
    description:
      'Started as a remote-first studio of four senior engineers tired of consultancy theater.',
  },
  {
    year: '2024',
    title: 'First production deal',
    description: 'Migrated a Series B fintech to multi-region AWS — no downtime, no rewrites.',
  },
  {
    year: '2024',
    title: 'Distributed by design',
    description:
      'Crossed 12 teammates across 6 cities, fully async by default with quarterly in-person offsites.',
  },
  {
    year: '2025',
    title: 'Security & AI practices',
    description: 'Stood up dedicated SOC 2 and applied-AI engagements alongside cloud work.',
  },
  {
    year: '2026',
    title: '60+ projects delivered',
    description:
      'Trusted by founders and enterprise teams from Chennai to San Francisco — still small, still senior-only.',
  },
];
