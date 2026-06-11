import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
  deliverable: string;
}

@Component({
  selector: 'app-how-we-work',
  standalone: true,
  imports: [MatIcon, ScrollRevealDirective],
  template: `
    <section class="section section--alt">
      <div class="container">
        <header class="section__header" appScrollReveal>
          <span class="section__eyebrow">Our Process</span>
          <h2 class="section__title">A proven, collaborative process</h2>
          <p class="section__subtitle">
            We keep you informed at every stage — so your product is delivered on time, on budget,
            and exactly as envisioned.
          </p>
        </header>

        <div class="timeline">
          <div class="timeline__line"></div>

          @for (step of steps; track step.number; let i = $index) {
            <div class="timeline__item" [class.timeline__item--right]="i % 2 !== 0" [appScrollReveal]="i">
              <div class="timeline__node">
                <div class="node__ring"></div>
                <div class="node__icon">
                  <mat-icon>{{ step.icon }}</mat-icon>
                </div>
                <span class="node__number">{{ step.number }}</span>
              </div>

              <div class="timeline__card">
                <h3 class="card__title">{{ step.title }}</h3>
                <p class="card__desc">{{ step.description }}</p>
                <div class="card__deliverable">
                  <mat-icon class="card__check">task_alt</mat-icon>
                  <span>{{ step.deliverable }}</span>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="promise" appScrollReveal>
          <div class="promise__icon">
            <mat-icon>verified_user</mat-icon>
          </div>
          <div class="promise__body">
            <h3 class="promise__title">Our delivery promise</h3>
            <p class="promise__text">
              Weekly progress reports, a dedicated Slack channel, and a fixed-price scope — so there
              are no surprises on invoice day. If we miss a milestone, you don't pay for that sprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      /* ─── Timeline wrapper ───────────────────────────────────── */
      .timeline {
        position: relative;
        max-width: 900px;
        margin: 0 auto 3.5rem;
        padding: 1rem 0 2rem;
      }

      /* The vertical spine */
      .timeline__line {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        transform: translateX(-50%);
        background: linear-gradient(
          to bottom,
          transparent,
          var(--color-accent) 8%,
          var(--color-accent) 92%,
          transparent
        );
        opacity: 0.25;
      }

      /* ─── Each row ───────────────────────────────────────────── */
      .timeline__item {
        display: grid;
        /* left item: card | node | empty */
        grid-template-columns: 1fr 72px 1fr;
        grid-template-areas: 'card node empty';
        align-items: center;
        gap: 0 1.5rem;
        margin-bottom: 2.5rem;
      }

      .timeline__item--right {
        /* right item: empty | node | card */
        grid-template-areas: 'empty node card';
      }

      /* ─── Centre node ────────────────────────────────────────── */
      .timeline__node {
        grid-area: node;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.35rem;
        z-index: 1;
      }

      .node__ring {
        position: absolute;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        border: 2px dashed var(--color-accent);
        opacity: 0.2;
        pointer-events: none;
      }

      .node__icon {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 18px rgba(99, 102, 241, 0.3);
        position: relative;
        z-index: 1;
      }

      .node__icon mat-icon {
        font-size: 24px;
        width: 24px;
        height: 24px;
        color: white;
      }

      .node__number {
        font-family: var(--font-mono);
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--color-accent);
      }

      /* ─── Card ───────────────────────────────────────────────── */
      .timeline__card {
        grid-area: card;
        background: white;
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-lg);
        padding: 1.75rem 1.75rem 1.5rem;
        transition: all 300ms ease;
        position: relative;
      }

      /* Arrow pointing toward the spine */
      .timeline__card::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
        border: 10px solid transparent;
        border-left-color: white;
        filter: drop-shadow(1px 0 0 var(--color-gray-light));
      }

      .timeline__item--right .timeline__card::after {
        right: auto;
        left: -10px;
        border-left-color: transparent;
        border-right-color: white;
        filter: drop-shadow(-1px 0 0 var(--color-gray-light));
      }

      .timeline__item:hover .timeline__card {
        border-color: var(--color-accent);
        box-shadow: var(--shadow-md);
      }

      .card__title {
        font-size: 1.05rem;
        font-weight: 700;
        margin: 0 0 0.5rem;
        color: var(--color-dark);
      }

      .card__desc {
        font-size: 0.92rem;
        color: var(--color-gray);
        margin: 0 0 1rem;
        line-height: 1.65;
      }

      .card__deliverable {
        display: flex;
        align-items: flex-start;
        gap: 0.4rem;
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--color-accent);
        line-height: 1.45;
      }

      .card__check {
        font-size: 16px !important;
        width: 16px !important;
        height: 16px !important;
        flex-shrink: 0;
        margin-top: 1px;
      }

      /* ─── Delivery promise banner ────────────────────────────── */
      .promise {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
        background: white;
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-lg);
        padding: 2rem 2.5rem;
        max-width: 900px;
        margin: 0 auto;
      }

      .promise__icon {
        width: 52px;
        height: 52px;
        border-radius: var(--radius-md);
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .promise__icon mat-icon {
        color: white;
        font-size: 26px;
        width: 26px;
        height: 26px;
      }

      .promise__title {
        font-size: 1.05rem;
        font-weight: 700;
        margin: 0 0 0.4rem;
        color: var(--color-dark);
      }

      .promise__text {
        font-size: 0.95rem;
        color: var(--color-gray);
        margin: 0;
        line-height: 1.65;
      }

      /* ─── Mobile: collapse to single column ─────────────────── */
      @media (max-width: 720px) {
        .timeline__line {
          left: 28px;
        }

        .timeline__item,
        .timeline__item--right {
          grid-template-columns: 56px 1fr;
          grid-template-areas: 'node card';
        }

        .timeline__card::after,
        .timeline__item--right .timeline__card::after {
          right: auto;
          left: -10px;
          border-left-color: transparent;
          border-right-color: white;
          filter: drop-shadow(-1px 0 0 var(--color-gray-light));
        }

        .node__icon {
          width: 44px;
          height: 44px;
        }

        .node__icon mat-icon {
          font-size: 20px;
          width: 20px;
          height: 20px;
        }

        .node__ring {
          width: 56px;
          height: 56px;
        }

        .timeline__card {
          padding: 1.25rem;
        }

        .promise {
          padding: 1.5rem;
          flex-direction: column;
        }
      }
    `,
  ],
})
export class HowWeWorkComponent {
  readonly steps: Step[] = [
    {
      number: '01',
      icon: 'search',
      title: 'Discovery & Scoping',
      description:
        'We start with a deep-dive session to understand your goals, constraints, and existing systems. No assumptions — just honest questions and clear answers.',
      deliverable: 'Signed scope document + fixed-price quote within 5 business days',
    },
    {
      number: '02',
      icon: 'map',
      title: 'Roadmap & Planning',
      description:
        'Together we define milestones, success metrics, and a sprint plan. You approve the roadmap before a single line of code is written.',
      deliverable: 'Detailed project roadmap with milestones and acceptance criteria',
    },
    {
      number: '03',
      icon: 'code',
      title: 'Build & Iterate',
      description:
        'Two-week sprints with live demos every cycle. You stay close to the work — review, give feedback, and see real progress, not status-report theatre.',
      deliverable: 'Working software demo every sprint + weekly written update',
    },
    {
      number: '04',
      icon: 'verified',
      title: 'Test & Harden',
      description:
        'Every release goes through QA, security review, and performance benchmarking before it touches production. We ship software we would stake our own reputation on.',
      deliverable: 'QA report, security audit summary, and load-test results',
    },
    {
      number: '05',
      icon: 'rocket_launch',
      title: 'Deploy & Handover',
      description:
        'Smooth production rollout with zero-downtime deployment, full documentation, and a structured knowledge transfer so your team owns the system from day one.',
      deliverable: 'Live system, runbooks, architecture docs, and recorded walkthroughs',
    },
    {
      number: '06',
      icon: 'support_agent',
      title: 'Support & Optimize',
      description:
        'Post-launch monitoring, SLA-backed support, and quarterly business reviews to keep your product fast, secure, and aligned with where your business is heading.',
      deliverable: 'SLA agreement, monitoring dashboard access, and QBR schedule',
    },
  ];
}
