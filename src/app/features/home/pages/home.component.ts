import { Component, OnInit, inject } from '@angular/core';
import { HeroComponent } from '../components/hero.component';
import { ServicesOverviewComponent } from '../components/services-overview.component';
import { WhyChooseUsComponent } from '../components/why-choose-us.component';
import { CaseStudiesComponent } from '../components/case-studies.component';
import { TechStackComponent } from '../components/tech-stack.component';
import { HowWeWorkComponent } from '../components/how-we-work.component';
import { CtaBannerComponent } from '../../../shared/components/cta-banner/cta-banner.component';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';
import { TechStack } from '../../../layout/tech-stack/tech-stack';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesOverviewComponent,
    WhyChooseUsComponent,
    CaseStudiesComponent,
    // TechStackComponent,
    HowWeWorkComponent,
    CtaBannerComponent,
    TechStack
  ],
  template: `
    <app-hero />
    <app-tech-stack />
    <app-services-overview />
    <app-why-choose-us />
    <app-how-we-work />
    <app-case-studies />
    <!-- <app-tech-stack /> -->
    <app-cta-banner />
  `,
})
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Zellavora — IT Services & Consulting',
      description:
        'Cloud, cybersecurity, custom software, and AI solutions delivered by senior engineers. Trusted IT consulting for enterprises, SMEs, and startups.',
      url: environment.siteUrl,
    });
    this.seo.injectStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zellavora',
      url: environment.siteUrl,
      logo: `${environment.siteUrl}/assets/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        email: environment.contact.email,
        telephone: environment.contact.phone,
        contactType: 'customer service',
      },
      sameAs: [environment.social.linkedin, environment.social.twitter, environment.social.github],
    });
  }
}
