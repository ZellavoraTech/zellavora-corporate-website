import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private loaded = false;

  init(): void {
    if (this.loaded || typeof document === 'undefined') return;
    const id = environment.analytics.measurementId;
    if (!id || id === 'G-XXXXXXXXXX') return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', id, { anonymize_ip: true });
    this.loaded = true;
  }

  trackPage(url: string): void {
    if (typeof window === 'undefined' || !window.gtag) return;
    window.gtag('event', 'page_view', { page_path: url });
  }

  trackEvent(name: string, params: Record<string, unknown> = {}): void {
    if (typeof window === 'undefined' || !window.gtag) return;
    window.gtag('event', name, params);
  }
}
