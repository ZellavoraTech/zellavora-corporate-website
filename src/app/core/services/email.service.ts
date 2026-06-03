import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { ContactFormPayload } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private initialized = false;

  private ensureInit(): void {
    if (this.initialized) return;
    const { publicKey } = environment.emailjs;
    if (publicKey && publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
      emailjs.init({ publicKey });
    }
    this.initialized = true;
  }

  sendContactForm(payload: ContactFormPayload): Observable<unknown> {
    this.ensureInit();
    const { serviceId, templateId, publicKey } = environment.emailjs;

    if (
      publicKey === 'YOUR_EMAILJS_PUBLIC_KEY' ||
      serviceId === 'YOUR_EMAILJS_SERVICE_ID' ||
      templateId === 'YOUR_EMAILJS_TEMPLATE_ID'
    ) {
      return from(
        new Promise((resolve) => {
          setTimeout(() => {
            console.info('[EmailService] EmailJS keys not configured — simulating success', payload);
            resolve({ status: 200, text: 'OK (simulated)' });
          }, 800);
        }),
      );
    }

    const templateParams = {
      from_name: payload.name,
      from_email: payload.email,
      from_phone: payload.phone || 'Not provided',
      company: payload.company || 'Not provided',
      service_interest: payload.service,
      message: payload.message,
      to_email: environment.contact.email,
      reply_to: payload.email,
    };

    return from(emailjs.send(serviceId, templateId, templateParams));
  }
}
