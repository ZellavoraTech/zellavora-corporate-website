import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIcon } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CtaBannerComponent } from '../../../shared/components/cta-banner/cta-banner.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { findService, SERVICES } from '../../../core/data/services.data';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    MatExpansionModule,
    CtaBannerComponent,
    ScrollRevealDirective,
  ],
  template: `
    @if (service(); as svc) {
      <section class="hero">
        <div class="container hero__grid">
          <div class="hero__content">
            <a routerLink="/services" class="hero__back">← Back to services</a>
            <span class="section__eyebrow">Service</span>
            <h1>{{ svc.title }}</h1>
            <p class="lead">{{ svc.longDescription }}</p>
            <div class="hero__meta">
              <div>
                <span class="meta__label">Timeline</span>
                <span class="meta__value">{{ svc.timeline }}</span>
              </div>
              <div>
                <span class="meta__label">Investment</span>
                <span class="meta__value">{{ svc.startingPrice }}</span>
              </div>
            </div>
            <a routerLink="/contact" class="btn btn--primary">Get a quote</a>
          </div>
          <aside class="hero__icon">
            <mat-icon>{{ svc.icon }}</mat-icon>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="container split">
          <div appScrollReveal>
            <h2>What you get</h2>
            <ul class="benefits">
              @for (b of svc.benefits; track b) {
                <li>
                  <mat-icon>check_circle</mat-icon>
                  <span>{{ b }}</span>
                </li>
              }
            </ul>
          </div>
          <div appScrollReveal>
            <h2>Technologies</h2>
            <ul class="tech">
              @for (t of svc.technologies; track t) {
                <li>{{ t }}</li>
              }
            </ul>
          </div>
        </div>
      </section>

      <section class="section section--alt">
        <div class="container">
          <header class="section__header" appScrollReveal>
            <span class="section__eyebrow">Our process</span>
            <h2 class="section__title">From discovery to outcome</h2>
          </header>
          <div class="process">
            @for (step of svc.process; track step.step) {
              <div class="step" appScrollReveal>
                <span class="step__num">0{{ step.step }}</span>
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container faqs">
          <header class="section__header" appScrollReveal>
            <span class="section__eyebrow">FAQ</span>
            <h2 class="section__title">Questions clients commonly ask</h2>
          </header>
          <mat-accordion>
            @for (q of svc.faqs; track q.question) {
              <mat-expansion-panel>
                <mat-expansion-panel-header>
                  <mat-panel-title>{{ q.question }}</mat-panel-title>
                </mat-expansion-panel-header>
                <p>{{ q.answer }}</p>
              </mat-expansion-panel>
            }
          </mat-accordion>
        </div>
      </section>

      <section class="section section--alt">
        <div class="container">
          <header class="section__header" appScrollReveal>
            <span class="section__eyebrow">Related</span>
            <h2 class="section__title">Other services you might need</h2>
          </header>
          <div class="related">
            @for (r of related(); track r.slug) {
              <a class="related__card" [routerLink]="['/services', r.slug]" appScrollReveal>
                <mat-icon>{{ r.icon }}</mat-icon>
                <h4>{{ r.title }}</h4>
                <p>{{ r.shortDescription }}</p>
              </a>
            }
          </div>
        </div>
      </section>

      <app-cta-banner
        title="Ready to talk specifics?"
        subtitle="Send a quick brief and we'll respond within one business day."
        primaryLabel="Schedule consultation"
        [secondaryLink]="null"
      />
    } @else {
      <section class="section container">
        <h1>Service not found</h1>
        <p>That service doesn't exist. <a routerLink="/services">Browse all services</a>.</p>
      </section>
    }
  `,
  styles: [
    `
      .hero {
        background: var(--gradient-soft);
        padding: var(--space-16) 0;
        border-bottom: 1px solid var(--color-gray-light);
      }
      .hero__grid {
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        gap: 3rem;
        align-items: center;
      }
      .hero__back {
        display: inline-block;
        color: var(--color-accent);
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }
      .hero h1 {
        margin: 0.5rem 0 1rem;
      }
      .lead {
        font-size: 1.1rem;
        color: var(--color-gray);
        max-width: 640px;
      }
      .hero__meta {
        display: flex;
        gap: 2rem;
        margin: 2rem 0;
      }
      .meta__label {
        display: block;
        font-size: 0.8rem;
        color: var(--color-gray);
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      .meta__value {
        display: block;
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--color-dark);
        margin-top: 0.25rem;
      }
      .hero__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gradient-primary);
        border-radius: var(--radius-xl);
        aspect-ratio: 1;
        max-width: 260px;
        margin-left: auto;
        box-shadow: var(--shadow-brand);
      }
      .hero__icon mat-icon {
        color: white;
        font-size: 100px;
        width: 100px;
        height: 100px;
      }
      .split {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
      }
      .benefits {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
      }
      .benefits li {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        font-size: 1rem;
        color: var(--color-dark);
      }
      .benefits mat-icon {
        color: var(--color-success);
        flex-shrink: 0;
      }
      .tech {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .tech li {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        padding: 0.4rem 0.85rem;
        background: var(--color-gray-bg);
        border: 1px solid var(--color-gray-light);
        border-radius: 6px;
      }
      .process {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .step {
        background: white;
        padding: 2rem;
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-gray-light);
        position: relative;
      }
      .step__num {
        font-family: var(--font-display);
        font-weight: 800;
        font-size: 2.5rem;
        background: var(--gradient-primary);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1;
        display: block;
        margin-bottom: 0.75rem;
      }
      .step h3 {
        font-size: 1.1rem;
        margin: 0 0 0.5rem;
      }
      .step p {
        font-size: 0.95rem;
        margin: 0;
      }
      .faqs {
        max-width: 820px;
      }
      .related {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
      }
      .related__card {
        background: white;
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-lg);
        padding: 1.5rem;
        text-decoration: none;
        color: inherit;
        transition: all 300ms ease;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .related__card:hover {
        transform: translateY(-4px);
        border-color: var(--color-accent);
        box-shadow: var(--shadow-md);
        color: inherit;
      }
      .related__card mat-icon {
        color: var(--color-accent);
        font-size: 28px;
        width: 28px;
        height: 28px;
        margin-bottom: 0.25rem;
      }
      .related__card h4 {
        margin: 0;
        font-size: 1.05rem;
      }
      .related__card p {
        margin: 0;
        font-size: 0.9rem;
      }

      @media (max-width: 860px) {
        .hero__grid {
          grid-template-columns: 1fr;
        }
        .hero__icon {
          max-width: 180px;
          margin: 0 auto;
        }
        .split {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }
    `,
  ],
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  private slug = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  readonly service = computed(() => {
    const slug = this.slug().get('slug') ?? '';
    return findService(slug);
  });

  readonly related = computed(() => {
    const current = this.service();
    if (!current) return [];
    return SERVICES.filter((s) => s.slug !== current.slug).slice(0, 3);
  });

  ngOnInit(): void {
    const svc = this.service();
    if (svc) {
      this.seo.update({
        title: svc.title,
        description: svc.shortDescription,
        url: `${environment.siteUrl}/services/${svc.slug}`,
      });
    }
  }
}
