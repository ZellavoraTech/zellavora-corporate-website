import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface TechCategory {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section class="section section--alt">
      <div class="container">
        <header class="section__header" appScrollReveal>
          <span class="section__eyebrow">Technology stack</span>
          <h2 class="section__title">Modern tools, used by people who know them well</h2>
          <p class="section__subtitle">
            A curated set of technologies our engineers ship to production every week.
          </p>
        </header>

        <div class="stack">
          @for (cat of categories; track cat.label; let i = $index) {
            <div class="stack__cat" [appScrollReveal]="i">
              <h4 class="stack__label">{{ cat.label }}</h4>
              <ul class="stack__items">
                @for (item of cat.items; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .stack {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
      }
      .stack__cat {
        background: white;
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-lg);
        padding: 1.5rem;
        transition: all 300ms ease;
      }
      .stack__cat:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-md);
        border-color: var(--color-accent);
      }
      .stack__label {
        font-family: var(--font-display);
        font-size: 0.95rem;
        font-weight: 700;
        color: var(--color-accent);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin: 0 0 1rem;
      }
      .stack__items {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }
      .stack__items li {
        font-family: var(--font-mono);
        font-size: 0.82rem;
        padding: 0.3rem 0.7rem;
        background: var(--color-gray-bg);
        border-radius: 6px;
        color: var(--color-dark);
        border: 1px solid var(--color-gray-light);
      }
    `,
  ],
})
export class TechStackComponent {
  readonly categories: TechCategory[] = [
    { label: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'Cloudflare'] },
    { label: 'Languages', items: ['TypeScript', 'Python', 'Go', '.NET', 'Java'] },
    { label: 'Frontend', items: ['Angular', 'React', 'Next.js', 'Flutter'] },
    { label: 'Backend', items: ['Node.js', 'NestJS', 'FastAPI', 'gRPC'] },
    { label: 'Data', items: ['PostgreSQL', 'Snowflake', 'BigQuery', 'Kafka'] },
    { label: 'AI / ML', items: ['PyTorch', 'LangChain', 'OpenAI', 'Anthropic'] },
    { label: 'DevOps', items: ['Kubernetes', 'Terraform', 'ArgoCD', 'GitHub Actions'] },
    { label: 'Observability', items: ['Datadog', 'Grafana', 'Sentry', 'OpenTelemetry'] },
  ];
}
