import { FaqItem } from '../models/service.model';

export const FAQS: FaqItem[] = [
  {
    category: 'General',
    question: 'What industries do you work with?',
    answer:
      'We work across fintech, healthcare, retail, logistics, and SaaS — anywhere modern software meets enterprise constraints.',
  },
  {
    category: 'General',
    question: 'Where are you based?',
    answer:
      'Headquartered in Bengaluru with delivery teams across India and a presence in the US and EU for client coverage.',
  },
  {
    category: 'Services',
    question: 'Can you augment our existing engineering team?',
    answer:
      'Yes — staff augmentation, embedded pods, and full project delivery are all common engagement models.',
  },
  {
    category: 'Services',
    question: 'Do you handle production support after launch?',
    answer:
      'Yes. We offer ongoing engineering and 24/7 support retainers, scoped to your reliability targets.',
  },
  {
    category: 'Pricing & Billing',
    question: 'How do you price projects?',
    answer:
      'Fixed-price for well-defined scope, time-and-materials for evolving scope. We share both options after discovery.',
  },
  {
    category: 'Pricing & Billing',
    question: 'Do you offer free consultations?',
    answer:
      'Yes — a 30-minute discovery call is always free. Detailed assessments are quoted as a paid engagement.',
  },
  {
    category: 'Support & Maintenance',
    question: 'What is your SLA?',
    answer:
      'Standard SLA is 99.9% uptime with response times of 15 minutes (P1), 1 hour (P2), and 4 hours (P3). Custom SLAs available.',
  },
  {
    category: 'Support & Maintenance',
    question: 'How do you handle on-call?',
    answer:
      'Dedicated retainers include 24/7 on-call rotations with documented runbooks and post-incident reviews.',
  },
];
