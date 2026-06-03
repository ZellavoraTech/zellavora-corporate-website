import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { ServiceItem } from '../../../core/models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink, MatIcon],
  template: `
    <a class="card" [routerLink]="['/services', service.slug]">
      <div class="card__icon">
        <mat-icon>{{ service.icon }}</mat-icon>
      </div>
      <h3 class="card__title">{{ service.title }}</h3>
      <p class="card__desc">{{ service.shortDescription }}</p>
      <span class="card__link">
        Learn more
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </a>
  `,
  styles: [
    `
      .card {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        background: white;
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-lg);
        padding: 2rem;
        text-decoration: none;
        color: inherit;
        position: relative;
        overflow: hidden;
        height: 100%;
        will-change: transform;
        transition:
          transform var(--d-base) var(--ease-spring),
          box-shadow var(--d-base) var(--ease-out),
          border-color var(--d-base) var(--ease-out);
      }
      .card::before {
        content: '';
        position: absolute;
        inset: 0 0 auto 0;
        height: 4px;
        background: var(--gradient-primary);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform var(--d-slow) var(--ease-out);
      }
      .card:hover {
        border-color: transparent;
        transform: translateY(-8px);
        box-shadow: var(--shadow-lg);
        color: inherit;
      }
      .card:hover::before {
        transform: scaleX(1);
      }
      .card__icon {
        width: 56px;
        height: 56px;
        border-radius: var(--radius-md);
        background: var(--gradient-soft);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.5rem;
        transition:
          background var(--d-base) var(--ease-out),
          transform var(--d-base) var(--ease-spring);
      }
      .card:hover .card__icon {
        transform: scale(1.06) rotate(-3deg);
      }
      .card:hover .card__icon {
        background: var(--gradient-primary);
      }
      .card__icon mat-icon {
        color: var(--color-accent);
        font-size: 28px;
        width: 28px;
        height: 28px;
        transition: color var(--d-base) var(--ease-out);
      }
      .card:hover .card__icon mat-icon {
        color: white;
      }
      .card__title {
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0;
        color: var(--color-dark);
      }
      .card__desc {
        margin: 0;
        font-size: 0.95rem;
        color: var(--color-gray);
        line-height: 1.55;
        flex: 1;
      }
      .card__link {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        color: var(--color-accent);
        font-weight: 600;
        font-size: 0.92rem;
        margin-top: 0.5rem;
        transition: gap var(--d-base) var(--ease-spring);
      }
      .card:hover .card__link {
        gap: 0.85rem;
      }
    `,
  ],
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
}
