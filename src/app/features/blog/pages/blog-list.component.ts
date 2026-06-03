import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { BLOG_POSTS } from '../../../core/data/blog.data';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, DatePipe, ScrollRevealDirective],
  template: `
    <section class="page-header">
      <div class="container">
        <span class="section__eyebrow">Insights</span>
        <h1>Field notes from production systems</h1>
        <p class="lead">
          Practical writing on cloud, engineering, security, and AI — drawn from real engagements.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid">
          @for (post of posts; track post.slug; let i = $index) {
            <article class="post" [appScrollReveal]="i">
              <a [routerLink]="['/blog', post.slug]" class="post__media">
                <img [src]="post.coverImage" [alt]="post.title" loading="lazy" />
                <span class="post__category">{{ post.category }}</span>
              </a>
              <div class="post__body">
                <h2 class="post__title">
                  <a [routerLink]="['/blog', post.slug]">{{ post.title }}</a>
                </h2>
                <p class="post__excerpt">{{ post.excerpt }}</p>
                <footer class="post__meta">
                  <span>{{ post.author.name }}</span>
                  <span aria-hidden="true">·</span>
                  <span>{{ post.publishedAt | date: 'mediumDate' }}</span>
                  <span aria-hidden="true">·</span>
                  <span>{{ post.readTimeMinutes }} min read</span>
                </footer>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
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
        font-size: 1.1rem;
        color: var(--color-gray);
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }
      .post {
        background: white;
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-lg);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: all 300ms ease;
      }
      .post:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
        border-color: var(--color-accent);
      }
      .post__media {
        position: relative;
        display: block;
        aspect-ratio: 16 / 9;
        overflow: hidden;
      }
      .post__media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 600ms ease;
      }
      .post:hover .post__media img {
        transform: scale(1.06);
      }
      .post__category {
        position: absolute;
        top: 12px;
        left: 12px;
        background: white;
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--color-accent);
      }
      .post__body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        flex: 1;
      }
      .post__title {
        font-size: 1.2rem;
        line-height: 1.3;
        margin: 0;
      }
      .post__title a {
        color: var(--color-dark);
        text-decoration: none;
      }
      .post__title a:hover {
        color: var(--color-accent);
      }
      .post__excerpt {
        margin: 0;
        font-size: 0.95rem;
        flex: 1;
      }
      .post__meta {
        display: flex;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: var(--color-gray);
        flex-wrap: wrap;
      }
    `,
  ],
})
export class BlogListComponent implements OnInit {
  readonly posts = BLOG_POSTS;
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Blog & Insights',
      description: 'Field notes from production systems — cloud, engineering, security, and AI.',
      url: `${environment.siteUrl}/blog`,
    });
  }
}
