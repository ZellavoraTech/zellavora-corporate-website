import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input({ alias: 'appCountUp', required: true }) target!: number;
  @Input() durationMs = 1600;
  @Input() suffix = '';

  private host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private started = false;

  ngOnInit(): void {
    this.host.nativeElement.textContent = `0${this.suffix}`;
    if (typeof IntersectionObserver === 'undefined') {
      this.run();
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !this.started) {
            this.started = true;
            this.run();
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private run(): void {
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - startTime) / this.durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(this.target * eased);
      this.host.nativeElement.textContent = `${value}${this.suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
