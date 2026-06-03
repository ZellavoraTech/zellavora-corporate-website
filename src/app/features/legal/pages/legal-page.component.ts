import { Component, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';
import { LEGAL_PAGES, LegalKey } from '../legal.data';

@Component({
  selector: 'app-legal-page',
  standalone: true,
  template: `
    @if (page(); as p) {
      <section class="page-header">
        <div class="container">
          <span class="section__eyebrow">{{ p.eyebrow }}</span>
          <h1>{{ p.title }}</h1>
          <p class="lead">Last updated: {{ p.updated }}</p>
        </div>
      </section>

      <section class="section">
        <div class="container legal">
          @for (section of p.sections; track section.heading) {
            <article>
              <h2>{{ section.heading }}</h2>
              @for (para of section.paragraphs; track $index) {
                <p>{{ para }}</p>
              }
            </article>
          }
        </div>
      </section>
    }
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
        color: var(--color-gray);
      }
      .legal {
        max-width: 760px;
      }
      .legal article {
        margin-bottom: 2.5rem;
      }
      .legal h2 {
        font-size: 1.4rem;
        margin-bottom: 0.75rem;
      }
      .legal p {
        margin-bottom: 1rem;
        line-height: 1.75;
      }
    `,
  ],
})
export class LegalPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  private data = toSignal(this.route.data, { initialValue: this.route.snapshot.data });
  readonly page = computed(() => {
    const key = this.data()['legalKey'] as LegalKey | undefined;
    return key ? LEGAL_PAGES[key] : undefined;
  });

  ngOnInit(): void {
    const p = this.page();
    const key = this.data()['legalKey'];
    if (p && key) {
      this.seo.update({
        title: p.title,
        description: `${p.title} for Zellavora — ${p.eyebrow}.`,
        url: `${environment.siteUrl}/${key}`,
      });
    }
  }
}
