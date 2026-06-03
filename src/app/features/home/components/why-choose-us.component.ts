import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Pillar {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [MatIcon, ScrollRevealDirective],
  template: `
    <section class="section section--alt">
      <div class="container">
        <header class="section__header" appScrollReveal>
          <span class="section__eyebrow">Why Zellavora</span>
          <h2 class="section__title">Engineering you can trust, delivery you can measure</h2>
          <p class="section__subtitle">
            Four reasons our clients renew engagement after engagement.
          </p>
        </header>

        <div class="pillars">
          @for (pillar of pillars; track pillar.title; let i = $index) {
            <div class="pillar" [appScrollReveal]="i">
              <div class="pillar__icon">
                <mat-icon>{{ pillar.icon }}</mat-icon>
              </div>
              <h3 class="pillar__title">{{ pillar.title }}</h3>
              <p class="pillar__desc">{{ pillar.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .pillars {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1.5rem;
      }
      .pillar {
        background: white;
        border-radius: var(--radius-lg);
        padding: 2rem 1.5rem;
        text-align: center;
        border: 1px solid var(--color-gray-light);
        transition: all 300ms ease;
      }
      .pillar:hover {
        transform: translateY(-4px);
        border-color: var(--color-accent);
        box-shadow: var(--shadow-md);
      }
      .pillar__icon {
        width: 64px;
        height: 64px;
        border-radius: var(--radius-md);
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        color: white;
      }
      .pillar__icon mat-icon {
        font-size: 32px;
        width: 32px;
        height: 32px;
        color: white;
      }
      .pillar__title {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
      .pillar__desc {
        font-size: 0.95rem;
        color: var(--color-gray);
        margin: 0;
      }
    `,
  ],
})
export class WhyChooseUsComponent {
  readonly pillars: Pillar[] = [
    {
      icon: 'support_agent',
      title: '24/7 Support',
      description: 'Always-on engineering with documented runbooks and clear SLAs.',
    },
    {
      icon: 'workspace_premium',
      title: 'Senior Expertise',
      description: 'Every project is led by engineers with 8+ years of production experience.',
    },
    {
      icon: 'savings',
      title: 'Cost-Effective',
      description: 'Fixed-price scope, transparent rates, and FinOps built into delivery.',
    },
    {
      icon: 'verified',
      title: 'Proven Track Record',
      description: '240+ projects shipped, 60+ enterprise clients, 95% retention.',
    },
  ];
}
