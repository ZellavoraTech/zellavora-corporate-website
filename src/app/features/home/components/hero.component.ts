import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero__bg" aria-hidden="true">
        <div class="hero__orb hero__orb--1"></div>
        <div class="hero__orb hero__orb--2"></div>
        <div class="hero__grid"></div>
      </div>
      <div class="container hero__inner">
        <span class="hero__eyebrow">Remote-first · Chennai, India</span>
        <h1 class="hero__title">
          Transforming Technology,<br />
          <span class="text-gradient">Delivering Excellence.</span>
        </h1>
        <p class="hero__subtitle">
          A distributed studio of senior engineers shipping cloud, security, custom software,
          and AI for founders and enterprise teams — wherever you are in the world.
        </p>
        <div class="hero__cta">
          <a routerLink="/contact" class="btn btn--primary">
            Get Started
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a routerLink="/services" class="btn btn--secondary">Explore services</a>
        </div>
        <div class="hero__trust">
          <span class="hero__trust-label">Trusted by teams at</span>
          <div class="hero__trust-logos">
            <span>Acme&nbsp;Corp</span>
            <span>Globex</span>
            <span>Initech</span>
            <span>Vandelay</span>
            <span>Stark&nbsp;Industries</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        position: relative;
        min-height: calc(100vh - var(--navbar-height));
        display: flex;
        align-items: center;
        background: var(--gradient-dark);
        color: white;
        overflow: hidden;
        padding: var(--space-16) 0;
      }
      .hero__bg {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
      }
      .hero__orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.45;
        animation: orbFloat 18s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        will-change: transform;
      }
      .hero__orb--1 {
        width: 480px;
        height: 480px;
        background: #3b82f6;
        top: -10%;
        left: -5%;
      }
      .hero__orb--2 {
        width: 520px;
        height: 520px;
        background: #a855f7;
        bottom: -15%;
        right: -8%;
        animation-delay: -7s;
      }
      .hero__grid {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
        background-size: 56px 56px;
        mask-image: radial-gradient(ellipse at center, black 0%, transparent 75%);
        -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 75%);
      }
      .hero__inner {
        position: relative;
        z-index: 2;
        text-align: center;
        max-width: 920px;
        animation: fadeUp 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
      }
      .hero__inner > * {
        animation: fadeUp 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
      }
      .hero__eyebrow {
        animation-delay: 0ms;
      }
      .hero__title {
        animation-delay: 80ms;
      }
      .hero__subtitle {
        animation-delay: 160ms;
      }
      .hero__cta {
        animation-delay: 240ms;
      }
      .hero__trust {
        animation-delay: 320ms;
      }
      .hero__eyebrow {
        display: inline-block;
        font-family: var(--font-mono);
        font-size: 0.85rem;
        letter-spacing: 0.15em;
        color: rgba(255, 255, 255, 0.7);
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
        padding: 0.4rem 1rem;
        border-radius: 999px;
        margin-bottom: 1.5rem;
      }
      .hero__title {
        font-family: var(--font-display);
        font-size: clamp(2.5rem, 7vw, 4.5rem);
        font-weight: 800;
        line-height: 1.05;
        color: white;
        margin: 0 0 1.5rem;
        letter-spacing: -0.02em;
      }
      .hero__subtitle {
        font-size: clamp(1.05rem, 1.5vw, 1.25rem);
        color: rgba(255, 255, 255, 0.78);
        max-width: 680px;
        margin: 0 auto 2.5rem;
      }
      .hero__cta {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 4rem;
      }
      .hero__trust {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
      .hero__trust-label {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.5);
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .hero__trust-logos {
        display: flex;
        gap: 2.5rem;
        flex-wrap: wrap;
        justify-content: center;
        font-family: var(--font-display);
        font-weight: 700;
        color: rgba(255, 255, 255, 0.55);
        font-size: 1rem;
      }
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes orbFloat {
        0%, 100% {
          transform: translate(0, 0) scale(1);
        }
        33% {
          transform: translate(40px, -30px) scale(1.08);
        }
        66% {
          transform: translate(-30px, 20px) scale(0.96);
        }
      }
      @media (max-width: 600px) {
        .hero__trust-logos {
          gap: 1.25rem;
          font-size: 0.9rem;
        }
      }
    `,
  ],
})
export class HeroComponent {}
