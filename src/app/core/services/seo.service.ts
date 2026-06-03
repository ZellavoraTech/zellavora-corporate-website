import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  private readonly defaults: Required<Omit<SeoConfig, 'url' | 'type'>> & {
    type: 'website' | 'article';
  } = {
    title: 'Zellavora — IT Services & Consulting',
    description:
      'Remote-first IT services & consulting startup from Chennai. Cloud, cybersecurity, custom software, and AI solutions delivered by senior engineers.',
    keywords:
      'IT services Chennai, IT consulting India, remote development team, cloud, cybersecurity, software development, AI, DevOps',
    image: `${environment.siteUrl}/assets/og-image.png`,
    type: 'website',
  };

  update(config: SeoConfig = {}): void {
    const merged = { ...this.defaults, ...config };
    const fullTitle =
      config.title && !config.title.includes('Zellavora')
        ? `${config.title} | Zellavora`
        : merged.title;

    this.title.setTitle(fullTitle);

    const tags: { name?: string; property?: string; content: string }[] = [
      { name: 'description', content: merged.description },
      { name: 'keywords', content: merged.keywords },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: merged.description },
      { property: 'og:type', content: merged.type },
      { property: 'og:image', content: merged.image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: merged.description },
      { name: 'twitter:image', content: merged.image },
    ];

    if (config.url) {
      tags.push({ property: 'og:url', content: config.url });
      this.setCanonical(config.url);
    }

    for (const tag of tags) {
      const selector = tag.name ? `name="${tag.name}"` : `property="${tag.property}"`;
      this.meta.updateTag(tag, selector);
    }
  }

  private setCanonical(url: string): void {
    if (typeof document === 'undefined') return;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
  }

  injectStructuredData(data: Record<string, unknown>, id = 'app-jsonld'): void {
    if (typeof document === 'undefined') return;
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }
}
