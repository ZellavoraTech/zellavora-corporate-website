export type LegalKey = 'privacy' | 'terms' | 'cookies';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPage {
  title: string;
  eyebrow: string;
  updated: string;
  sections: LegalSection[];
}

export const LEGAL_PAGES: Record<LegalKey, LegalPage> = {
  privacy: {
    title: 'Privacy Policy',
    eyebrow: 'Legal',
    updated: 'May 2026',
    sections: [
      {
        heading: 'What we collect',
        paragraphs: [
          'We collect information you provide directly — for example, when you submit our contact form, sign up for a newsletter, or correspond with us by email. This typically includes your name, email address, company, and the content of your message.',
          'We also collect limited technical information automatically, including IP address, browser type, device information, and pages visited, through privacy-respecting analytics.',
        ],
      },
      {
        heading: 'How we use it',
        paragraphs: [
          'We use this information to respond to your inquiries, provide and improve our services, comply with our legal obligations, and communicate with you about Zellavora when you have asked us to.',
          'We do not sell your personal information to third parties.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'You may request access to, correction of, or deletion of your personal information at any time by emailing us. We will respond within 30 days.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about this policy? Email privacy@zellavora.com and we will get back to you.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    eyebrow: 'Legal',
    updated: 'May 2026',
    sections: [
      {
        heading: 'Acceptance of terms',
        paragraphs: [
          'By accessing this website or engaging Zellavora for services, you agree to these terms. If you do not agree, please do not use the site.',
        ],
      },
      {
        heading: 'Use of content',
        paragraphs: [
          'All content on this website, including text, graphics, logos, and code samples, is the property of Zellavora unless otherwise noted, and is provided for informational purposes.',
          'You may share links to our content. You may not republish, sell, or reproduce content for commercial purposes without written permission.',
        ],
      },
      {
        heading: 'Service engagements',
        paragraphs: [
          'Service engagements are governed by a separate signed agreement (Statement of Work or Master Services Agreement). Nothing on this website constitutes an offer or binding contract for services.',
        ],
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'The website is provided "as is" without warranties of any kind. To the maximum extent permitted by law, Zellavora is not liable for any damages arising from your use of the website.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    eyebrow: 'Legal',
    updated: 'May 2026',
    sections: [
      {
        heading: 'What cookies we use',
        paragraphs: [
          'We use a small number of cookies and similar technologies to operate the site and understand how visitors use it. We do not use cookies for advertising.',
        ],
      },
      {
        heading: 'Essential cookies',
        paragraphs: [
          'These cookies are required for the site to function — for example, to remember your cookie preferences. They cannot be disabled.',
        ],
      },
      {
        heading: 'Analytics cookies',
        paragraphs: [
          'We use privacy-respecting analytics (Google Analytics with IP anonymization) to understand traffic and improve the site. These cookies can be disabled via your browser settings.',
        ],
      },
      {
        heading: 'Your choices',
        paragraphs: [
          'Most browsers let you refuse cookies or alert you when cookies are being sent. If you disable cookies, some parts of the site may not function correctly.',
        ],
      },
    ],
  },
};
