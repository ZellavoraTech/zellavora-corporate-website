import { Component, OnInit, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CtaBannerComponent } from '../../../shared/components/cta-banner/cta-banner.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { CountUpDirective } from '../../../shared/directives/count-up.directive';
import { STATS, TEAM, TIMELINE } from '../../../core/data/team.data';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIcon, CtaBannerComponent, ScrollRevealDirective, CountUpDirective],
  template: `
    <section class="page-header">
      <div class="container">
        <span class="section__eyebrow">About Zellavora</span>
        <h1>Engineers and operators who care about your outcomes</h1>
        <p class="lead">
          We're a remote-first studio out of Chennai — a small team of senior engineers, designers,
          and security practitioners building production software for organizations who can't
          afford it to break.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="card" appScrollReveal>
          <mat-icon class="card__icon">flag</mat-icon>
          <h2>Our mission</h2>
          <p>
            Make modern technology accessible, trustworthy, and economically sane for organizations
            of every size — without the consulting theater.
          </p>
        </div>
        <div class="card" appScrollReveal>
          <mat-icon class="card__icon">visibility</mat-icon>
          <h2>Our vision</h2>
          <p>
            A world where every business — from startup to enterprise — has the engineering
            partnership it needs to compound technical leverage year over year.
          </p>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <header class="section__header" appScrollReveal>
          <span class="section__eyebrow">By the numbers</span>
          <h2 class="section__title">A track record we're proud of</h2>
        </header>
        <div class="stats">
          @for (s of stats; track s.label; let i = $index) {
            <div class="stat" [appScrollReveal]="i">
              <span class="stat__value text-gradient" [appCountUp]="s.value" [suffix]="s.suffix || ''"></span>
              <span class="stat__label">{{ s.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <header class="section__header" appScrollReveal>
          <span class="section__eyebrow">Our story</span>
          <h2 class="section__title">Built in steady steps, not overnight</h2>
        </header>
        <div class="timeline">
          @for (event of timeline; track event.year) {
            <div class="event" appScrollReveal>
              <span class="event__year">{{ event.year }}</span>
              <div class="event__body">
                <h3>{{ event.title }}</h3>
                <p>{{ event.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <header class="section__header" appScrollReveal>
          <span class="section__eyebrow">Our team</span>
          <h2 class="section__title">The people behind the work</h2>
          <p class="section__subtitle">Senior practitioners across engineering, design, and security.</p>
        </header>
        <div class="team">
          @for (m of team; track m.name; let i = $index) {
            <article class="member" [appScrollReveal]="i">
              <img [src]="m.avatar" [alt]="m.name" loading="lazy" />
              <h3>{{ m.name }}</h3>
              <p class="member__role">{{ m.role }}</p>
              <ul class="member__expertise">
                @for (exp of m.expertise; track exp) {
                  <li>{{ exp }}</li>
                }
              </ul>
              @if (m.linkedin) {
                <a [href]="m.linkedin" target="_blank" rel="noopener" class="member__social" aria-label="LinkedIn">
                  <mat-icon>link</mat-icon>
                </a>
              }
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <header class="section__header" appScrollReveal>
          <span class="section__eyebrow">Awards &amp; partnerships</span>
          <h2 class="section__title">Recognized by the platforms we ship on</h2>
        </header>
        <div class="awards">
          @for (a of awards; track a) {
            <div class="award" appScrollReveal>
              <mat-icon>workspace_premium</mat-icon>
              <span>{{ a }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <header class="section__header" appScrollReveal>
          <span class="section__eyebrow">Culture</span>
          <h2 class="section__title">How we work</h2>
        </header>
        <div class="values">
          @for (v of values; track v.title) {
            <div class="value" appScrollReveal>
              <mat-icon>{{ v.icon }}</mat-icon>
              <h3>{{ v.title }}</h3>
              <p>{{ v.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <app-cta-banner
      title="Want to work with us — or for us?"
      subtitle="We're hiring, and we're always open to interesting client problems."
      primaryLabel="Start a conversation"
    />
  `,
  styles: [
    `
      .page-header {
        background: var(--gradient-soft);
        padding: var(--space-16) 0 var(--space-12);
        text-align: center;
        border-bottom: 1px solid var(--color-gray-light);
      }
      .page-header h1 {
        margin: 1rem 0;
      }
      .lead {
        max-width: 720px;
        margin: 0 auto;
        font-size: 1.125rem;
        color: var(--color-gray);
      }
      .split {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      .card {
        background: white;
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-lg);
        padding: 2.5rem;
      }
      .card__icon {
        background: var(--gradient-primary);
        color: white;
        font-size: 32px;
        width: 56px;
        height: 56px;
        padding: 12px;
        border-radius: var(--radius-md);
        margin-bottom: 1rem;
      }
      .stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1.5rem;
      }
      .stat {
        background: white;
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-lg);
        padding: 2rem 1rem;
        text-align: center;
      }
      .stat__value {
        font-family: var(--font-display);
        font-size: 3rem;
        font-weight: 800;
        line-height: 1;
        display: block;
        margin-bottom: 0.5rem;
      }
      .stat__label {
        font-size: 0.95rem;
        color: var(--color-gray);
      }
      .timeline {
        max-width: 760px;
        margin: 0 auto;
        position: relative;
        padding-left: 2rem;
        border-left: 2px solid var(--color-gray-light);
      }
      .event {
        position: relative;
        padding-bottom: 2.5rem;
      }
      .event::before {
        content: '';
        position: absolute;
        left: -2.6rem;
        top: 0.25rem;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--gradient-primary);
        border: 4px solid white;
        box-shadow: 0 0 0 2px var(--color-accent);
      }
      .event__year {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--color-accent);
        letter-spacing: 0.08em;
      }
      .event__body h3 {
        margin: 0.25rem 0 0.5rem;
        font-size: 1.15rem;
      }
      .event__body p {
        margin: 0;
      }
      .team {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .member {
        background: white;
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-lg);
        padding: 1.5rem;
        text-align: center;
        position: relative;
        transition: all 300ms ease;
      }
      .member:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
        border-color: var(--color-accent);
      }
      .member img {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        margin: 0 auto 0.85rem;
        object-fit: cover;
        border: 3px solid var(--color-accent);
      }
      .member h3 {
        margin: 0;
        font-size: 1.05rem;
      }
      .member__role {
        font-size: 0.9rem;
        color: var(--color-accent);
        margin: 0.25rem 0 0.85rem;
        font-weight: 600;
      }
      .member__expertise {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .member__expertise li {
        font-size: 0.78rem;
        padding: 0.2rem 0.6rem;
        background: var(--color-gray-bg);
        border-radius: 999px;
        color: var(--color-gray);
      }
      .member__social {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: var(--color-accent);
      }
      .awards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
      }
      .award {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 1.25rem;
        background: var(--color-gray-bg);
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-md);
        font-weight: 600;
        color: var(--color-dark);
      }
      .award mat-icon {
        color: var(--color-accent);
      }
      .values {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1.5rem;
      }
      .value {
        background: white;
        padding: 2rem;
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-gray-light);
      }
      .value mat-icon {
        color: var(--color-accent);
        font-size: 32px;
        width: 32px;
        height: 32px;
        margin-bottom: 0.75rem;
      }
      .value h3 {
        margin: 0 0 0.5rem;
        font-size: 1.1rem;
      }
      .value p {
        margin: 0;
        font-size: 0.95rem;
      }
      @media (max-width: 720px) {
        .split {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class AboutComponent implements OnInit {
  readonly team = TEAM;
  readonly stats = STATS;
  readonly timeline = TIMELINE;
  readonly awards = [
    'AWS Advanced Partner',
    'Microsoft Gold Partner',
    'ISO 27001 Certified',
    'SOC 2 Type II',
    'Vanta Verified',
    'Clutch Top B2B 2024',
  ];
  readonly values = [
    {
      icon: 'handshake',
      title: 'Honesty over upsell',
      description: 'We will tell you when you do not need us — and recommend who does.',
    },
    {
      icon: 'engineering',
      title: 'Senior-only delivery',
      description: 'No bait-and-switch staffing. The team that pitches is the team that builds.',
    },
    {
      icon: 'task_alt',
      title: 'Outcomes, not outputs',
      description: 'Every engagement starts with a measurable business metric to move.',
    },
  ];

  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'About',
      description:
        'Meet the team behind Zellavora — senior engineers, designers, and security practitioners building software that ships.',
      url: `${environment.siteUrl}/about`,
    });
  }
}
