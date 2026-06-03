import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceCardComponent } from '../../../shared/components/service-card/service-card.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { SERVICES } from '../../../core/data/services.data';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [RouterLink, ServiceCardComponent, ScrollRevealDirective],
  template: `
    <section class="section">
      <div class="container">
        <header class="section__header" appScrollReveal>
          <span class="section__eyebrow">What we do</span>
          <h2 class="section__title">Services that move your business forward</h2>
          <p class="section__subtitle">
            From cloud architecture to AI products, we cover the full stack of modern IT delivery.
          </p>
        </header>

        <div class="grid">
          @for (svc of services; track svc.slug; let i = $index) {
            <div [appScrollReveal]="i">
              <app-service-card [service]="svc" />
            </div>
          }
        </div>

        <div class="overview__cta" appScrollReveal>
          <a routerLink="/services" class="btn btn--outline">View all services</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
      }
      .overview__cta {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class ServicesOverviewComponent {
  readonly services = SERVICES.slice(0, 4);
}
