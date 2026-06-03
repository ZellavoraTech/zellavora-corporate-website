import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  /** Optional stagger delay in ms, or an index that we multiply by 90ms. */
  @Input('appScrollReveal') input: number | string | '' = '';

  private host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const delay = this.resolveDelay();
    if (delay > 0) {
      this.host.nativeElement.style.setProperty('--reveal-delay', `${delay}ms`);
    }
    if (typeof IntersectionObserver === 'undefined') {
      this.host.nativeElement.classList.add('is-visible');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private resolveDelay(): number {
    if (this.input === '' || this.input == null) return 0;
    const n = Number(this.input);
    if (!Number.isFinite(n)) return 0;
    // Treat 0–20 as stagger index (×90ms), bigger values as absolute ms.
    return n >= 0 && n <= 20 ? Math.round(n * 90) : Math.round(n);
  }
}
