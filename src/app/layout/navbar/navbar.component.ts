import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo/logo.component';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, LogoComponent],
  template: `
    <header class="navbar" [ngClass]="{ 'navbar--scrolled': scrolled() }">
      <div class="container navbar__inner">
        <app-logo [size]="36" />

        <!-- Desktop nav -->
        <nav class="navbar__links">
          @for (link of links; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="is-active"
              [routerLinkActiveOptions]="{ exact: link.path === '/' }"
            >{{ link.label }}</a>
          }
          <a routerLink="/contact" class="btn btn--primary navbar__cta">Get Started</a>
        </nav>

        <!-- Hamburger -->
        <button
          class="navbar__toggle"
          type="button"
          [class.is-open]="menuOpen()"
          (click)="toggleMenu()"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- Mobile drawer -->
    <div class="mobile-backdrop" [class.is-open]="menuOpen()" (click)="closeMenu()"></div>

    <nav class="mobile-menu" [class.is-open]="menuOpen()" aria-label="Mobile navigation">
      <!-- Menu header -->
      <div class="mobile-menu__header">
        <app-logo [size]="32" />
        <button class="mobile-menu__close" (click)="closeMenu()" aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <!-- Links -->
      <div class="mobile-menu__links">
        @for (link of links; track link.path; let i = $index) {
          <a
            [routerLink]="link.path"
            routerLinkActive="is-active"
            [routerLinkActiveOptions]="{ exact: link.path === '/' }"
            class="mobile-menu__link"
            [style.--i]="i"
            (click)="closeMenu()"
          >
            <span class="mobile-menu__link-text">{{ link.label }}</span>
            <svg class="mobile-menu__link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        }
      </div>

      <!-- CTA -->
      <div class="mobile-menu__footer">
        <a routerLink="/contact" class="btn btn--primary mobile-menu__cta" (click)="closeMenu()">
          Get Started →
        </a>
        <p class="mobile-menu__tagline">Remote-first IT studio · Chennai</p>
      </div>
    </nav>
  `,
  styles: [
    `
      /* ── Navbar bar ─────────────────────────────────────────── */
      .navbar {
        position: sticky;
        top: 0;
        z-index: 200;
        background: rgba(255, 255, 255, 0.78);
        backdrop-filter: saturate(180%) blur(16px);
        -webkit-backdrop-filter: saturate(180%) blur(16px);
        border-bottom: 1px solid transparent;
        transition:
          background var(--d-base) var(--ease-out),
          border-color var(--d-base) var(--ease-out),
          box-shadow var(--d-base) var(--ease-out);
      }
      .navbar--scrolled {
        background: rgba(255, 255, 255, 0.96);
        border-bottom-color: var(--color-gray-light);
        box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);
      }
      .navbar__inner {
        height: var(--navbar-height);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      /* ── Desktop links ──────────────────────────────────────── */
      .navbar__links {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .navbar__links a {
        color: var(--color-dark);
        font-weight: 500;
        font-size: 0.95rem;
        padding: 0.5rem 0.85rem;
        border-radius: var(--radius-sm);
        text-decoration: none;
        transition: color var(--d-fast) var(--ease-soft);
        position: relative;
      }
      .navbar__links a:not(.btn):hover { color: var(--color-accent); }
      .navbar__links a.is-active:not(.btn) { color: var(--color-accent); }
      .navbar__links a:not(.btn)::after {
        content: '';
        position: absolute;
        left: 0.85rem; right: 0.85rem; bottom: 2px;
        height: 2px;
        background: var(--gradient-primary);
        border-radius: 2px;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform var(--d-base) var(--ease-out);
      }
      .navbar__links a:not(.btn):hover::after,
      .navbar__links a.is-active:not(.btn)::after { transform: scaleX(1); }
      .navbar__cta { margin-left: 0.5rem; padding: 0.6rem 1.3rem; font-size: 0.95rem; }

      /* ── Hamburger button ───────────────────────────────────── */
      .navbar__toggle {
        display: none;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        width: 40px;
        height: 40px;
        padding: 8px;
        background: none;
        border: none;
        cursor: pointer;
        border-radius: var(--radius-sm);
        transition: background var(--d-fast) var(--ease-soft);
      }
      .navbar__toggle:hover { background: rgba(99, 102, 241, 0.08); }
      .navbar__toggle span {
        display: block;
        width: 22px;
        height: 2px;
        background: var(--color-dark);
        border-radius: 2px;
        transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
                    opacity 200ms ease,
                    width 300ms ease;
        transform-origin: center;
      }
      .navbar__toggle.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      .navbar__toggle.is-open span:nth-child(2) { opacity: 0; width: 0; }
      .navbar__toggle.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

      /* ── Backdrop overlay ───────────────────────────────────── */
      .mobile-backdrop {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 299;
        background: rgba(10, 15, 30, 0.55);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        opacity: 0;
        transition: opacity 350ms ease;
      }
      .mobile-backdrop.is-open { opacity: 1; }

      /* ── Mobile drawer ──────────────────────────────────────── */
      .mobile-menu {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(360px, 88vw);
        z-index: 300;
        background: linear-gradient(160deg, #0f172a 0%, #1a1040 55%, #0f172a 100%);
        border-left: 1px solid rgba(139, 92, 246, 0.2);
        box-shadow: -20px 0 60px rgba(0, 0, 0, 0.4);
        flex-direction: column;
        transform: translateX(100%);
        transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1);
        overflow-y: auto;
        overscroll-behavior: contain;
      }
      .mobile-menu.is-open { transform: translateX(0); }

      /* Menu header */
      .mobile-menu__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      }
      .mobile-menu__close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        color: #cbd5e1;
        cursor: pointer;
        transition: background var(--d-fast) ease, color var(--d-fast) ease;
      }
      .mobile-menu__close:hover { background: rgba(139, 92, 246, 0.25); color: #fff; }

      /* Nav links */
      .mobile-menu__links {
        flex: 1;
        padding: 1rem 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
      .mobile-menu__link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.9rem 1rem;
        color: #cbd5e1;
        text-decoration: none;
        font-size: 1.05rem;
        font-weight: 500;
        border-radius: 10px;
        border: 1px solid transparent;
        transition: background 250ms ease, color 250ms ease, border-color 250ms ease,
                    transform 250ms ease;
        /* staggered entrance */
        opacity: 0;
        transform: translateX(20px);
        animation: menuLinkIn 350ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        animation-delay: calc(var(--i, 0) * 55ms + 80ms);
      }
      .mobile-menu.is-open .mobile-menu__link { /* animation only when open */ }
      .mobile-menu__link:hover {
        background: rgba(139, 92, 246, 0.12);
        border-color: rgba(139, 92, 246, 0.25);
        color: #fff;
        transform: translateX(4px);
      }
      .mobile-menu__link.is-active {
        background: rgba(99, 102, 241, 0.15);
        border-color: rgba(99, 102, 241, 0.35);
        color: #a78bfa;
      }
      .mobile-menu__link-arrow {
        opacity: 0;
        transform: translateX(-6px);
        transition: opacity 200ms ease, transform 200ms ease;
        flex-shrink: 0;
        color: #8b5cf6;
      }
      .mobile-menu__link:hover .mobile-menu__link-arrow,
      .mobile-menu__link.is-active .mobile-menu__link-arrow {
        opacity: 1;
        transform: translateX(0);
      }

      /* Footer CTA */
      .mobile-menu__footer {
        padding: 1.25rem 1.5rem 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.07);
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .mobile-menu__cta {
        width: 100%;
        justify-content: center;
        padding: 0.9rem 1.5rem;
        font-size: 1rem;
        border-radius: 10px;
      }
      .mobile-menu__tagline {
        text-align: center;
        font-size: 0.8rem;
        color: rgba(148, 163, 184, 0.6);
        margin: 0;
      }

      @keyframes menuLinkIn {
        to { opacity: 1; transform: translateX(0); }
      }

      /* ── Responsive breakpoint ──────────────────────────────── */
      @media (max-width: 900px) {
        .navbar__toggle { display: flex; }
        .navbar__links { display: none; }
        .mobile-backdrop,
        .mobile-menu { display: flex; }
      }
    `,
  ],
})
export class NavbarComponent {
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly links: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => {
      document.body.style.overflow = v ? '' : 'hidden';
      return !v;
    });
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }
}
