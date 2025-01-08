import { AccommodationStatus } from './enums';

export interface ApprovedGuest {
  id: string;
  email: string;
  full_name: string;
  additional_guests_allowed: number;
  accommodation_status: AccommodationStatus;
  created_at: string;
  updated_at: string;
}

export interface RsvpResponse {
  id: string;
  approved_guest_id: string;
  phone: string;
  dietary_requirements: string | null;
  created_at: string;
  updated_at: string;
}

export interface AdditionalGuest {
  id: string;
  rsvp_response_id: string;
  full_name: string;
  phone: string;
  dietary_requirements: string | null;
  accommodation_status: AccommodationStatus;
  created_at: string;
  updated_at: string;
}