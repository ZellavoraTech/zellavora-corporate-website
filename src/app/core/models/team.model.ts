export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  linkedin?: string;
  expertise: string[];
}

export interface CompanyStat {
  label: string;
  value: number;
  suffix?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
