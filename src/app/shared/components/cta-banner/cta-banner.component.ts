import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  template: `
    <section class="ctab section">
      <div class="container">
        <div class="ctab__inner" appScrollReveal>
          <div class="ctab__bg" aria-hidden="true">
            <div class="ctab__orb"></div>
          </div>
          <div class="ctab__content">
            <h2 class="ctab__title">{{ title }}</h2>
            <p class="ctab__subtitle">{{ subtitle }}</p>
          </div>
          <div class="ctab__actions">
            <a [routerLink]="primaryLink" class="btn btn--primary">{{ primaryLabel }}</a>
            @if (secondaryLink) {
              <a [routerLink]="secondaryLink" class="btn btn--secondary">{{ secondaryLabel }}</a>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .ctab__inner {
        background: var(--gradient-dark);
        color: white;
        border-radius: var(--radius-xl);
        padding: 3.5rem;
        display: grid;
        grid-template-columns: 1.6fr auto;
        align-items: center;
        gap: 2rem;
        position: relative;
        overflow: hidden;
      }
      .ctab__bg {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .ctab__orb {
        position: absolute;
        width: 360px;
        height: 360px;
        border-radius: 50%;
        background: #a855f7;
        filter: blur(100px);
        opacity: 0.4;
        bottom: -160px;
        right: -100px;
      }
      .ctab__content {
        position: relative;
        z-index: 1;
      }
      .ctab__title {
        font-size: clamp(1.5rem, 3vw, 2.25rem);
        color: white;
        margin: 0 0 0.75rem;
      }
      .ctab__subtitle {
        margin: 0;
        color: rgba(255, 255, 255, 0.78);
        font-size: 1.05rem;
        max-width: 560px;
      }
      .ctab__actions {
        position: relative;
        z-index: 1;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
      @media (max-width: 760px) {
        .ctab__inner {
          grid-template-columns: 1fr;
          padding: 2.5rem 1.75rem;
          text-align: center;
        }
        .ctab__actions {
          justify-content: center;
        }
      }
    `,
  ],
})
export class CtaBannerComponent {
  @Input() title = 'Ready to transform your business?';
  @Input() subtitle = 'Book a free 30-minute discovery call. No pitch deck. Just real answers.';
  @Input() primaryLabel = 'Get in touch';
  @Input() primaryLink: string | string[] = '/contact';
  @Input() secondaryLabel = 'See services';
  @Input() secondaryLink: string | string[] | null = '/services';
}
