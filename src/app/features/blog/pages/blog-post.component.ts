import { Component, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIcon } from '@angular/material/icon';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { CtaBannerComponent } from '../../../shared/components/cta-banner/cta-banner.component';
import { BLOG_POSTS, findPost } from '../../../core/data/blog.data';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink, DatePipe, MatIcon, ScrollRevealDirective, CtaBannerComponent],
  template: `
    @if (post(); as p) {
      <article class="article">
        <header class="article__header" [style.background-image]="'url(' + p.coverImage + ')'">
          <div class="article__overlay"></div>
          <div class="container article__head">
            <a routerLink="/blog" class="article__back">← All posts</a>
            <span class="article__category">{{ p.category }}</span>
            <h1>{{ p.title }}</h1>
            <div class="article__meta">
              <img [src]="p.author.avatar" [alt]="p.author.name" />
              <div>
                <span class="article__author">{{ p.author.name }}</span>
                <span class="article__byline">
                  {{ p.author.role }} · {{ p.publishedAt | date: 'longDate' }} ·
                  {{ p.readTimeMinutes }} min read
                </span>
              </div>
            </div>
          </div>
        </header>

        <section class="section">
          <div class="container article__body">
            <div class="prose" [innerHTML]="p.content"></div>

            <footer class="article__footer">
              <div class="tags">
                @for (t of p.tags; track t) {
                  <span class="tag">{{ t }}</span>
                }
              </div>
              <div class="share">
                <span>Share</span>
                <a [href]="linkedinShare(p.slug)" target="_blank" rel="noopener" aria-label="LinkedIn">
                  <mat-icon>share</mat-icon>
                </a>
                <a [href]="twitterShare(p.title, p.slug)" target="_blank" rel="noopener" aria-label="Twitter">
                  <mat-icon>alternate_email</mat-icon>
                </a>
              </div>
            </footer>
          </div>
        </section>

        <section class="section section--alt">
          <div class="container">
            <header class="section__header" appScrollReveal>
              <span class="section__eyebrow">Keep reading</span>
              <h2 class="section__title">Related posts</h2>
            </header>
            <div class="related">
              @for (r of related(); track r.slug) {
                <a class="related__card" [routerLink]="['/blog', r.slug]" appScrollReveal>
                  <img [src]="r.coverImage" [alt]="r.title" loading="lazy" />
                  <div>
                    <span class="related__category">{{ r.category }}</span>
                    <h4>{{ r.title }}</h4>
                  </div>
                </a>
              }
            </div>
          </div>
        </section>

        <app-cta-banner
          title="Need this kind of work shipped?"
          subtitle="The same engineers who write here also build for our clients. Tell us what you're working on."
          primaryLabel="Start a conversation"
        />
      </article>
    } @else {
      <section class="section container">
        <h1>Post not found</h1>
        <p><a routerLink="/blog">Browse all posts</a>.</p>
      </section>
    }
  `,
  styles: [
    `
      .article__header {
        background-size: cover;
        background-position: center;
        padding: var(--space-24) 0 var(--space-16);
        position: relative;
        color: white;
      }
      .article__overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.92) 100%);
      }
      .article__head {
        position: relative;
        z-index: 1;
        max-width: 820px;
      }
      .article__back {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        margin-bottom: 1rem;
        display: inline-block;
      }
      .article__back:hover {
        color: white;
      }
      .article__category {
        display: inline-block;
        background: rgba(168, 85, 247, 0.25);
        color: white;
        padding: 0.3rem 0.85rem;
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
      .article__head h1 {
        color: white;
        font-size: clamp(2rem, 5vw, 3rem);
        margin: 0 0 2rem;
      }
      .article__meta {
        display: flex;
        align-items: center;
        gap: 0.85rem;
      }
      .article__meta img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid white;
      }
      .article__author {
        display: block;
        color: white;
        font-weight: 600;
      }
      .article__byline {
        display: block;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.88rem;
      }
      .article__body {
        max-width: 740px;
      }
      .prose {
        font-size: 1.1rem;
        line-height: 1.75;
        color: var(--color-dark);
      }
      .prose ::ng-deep h2 {
        font-size: 1.5rem;
        margin: 2rem 0 1rem;
        color: var(--color-dark);
      }
      .prose ::ng-deep p {
        margin-bottom: 1.25rem;
        color: var(--color-dark);
      }
      .prose ::ng-deep ul {
        padding-left: 1.5rem;
        margin-bottom: 1.25rem;
      }
      .prose ::ng-deep li {
        margin-bottom: 0.4rem;
      }
      .article__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid var(--color-gray-light);
      }
      .tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .tag {
        font-family: var(--font-mono);
        font-size: 0.78rem;
        padding: 0.3rem 0.7rem;
        background: var(--color-gray-bg);
        border: 1px solid var(--color-gray-light);
        border-radius: 6px;
      }
      .share {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--color-gray);
        font-size: 0.9rem;
      }
      .share a {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--color-gray-bg);
        color: var(--color-dark);
        transition: all 200ms ease;
      }
      .share a:hover {
        background: var(--gradient-primary);
        color: white;
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
        overflow: hidden;
        text-decoration: none;
        color: inherit;
        transition: all 300ms ease;
      }
      .related__card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
        color: inherit;
      }
      .related__card img {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .related__card > div {
        padding: 1.25rem;
      }
      .related__category {
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--color-accent);
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      .related__card h4 {
        margin: 0.4rem 0 0;
        font-size: 1.05rem;
        line-height: 1.4;
      }
    `,
  ],
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  private slugMap = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  readonly post = computed(() => {
    const slug = this.slugMap().get('slug') ?? '';
    return findPost(slug);
  });

  readonly related = computed(() => {
    const current = this.post();
    if (!current) return [];
    return BLOG_POSTS.filter((p) => p.slug !== current.slug).slice(0, 3);
  });

  ngOnInit(): void {
    const p = this.post();
    if (!p) return;
    const url = `${environment.siteUrl}/blog/${p.slug}`;
    this.seo.update({
      title: p.title,
      description: p.excerpt,
      image: p.coverImage,
      url,
      type: 'article',
    });
    this.seo.injectStructuredData(
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        author: { '@type': 'Person', name: p.author.name },
        datePublished: p.publishedAt,
        image: p.coverImage,
        mainEntityOfPage: url,
      },
      'blog-post-jsonld',
    );
  }

  linkedinShare(slug: string): string {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      `${environment.siteUrl}/blog/${slug}`,
    )}`;
  }

  twitterShare(title: string, slug: string): string {
    const url = `${environment.siteUrl}/blog/${slug}`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  }
}
