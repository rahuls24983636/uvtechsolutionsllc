export type RegistrationStatus = "Open" | "Coming Soon" | "Sold Out";

export type CommunityEvent = {
  slug: string;
  title: string;
  dateTime: string;
  venue: string;
  description: string;
  status: RegistrationStatus;
  image: string;
  accent: string;
};

export type Registration = {
  fullName: string;
  email: string;
  phone: string;
  adults: number;
  kids: number;
  eventSlug: string;
  foodPreference: string;
  notes?: string;
};
