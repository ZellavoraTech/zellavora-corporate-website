export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  technologies: string[];
  timeline: string;
  startingPrice: string;
  process: ServiceProcessStep[];
  faqs: FaqItem[];
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
