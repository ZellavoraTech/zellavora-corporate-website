import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface CaseStudy {
  client: string;
  industry: string;
  outcome: string;
  metric: { value: string; label: string }[];
  quote?: string;
}

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section class="section">
      <div class="container">
        <header class="section__header" appScrollReveal>
          <span class="section__eyebrow">Case studies</span>
          <h2 class="section__title">Real outcomes, measured in numbers</h2>
          <p class="section__subtitle">
            A glimpse of what our partners ship after working with us.
          </p>
        </header>

        <div class="cases">
          @for (cs of cases; track cs.client; let i = $index) {
            <article class="case" [appScrollReveal]="i">
              <header class="case__header">
                <span class="case__industry">{{ cs.industry }}</span>
                <h3 class="case__client">{{ cs.client }}</h3>
              </header>
              <p class="case__outcome">{{ cs.outcome }}</p>
              <div class="case__metrics">
                @for (m of cs.metric; track m.label) {
                  <div class="case__metric">
                    <span class="case__value text-gradient">{{ m.value }}</span>
                    <span class="case__label">{{ m.label }}</span>
                  </div>
                }
              </div>
              @if (cs.quote) {
                <blockquote class="case__quote">"{{ cs.quote }}"</blockquote>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .cases {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.5rem;
      }
      .case {
        background: white;
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-lg);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        transition: all 300ms ease;
      }
      .case:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
        border-color: var(--color-accent);
      }
      .case__industry {
        font-family: var(--font-mono);
        font-size: 0.78rem;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--color-accent);
      }
      .case__client {
        font-size: 1.25rem;
        margin: 0.25rem 0 0;
        color: var(--color-dark);
      }
      .case__outcome {
        margin: 0;
        color: var(--color-gray);
        font-size: 0.95rem;
        line-height: 1.6;
      }
      .case__metrics {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        padding: 1rem 0;
        border-top: 1px solid var(--color-gray-light);
        border-bottom: 1px solid var(--color-gray-light);
      }
      .case__metric {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
      }
      .case__value {
        font-family: var(--font-display);
        font-size: 1.75rem;
        font-weight: 800;
        line-height: 1.1;
      }
      .case__label {
        font-size: 0.85rem;
        color: var(--color-gray);
      }
      .case__quote {
        margin: 0;
        font-style: italic;
        color: var(--color-dark);
        font-size: 0.95rem;
        border-left: 3px solid var(--color-accent);
        padding-left: 1rem;
      }
    `,
  ],
})
export class CaseStudiesComponent {
  readonly cases: CaseStudy[] = [
    {
      client: 'PayCircle Fintech',
      industry: 'Financial Services',
      outcome:
        'Re-architected the core ledger and migrated to a multi-region AWS footprint, unlocking faster regional rollout and 99.99% uptime.',
      metric: [
        { value: '42%', label: 'Lower infra cost' },
        { value: '3×', label: 'Deploy frequency' },
      ],
      quote: 'They shipped what our previous vendor said was impossible — in half the time.',
    },
    {
      client: 'NorthernCare Health',
      industry: 'Healthcare SaaS',
      outcome:
        'Stood up a HIPAA-ready platform from scratch — auth, audit, analytics, and a clinician portal that replaced a legacy desktop tool.',
      metric: [
        { value: '6mo', label: 'Time to launch' },
        { value: '12k', label: 'Daily users' },
      ],
      quote: 'A genuine partner — not a vendor. Our team learned alongside theirs.',
    },
    {
      client: 'ShelfSense Retail',
      industry: 'Retail / Computer Vision',
      outcome:
        'Built and deployed an in-store CV pipeline for shelf compliance, scaled to 800+ stores with <2s per-image inference.',
      metric: [
        { value: '800+', label: 'Stores live' },
        { value: '<2s', label: 'Inference time' },
      ],
      quote: 'They turned a noisy POC into a system our ops team actually trusts.',
    },
  ];
}
