import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <app-logo [size]="36" />
            <p class="footer__tagline">
              Transforming technology, delivering excellence — for enterprises, SMEs, and startups.
            </p>
            <div class="footer__social">
              <a [href]="env.social.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path
                    d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"
                  />
                </svg>
              </a>
              <a [href]="env.social.twitter" target="_blank" rel="noopener" aria-label="Twitter / X">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </a>
              <a [href]="env.social.github" target="_blank" rel="noopener" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path
                    d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 0z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="footer__col">
            <h4>Services</h4>
            <ul>
              <li><a routerLink="/services/cloud-solutions">Cloud Solutions</a></li>
              <li><a routerLink="/services/custom-software">Custom Software</a></li>
              <li><a routerLink="/services/mobile-development">Mobile Development</a></li>
              <li><a routerLink="/services/ai-ml">AI &amp; Machine Learning</a></li>
              <li><a routerLink="/services/cybersecurity">Cybersecurity</a></li>
              <li><a routerLink="/services/devops-infrastructure">DevOps</a></li>
            </ul>
          </div>

          <div class="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a routerLink="/about">About</a></li>
              <li><a routerLink="/blog">Blog</a></li>
              <li><a routerLink="/faq">FAQ</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a [href]="'mailto:' + env.contact.email">{{ env.contact.email }}</a>
              </li>
              <li>
                <a [href]="'tel:' + env.contact.phone">{{ env.contact.phone }}</a>
              </li>
              <li>{{ env.contact.city }}, {{ env.contact.region }}</li>
              <li>{{ env.contact.workMode }}</li>
              <li>{{ env.contact.hours }}</li>
            </ul>
          </div>
        </div>

        <div class="footer__bottom">
          <span>© {{ year }} Zellavora. All rights reserved.</span>
          <div class="footer__legal">
            <a routerLink="/privacy">Privacy</a>
            <a routerLink="/terms">Terms</a>
            <a routerLink="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background: var(--gradient-dark);
        color: rgba(255, 255, 255, 0.85);
        padding: var(--space-16) 0 var(--space-8);
        margin-top: var(--space-24);
        position: relative;
      }
      .footer::before {
        content: '';
        position: absolute;
        inset: 0 0 auto 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent);
      }
      .footer__grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1.2fr;
        gap: 3rem;
        margin-bottom: var(--space-12);
      }
      .footer__brand .logo__wordmark {
        color: white;
        -webkit-text-fill-color: white;
      }
      .footer__tagline {
        margin-top: 1rem;
        color: rgba(255, 255, 255, 0.65);
        max-width: 340px;
        font-size: 0.95rem;
      }
      .footer__social {
        display: flex;
        gap: 0.75rem;
        margin-top: 1.5rem;
      }
      .footer__social a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.08);
        color: white;
        transition: all 200ms ease;
      }
      .footer__social a:hover {
        background: var(--gradient-primary);
        transform: translateY(-2px);
        color: white;
      }
      .footer__col h4 {
        color: white;
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }
      .footer__col ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }
      .footer__col a,
      .footer__col li {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.92rem;
        text-decoration: none;
        transition: color 200ms ease;
      }
      .footer__col a:hover {
        color: white;
      }
      .footer__bottom {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.55);
      }
      .footer__legal {
        display: flex;
        gap: 1.5rem;
      }
      .footer__legal a {
        color: rgba(255, 255, 255, 0.55);
      }
      .footer__legal a:hover {
        color: white;
      }
      @media (max-width: 900px) {
        .footer__grid {
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .footer__brand {
          grid-column: 1 / -1;
        }
      }
      @media (max-width: 560px) {
        .footer__grid {
          grid-template-columns: 1fr;
        }
        .footer__bottom {
          flex-direction: column;
          text-align: center;
        }
      }
    `,
  ],
})
export class FooterComponent {
  readonly env = environment;
  readonly year = new Date().getFullYear();
}
