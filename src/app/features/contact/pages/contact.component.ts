import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { EmailService } from '../../../core/services/email.service';
import { SeoService } from '../../../core/services/seo.service';
import { ContactFormPayload, ContactSubmitState } from '../../../core/models/contact.model';
import { SERVICES } from '../../../core/data/services.data';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    ScrollRevealDirective,
  ],
  template: `
    <section class="page-header">
      <div class="container">
        <span class="section__eyebrow">Get in touch</span>
        <h1>Let's talk about what you're building</h1>
        <p class="lead">
          Drop us a line — we respond within one business day. For urgent issues, use the
          WhatsApp button or call us directly.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container layout">
        <div class="card form-card" appScrollReveal>
          <h2>Send us a message</h2>
          <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
            <div class="row">
              <mat-form-field appearance="outline">
                <mat-label>Full name</mat-label>
                <input matInput formControlName="name" autocomplete="name" />
                @if (form.controls.name.touched && form.controls.name.invalid) {
                  <mat-error>Please enter your name (min 2 chars).</mat-error>
                }
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Email address</mat-label>
                <input matInput type="email" formControlName="email" autocomplete="email" />
                @if (form.controls.email.touched && form.controls.email.invalid) {
                  <mat-error>Please enter a valid email.</mat-error>
                }
              </mat-form-field>
            </div>

            <div class="row">
              <mat-form-field appearance="outline">
                <mat-label>Phone (optional)</mat-label>
                <input matInput type="tel" formControlName="phone" autocomplete="tel" />
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Company (optional)</mat-label>
                <input matInput formControlName="company" autocomplete="organization" />
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline">
              <mat-label>Service of interest</mat-label>
              <mat-select formControlName="service">
                @for (s of services; track s.slug) {
                  <mat-option [value]="s.slug">{{ s.title }}</mat-option>
                }
                <mat-option value="other">Something else</mat-option>
              </mat-select>
              @if (form.controls.service.touched && form.controls.service.invalid) {
                <mat-error>Please pick a service.</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>How can we help?</mat-label>
              <textarea
                matInput
                rows="6"
                formControlName="message"
                placeholder="A few sentences about your project, timeline, and goals."
              ></textarea>
              @if (form.controls.message.touched && form.controls.message.invalid) {
                <mat-error>Please share at least 20 characters.</mat-error>
              }
            </mat-form-field>

            <mat-checkbox formControlName="agree" color="primary">
              I agree to the processing of my data per the
              <a routerLink="/privacy">privacy policy</a>.
            </mat-checkbox>

            <button
              type="submit"
              class="btn btn--primary submit"
              [disabled]="form.invalid || state() === 'submitting'"
            >
              @if (state() === 'submitting') {
                <mat-spinner diameter="18" strokeWidth="3" />
                <span>Sending…</span>
              } @else {
                <span>Send message</span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              }
            </button>

            @if (state() === 'success') {
              <div class="alert alert--success" role="status">
                <mat-icon>check_circle</mat-icon>
                <span>Thank you! We'll get back to you within 24–48 hours.</span>
              </div>
            }
            @if (state() === 'error') {
              <div class="alert alert--error" role="alert">
                <mat-icon>error</mat-icon>
                <span>Something went wrong. Please try again or email us directly.</span>
              </div>
            }
          </form>
        </div>

        <aside class="info" appScrollReveal>
          <div class="card">
            <mat-icon>mail</mat-icon>
            <h3>Email</h3>
            <a [href]="'mailto:' + env.contact.email">{{ env.contact.email }}</a>
          </div>
          <div class="card">
            <mat-icon>call</mat-icon>
            <h3>Phone &amp; WhatsApp</h3>
            <a [href]="'tel:' + env.contact.phone">{{ env.contact.phone }}</a>
          </div>
          <div class="card">
            <mat-icon>public</mat-icon>
            <h3>Based in</h3>
            <p>{{ env.contact.city }}, {{ env.contact.region }}</p>
            <span class="card__tag">{{ env.contact.workMode }}</span>
          </div>
          <div class="card">
            <mat-icon>schedule</mat-icon>
            <h3>Working hours</h3>
            <p>{{ env.contact.hours }}</p>
          </div>
        </aside>
      </div>

      <div class="container remote-wrap" appScrollReveal>
        <div class="remote">
          <div class="remote__icon" aria-hidden="true">
            <mat-icon>language</mat-icon>
          </div>
          <div>
            <h3>We're a distributed team, not a doorbell.</h3>
            <p>
              Zellavora is a remote-first startup headquartered out of {{ env.contact.city }}.
              Our engineers work from anywhere — and we partner with founders and teams across
              India, the US, the UK, and Singapore. No office hours, no front desk, just direct
              channels to the people who actually do the work.
            </p>
          </div>
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
      .layout {
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        gap: 2.5rem;
      }
      .card {
        background: white;
        border: 1px solid var(--color-gray-light);
        border-radius: var(--radius-lg);
        padding: 1.5rem;
      }
      .form-card {
        padding: 2.5rem;
      }
      .form-card h2 {
        margin: 0 0 1.5rem;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      mat-form-field {
        width: 100%;
      }
      .submit {
        margin-top: 0.5rem;
        min-width: 200px;
        align-self: flex-start;
      }
      .submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .submit mat-spinner {
        margin-right: 0.5rem;
      }
      .alert {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 1.25rem;
        border-radius: var(--radius-md);
        font-weight: 500;
        margin-top: 0.5rem;
      }
      .alert--success {
        background: #d1fae5;
        color: #065f46;
        border: 1px solid #6ee7b7;
      }
      .alert--error {
        background: #fee2e2;
        color: #991b1b;
        border: 1px solid #fca5a5;
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .info .card {
        padding: 1.25rem 1.5rem;
      }
      .info mat-icon {
        color: var(--color-accent);
        margin-bottom: 0.4rem;
      }
      .info h3 {
        font-size: 0.95rem;
        font-weight: 700;
        margin: 0 0 0.25rem;
        color: var(--color-gray);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .info a,
      .info p {
        margin: 0;
        font-size: 1rem;
        color: var(--color-dark);
        font-weight: 600;
      }
      .info a:hover {
        color: var(--color-accent);
      }
      .card__tag {
        display: inline-block;
        margin-top: 0.5rem;
        font-family: var(--font-mono);
        font-size: 0.72rem;
        letter-spacing: 0.05em;
        padding: 0.25rem 0.6rem;
        border-radius: 999px;
        background: var(--gradient-soft);
        color: var(--color-accent);
      }
      .remote-wrap {
        margin-top: 3rem;
      }
      .remote {
        background: var(--gradient-dark);
        color: white;
        border-radius: var(--radius-xl);
        padding: 2.5rem;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1.75rem;
        align-items: center;
        position: relative;
        overflow: hidden;
      }
      .remote::after {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at 90% 110%, rgba(168, 85, 247, 0.35), transparent 50%),
          radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.25), transparent 50%);
        pointer-events: none;
      }
      .remote > * {
        position: relative;
        z-index: 1;
      }
      .remote__icon {
        width: 64px;
        height: 64px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.18);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .remote__icon mat-icon {
        color: white;
        font-size: 32px;
        width: 32px;
        height: 32px;
      }
      .remote h3 {
        color: white;
        margin: 0 0 0.5rem;
        font-size: 1.25rem;
      }
      .remote p {
        color: rgba(255, 255, 255, 0.78);
        margin: 0;
        font-size: 0.98rem;
        line-height: 1.65;
      }
      @media (max-width: 600px) {
        .remote {
          grid-template-columns: 1fr;
          padding: 2rem 1.5rem;
        }
      }
      @media (max-width: 900px) {
        .layout {
          grid-template-columns: 1fr;
        }
        .row {
          grid-template-columns: 1fr;
        }
        .form-card {
          padding: 1.75rem;
        }
      }
    `,
  ],
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private email = inject(EmailService);
  private seo = inject(SeoService);

  readonly env = environment;
  readonly services = SERVICES;
  readonly state = signal<ContactSubmitState>('idle');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    company: [''],
    service: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(20)]],
    agree: [false, [Validators.requiredTrue]],
  });

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact',
      description: 'Get in touch with Zellavora — book a consultation or send a project brief.',
      url: `${environment.siteUrl}/contact`,
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.state.set('submitting');
    const payload = this.form.getRawValue() as ContactFormPayload & { agree: boolean };
    const { agree: _agree, ...formData } = payload;
    this.email.sendContactForm(formData).subscribe({
      next: () => {
        this.state.set('success');
        this.form.reset({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          agree: false,
        });
        setTimeout(() => this.state.set('idle'), 6000);
      },
      error: () => {
        this.state.set('error');
        setTimeout(() => this.state.set('idle'), 6000);
      },
    });
  }
}
