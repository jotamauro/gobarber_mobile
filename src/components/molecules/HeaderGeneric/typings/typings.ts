export interface AvailabilityItem {
  hour: number;
  available: boolean;
  hourFormatted: string;
}

export interface SectionProps {
  schedule: AvailabilityItem[];
  title: string;
}

export interface HourProps {
  available: boolean;
}
