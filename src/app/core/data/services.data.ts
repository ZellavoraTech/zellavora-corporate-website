import { ServiceItem } from '../models/service.model';

export const SERVICES: ServiceItem[] = [
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions & Migration',
    shortDescription:
      'Architect, migrate, and optimize cloud workloads on AWS, Azure, and GCP with zero-downtime cutovers.',
    longDescription:
      'We design cloud-native architectures and migrate legacy workloads to modern, elastic infrastructure — cutting costs, lifting performance, and unlocking global scale. Our certified architects handle assessment, landing zone setup, IaC, and post-migration optimization.',
    icon: 'cloud',
    benefits: [
      'Up to 40% reduction in infrastructure costs',
      'Zero-downtime migration playbooks',
      'Multi-cloud and hybrid-ready designs',
      '24/7 monitoring with SLAs',
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
    timeline: '6–16 weeks',
    startingPrice: 'From $12,000',
    process: [
      { step: 1, title: 'Discover', description: 'Audit existing workloads, dependencies, and cost baselines.' },
      { step: 2, title: 'Design', description: 'Define target architecture, landing zones, and security controls.' },
      { step: 3, title: 'Migrate', description: 'Move workloads in waves with automated rollback safety nets.' },
      { step: 4, title: 'Optimize', description: 'Right-size, automate, and tune for performance and cost.' },
    ],
    faqs: [
      {
        question: 'Will my services experience downtime during migration?',
        answer:
          'Our wave-based migration playbook is designed for zero or near-zero downtime. Critical workloads are tested in parallel before cutover.',
      },
      {
        question: 'Which cloud provider should I choose?',
        answer:
          'We are provider-agnostic. The right choice depends on workload, compliance, and ecosystem fit — we recommend based on a fact-based assessment.',
      },
    ],
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    shortDescription:
      'Bespoke web platforms and SaaS products built on modern stacks — TypeScript, Angular, Node, .NET, and Python.',
    longDescription:
      'From greenfield SaaS to enterprise platform modernization, our engineering pods deliver production-grade software with end-to-end ownership. We pair senior engineers with product designers to ship measurable outcomes, not just features.',
    icon: 'code',
    benefits: [
      'Senior-only engineering pods',
      'Production-ready from week one',
      'Built-in CI/CD, observability, and tests',
      'Full IP transfer and documentation',
    ],
    technologies: ['Angular', 'React', 'Node.js', '.NET', 'Python', 'PostgreSQL'],
    timeline: '3–9 months',
    startingPrice: 'From $25,000',
    process: [
      { step: 1, title: 'Shape', description: 'Product discovery, scope definition, and architecture spike.' },
      { step: 2, title: 'Build', description: 'Iterative two-week sprints with demos and stakeholder reviews.' },
      { step: 3, title: 'Launch', description: 'Hardening, security review, and production rollout.' },
      { step: 4, title: 'Evolve', description: 'Optional ongoing engineering and support partnership.' },
    ],
    faqs: [
      {
        question: 'Do you sign NDAs?',
        answer: 'Yes — mutual NDA is standard before any discovery work begins.',
      },
      {
        question: 'Who owns the code?',
        answer: 'You do. We transfer full IP, source, infrastructure access, and documentation on completion.',
      },
    ],
  },
  {
    slug: 'mobile-development',
    title: 'Mobile App Development',
    shortDescription:
      'Native and cross-platform mobile apps with offline-first design and store-ready release pipelines.',
    longDescription:
      'We ship iOS and Android apps that feel native and scale to millions of users. Our cross-platform expertise (Flutter, React Native) keeps timelines tight without sacrificing quality.',
    icon: 'smartphone',
    benefits: [
      'iOS + Android from one codebase',
      'Offline-first sync architecture',
      'App Store / Play Store launch support',
      'Crash-free rate targets above 99.5%',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
    timeline: '4–8 months',
    startingPrice: 'From $30,000',
    process: [
      { step: 1, title: 'Prototype', description: 'Clickable prototype validated with target users.' },
      { step: 2, title: 'Build', description: 'Sprint-based delivery with TestFlight / internal track releases.' },
      { step: 3, title: 'Submit', description: 'Store submission, review handling, and phased rollout.' },
      { step: 4, title: 'Iterate', description: 'Analytics-driven updates and feature releases.' },
    ],
    faqs: [
      {
        question: 'Native or cross-platform?',
        answer:
          'We recommend based on performance needs, platform-specific features, and your team’s long-term maintenance capacity.',
      },
    ],
  },
  {
    slug: 'ai-ml',
    title: 'AI & Machine Learning',
    shortDescription:
      'Production ML, LLM applications, and retrieval pipelines that ship — not science projects.',
    longDescription:
      'From RAG systems and fine-tuned LLMs to forecasting and computer vision, we build AI that runs in production with proper evals, observability, and cost controls.',
    icon: 'auto_awesome',
    benefits: [
      'RAG, agents, and fine-tuned LLM apps',
      'MLOps with experiment tracking',
      'Eval harnesses and guardrails',
      'Cost-aware inference pipelines',
    ],
    technologies: ['Python', 'PyTorch', 'LangChain', 'OpenAI', 'Anthropic', 'Hugging Face'],
    timeline: '8–20 weeks',
    startingPrice: 'From $20,000',
    process: [
      { step: 1, title: 'Frame', description: 'Identify a clear business metric the model needs to move.' },
      { step: 2, title: 'Prototype', description: 'Offline evals on representative data.' },
      { step: 3, title: 'Productionize', description: 'Inference infra, monitoring, and rollout.' },
      { step: 4, title: 'Improve', description: 'Continuous eval and feedback-loop iteration.' },
    ],
    faqs: [
      {
        question: 'Do you handle data privacy?',
        answer:
          'Yes — we design for data residency, PII redaction, and on-prem or private inference where required.',
      },
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    shortDescription:
      'Threat assessments, penetration testing, and compliance programs for SOC 2, ISO 27001, and HIPAA.',
    longDescription:
      'We help you find and fix what attackers would exploit, and stand up the security programs that auditors and enterprise customers demand. From pentests to full SOC 2 readiness.',
    icon: 'shield',
    benefits: [
      'Pentest reports with remediation guidance',
      'SOC 2 / ISO 27001 / HIPAA programs',
      'Threat modeling and architecture review',
      'Incident response retainers',
    ],
    technologies: ['Burp Suite', 'Metasploit', 'Wireshark', 'Vanta', 'Drata', 'SIEM'],
    timeline: '2–12 weeks',
    startingPrice: 'From $8,000',
    process: [
      { step: 1, title: 'Scope', description: 'Define assets, threat model, and rules of engagement.' },
      { step: 2, title: 'Test', description: 'Manual + automated testing across surfaces.' },
      { step: 3, title: 'Report', description: 'Findings with severity, exploitation path, and fixes.' },
      { step: 4, title: 'Retest', description: 'Validate fixes and close the loop.' },
    ],
    faqs: [
      {
        question: 'How is the engagement scoped?',
        answer:
          'We start with a free 30-minute scoping call to size assets and threat model before quoting fixed-price work.',
      },
    ],
  },
  {
    slug: 'devops-infrastructure',
    title: 'DevOps & Infrastructure',
    shortDescription:
      'CI/CD pipelines, observability stacks, and platform engineering for teams that ship daily.',
    longDescription:
      'We treat infrastructure as a product. Your engineers get fast feedback, safe deploys, and the telemetry to debug production confidently — without owning the platform team.',
    icon: 'settings',
    benefits: [
      'Deploys in minutes, not hours',
      'Zero-config developer environments',
      'Full-stack observability (logs, metrics, traces)',
      'On-call rotations and runbooks',
    ],
    technologies: ['Kubernetes', 'GitHub Actions', 'ArgoCD', 'Datadog', 'Prometheus', 'Grafana'],
    timeline: '4–10 weeks',
    startingPrice: 'From $15,000',
    process: [
      { step: 1, title: 'Audit', description: 'Map current pipelines, environments, and pain points.' },
      { step: 2, title: 'Design', description: 'Target platform architecture and rollout plan.' },
      { step: 3, title: 'Implement', description: 'Pipelines, observability, and developer tooling.' },
      { step: 4, title: 'Enable', description: 'Documentation and team training.' },
    ],
    faqs: [
      {
        question: 'Do you work alongside in-house teams?',
        answer:
          'Yes — embedded engagement is our default. We pair with your engineers and transfer ownership progressively.',
      },
    ],
  },
];

export function findService(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
