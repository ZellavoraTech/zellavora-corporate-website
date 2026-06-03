import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-whatsapp-widget',
  standalone: true,
  template: `
    <a
      class="wa"
      [href]="link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span class="wa__pulse" aria-hidden="true"></span>
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.821 11.821 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892h-.005a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.27l.6.953-1.005 3.648 3.748-.978-.364-.592zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01a1.1 1.1 0 0 0-.797.372c-.272.297-1.04 1.016-1.04 2.479s1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"
        />
      </svg>
      <span class="wa__tooltip">Chat on WhatsApp</span>
    </a>
  `,
  styles: [
    `
      .wa {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: #25d366;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 12px 32px rgba(37, 211, 102, 0.42);
        z-index: 9999;
        transition:
          transform var(--d-base) var(--ease-spring),
          box-shadow var(--d-base) var(--ease-out);
      }
      .wa:hover {
        transform: scale(1.1) rotate(-6deg);
        box-shadow: 0 16px 40px rgba(37, 211, 102, 0.55);
        color: white;
      }
      .wa:active {
        transform: scale(0.96);
        transition-duration: 80ms;
      }
      .wa:hover .wa__tooltip {
        opacity: 1;
        transform: translateX(0);
      }
      .wa__pulse {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: #25d366;
        opacity: 0.6;
        animation: wa-pulse 2s infinite ease-out;
        z-index: -1;
      }
      .wa__tooltip {
        position: absolute;
        right: 70px;
        top: 50%;
        transform: translate(8px, -50%);
        background: var(--color-dark);
        color: var(--color-white);
        font-size: 0.85rem;
        font-weight: 500;
        padding: 0.5rem 0.85rem;
        border-radius: 8px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: all 200ms ease;
      }
      .wa__tooltip::after {
        content: '';
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border: 6px solid transparent;
        border-left-color: var(--color-dark);
      }
      @keyframes wa-pulse {
        0% {
          transform: scale(1);
          opacity: 0.6;
        }
        100% {
          transform: scale(1.7);
          opacity: 0;
        }
      }
      @media (max-width: 640px) {
        .wa {
          bottom: 16px;
          right: 16px;
          width: 52px;
          height: 52px;
        }
        .wa__tooltip {
          display: none;
        }
      }
    `,
  ],
})
export class WhatsappWidgetComponent {
  readonly link = `https://wa.me/${environment.contact.whatsapp}?text=${encodeURIComponent(
    "Hello Zellavora! I'm interested in your IT services.",
  )}`;
}
