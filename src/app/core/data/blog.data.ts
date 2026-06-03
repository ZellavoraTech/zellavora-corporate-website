import { BlogPost } from '../models/blog.model';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cloud-migration-playbook-2026',
    title: 'The 2026 Cloud Migration Playbook: Lessons from 50+ Cutovers',
    excerpt:
      'What we learned moving fifty production workloads to the cloud — including the three mistakes that cost teams the most.',
    content: `<p>Migration is rarely the hard part. The hard part is everything that touches it: data gravity, identity sprawl, the half-documented batch job no one wants to own.</p>
<h2>1. Start with the bill, not the architecture</h2>
<p>Before whiteboarding a target diagram, pull six months of cloud spend (or on-prem cost allocation) and tag every dollar to a workload. You will find at least one surprise.</p>
<h2>2. Plan for the rollback you hope never to use</h2>
<p>Every wave needs a documented rollback path tested in a non-prod window. Teams that skip this learn the expensive way.</p>
<h2>3. Move identity before workloads</h2>
<p>Federation, SSO, and least-privilege baselines should land first. Refactoring IAM after the fact is the most-painful debt in cloud migrations.</p>`,
    author: {
      name: 'Priya Nair',
      role: 'Principal Cloud Architect',
      avatar: 'https://i.pravatar.cc/120?img=47',
      bio: '15+ years architecting cloud platforms across AWS, Azure, and GCP.',
    },
    publishedAt: '2026-04-12',
    readTimeMinutes: 7,
    category: 'Cloud',
    tags: ['AWS', 'Azure', 'Migration', 'FinOps'],
    coverImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'angular-zoneless-production',
    title: 'Going Zoneless in Production: A Practical Angular 21 Guide',
    excerpt:
      'Signals, OnPush, and trade-offs from running a real zoneless Angular app — what works, what bites.',
    content: `<p>Zoneless Angular has been quietly production-ready for a while. Here is what actually changes day-to-day for an engineering team.</p>
<h2>What you gain</h2>
<ul><li>Smaller bundle (no zone.js)</li><li>Explicit, predictable change detection</li><li>Cleaner stack traces</li></ul>
<h2>What you owe</h2>
<p>Signals everywhere. Anywhere you used to rely on zone.js to "just notice" a change, you now have to be explicit. Third-party libraries that mutate state outside Angular need wrapping.</p>`,
    author: {
      name: 'Arjun Mehta',
      role: 'Staff Engineer',
      avatar: 'https://i.pravatar.cc/120?img=12',
      bio: 'Angular contributor and frontend platform lead.',
    },
    publishedAt: '2026-03-28',
    readTimeMinutes: 9,
    category: 'Engineering',
    tags: ['Angular', 'Signals', 'Performance'],
    coverImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'soc2-from-zero',
    title: 'SOC 2 From Zero: A 90-Day Readiness Plan',
    excerpt:
      'The pragmatic path from "we have nothing" to "the auditor said yes" — the controls, the tooling, the timeline.',
    content: `<p>SOC 2 is less a security project and more an evidence project. Most companies have the controls; what they lack is the paper trail.</p>
<h2>The 90-day shape</h2>
<p>Days 1–30: policies and ownership. Days 31–60: tooling and evidence collection. Days 61–90: gap remediation and audit prep.</p>`,
    author: {
      name: 'Daniela Ortiz',
      role: 'Head of Security',
      avatar: 'https://i.pravatar.cc/120?img=32',
      bio: 'Former Big 4 auditor, now leads security engagements at Zellavora.',
    },
    publishedAt: '2026-02-15',
    readTimeMinutes: 6,
    category: 'Security',
    tags: ['SOC 2', 'Compliance', 'Audit'],
    coverImage:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'rag-systems-evaluation',
    title: 'Evaluating RAG Systems: Beyond Vibes',
    excerpt:
      'Why your RAG demo is great and your RAG production system isn’t — and how to close the gap with proper evals.',
    content: `<p>The single most common failure mode for RAG projects is shipping based on demo-quality output and discovering a long tail of failure cases in production.</p>
<h2>What good evals look like</h2>
<p>Representative test sets, golden answers, retrieval and generation graded separately, and CI integration so regressions are caught before merge.</p>`,
    author: {
      name: 'Kenji Sato',
      role: 'ML Engineering Lead',
      avatar: 'https://i.pravatar.cc/120?img=15',
      bio: 'Builds production ML and LLM systems for enterprise customers.',
    },
    publishedAt: '2026-01-30',
    readTimeMinutes: 8,
    category: 'AI/ML',
    tags: ['LLM', 'RAG', 'Evals'],
    coverImage:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop',
  },
];

export function findPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
