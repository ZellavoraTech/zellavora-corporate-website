import { Component, OnInit, inject } from '@angular/core';
import { ServiceCardComponent } from '../../../shared/components/service-card/service-card.component';
import { CtaBannerComponent } from '../../../shared/components/cta-banner/cta-banner.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { SERVICES } from '../../../core/data/services.data';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [ServiceCardComponent, CtaBannerComponent, ScrollRevealDirective],
  template: `
    <section class="page-header">
      <div class="container">
        <span class="section__eyebrow">Services</span>
        <h1>Production-grade IT, delivered end-to-end</h1>
        <p class="lead">
          Six practice areas, one delivery standard. Pick the engagement that fits your team.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid">
          @for (svc of services; track svc.slug; let i = $index) {
            <div [appScrollReveal]="i">
              <app-service-card [service]="svc" />
            </div>
          }
        </div>
      </div>
    </section>

    <app-cta-banner
      title="Not sure which service fits?"
      subtitle="Book a free 30-minute scoping call and we'll point you in the right direction."
      primaryLabel="Schedule a call"
      [secondaryLink]="null"
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
        max-width: 640px;
        margin: 0 auto;
        font-size: 1.125rem;
        color: var(--color-gray);
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }
    `,
  ],
})
export class ServicesListComponent implements OnInit {
  readonly services = SERVICES;
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Services',
      description:
        'Cloud migration, custom software, mobile apps, AI/ML, cybersecurity, and DevOps. End-to-end IT services delivered by senior engineers.',
      url: `${environment.siteUrl}/services`,
    });
  }
}
