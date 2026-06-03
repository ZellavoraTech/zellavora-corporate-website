export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

export type ContactSubmitState = 'idle' | 'submitting' | 'success' | 'error';
