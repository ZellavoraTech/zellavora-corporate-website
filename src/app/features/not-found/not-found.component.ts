import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="nf">
      <div class="container">
        <p class="nf__code text-gradient">404</p>
        <h1>Page not found</h1>
        <p class="nf__text">The page you're looking for doesn't exist or has been moved.</p>
        <a routerLink="/" class="btn btn--primary">Back to home</a>
      </div>
    </section>
  `,
  styles: [
    `
      .nf {
        padding: var(--space-24) 0;
        text-align: center;
      }
      .nf__code {
        font-family: var(--font-display);
        font-size: clamp(5rem, 18vw, 10rem);
        font-weight: 800;
        line-height: 1;
        margin: 0 0 1rem;
      }
      .nf__text {
        max-width: 480px;
        margin: 0 auto 2rem;
      }
    `,
  ],
})
export class NotFoundComponent implements OnInit {
  private seo = inject(SeoService);
  ngOnInit() {
    this.seo.update({ title: '404 — Page Not Found' });
  }
}
