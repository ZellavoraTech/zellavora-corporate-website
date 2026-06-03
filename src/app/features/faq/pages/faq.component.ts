import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgClass } from '@angular/common';
import { CtaBannerComponent } from '../../../shared/components/cta-banner/cta-banner.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { FAQS } from '../../../core/data/faq.data';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgClass, MatExpansionModule, CtaBannerComponent, ScrollRevealDirective],
  template: `
    <section class="page-header">
      <div class="container">
        <span class="section__eyebrow">FAQ</span>
        <h1>Answers to questions we hear often</h1>
        <p class="lead">
          If you don't see your question here, ask us directly — we usually reply within a few hours.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container faq-wrap">
        <nav class="categories" appScrollReveal>
          @for (cat of categories; track cat) {
            <button
              type="button"
              (click)="selectedCategory.set(cat)"
              [ngClass]="{ 'is-active': selectedCategory() === cat }"
            >
              {{ cat }}
            </button>
          }
        </nav>

        <div class="faq-list">
          <mat-accordion multi>
            @for (item of filtered(); track item.question) {
              <mat-expansion-panel appScrollReveal>
                <mat-expansion-panel-header>
                  <mat-panel-title>{{ item.question }}</mat-panel-title>
                </mat-expansion-panel-header>
                <p>{{ item.answer }}</p>
              </mat-expansion-panel>
            }
          </mat-accordion>
        </div>
      </div>
    </section>

    <app-cta-banner
      title="Still have questions?"
      subtitle="Talk to a human. No forms, no obligation — just answers."
      primaryLabel="Contact us"
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
        max-width: 600px;
        margin: 0 auto;
        font-size: 1.1rem;
        color: var(--color-gray);
      }
      .faq-wrap {
        max-width: 860px;
      }
      .categories {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 2rem;
        justify-content: center;
      }
      .categories button {
        padding: 0.5rem 1rem;
        border-radius: 999px;
        border: 1px solid var(--color-gray-light);
        background: white;
        color: var(--color-gray);
        font-weight: 500;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 200ms ease;
      }
      .categories button:hover {
        border-color: var(--color-accent);
        color: var(--color-accent);
      }
      .categories button.is-active {
        background: var(--gradient-primary);
        color: white;
        border-color: transparent;
      }
      .faq-list mat-expansion-panel {
        margin-bottom: 0.75rem;
        border-radius: var(--radius-md) !important;
        border: 1px solid var(--color-gray-light);
        box-shadow: none !important;
      }
    `,
  ],
})
export class FaqComponent implements OnInit {
  private seo = inject(SeoService);

  readonly categories = ['All', ...new Set(FAQS.map((f) => f.category!))];
  readonly selectedCategory = signal<string>('All');

  readonly filtered = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') return FAQS;
    return FAQS.filter((f) => f.category === cat);
  });

  ngOnInit(): void {
    this.seo.update({
      title: 'FAQ',
      description: 'Frequently asked questions about Zellavora services, pricing, and support.',
      url: `${environment.siteUrl}/faq`,
    });
    this.seo.injectStructuredData(
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      'faq-jsonld',
    );
  }
}
