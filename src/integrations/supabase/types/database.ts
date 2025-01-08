import { AccommodationStatus } from './enums';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      additional_guests: {
        Row: {
          id: string;
          rsvp_response_id: string;
          full_name: string;
          phone: string;
          dietary_requirements: string | null;
          accommodation_status: AccommodationStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['additional_guests']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Database['public']['Tables']['additional_guests']['Row'], 'id' | 'created_at' | 'updated_at'>>;
      };
      approved_guests: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          additional_guests_allowed: number;
          accommodation_status: AccommodationStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['approved_guests']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Database['public']['Tables']['approved_guests']['Row'], 'id' | 'created_at' | 'updated_at'>>;
      };
      rsvp_responses: {
        Row: {
          id: string;
          approved_guest_id: string;
          phone: string;
          dietary_requirements: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['rsvp_responses']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Database['public']['Tables']['rsvp_responses']['Row'], 'id' | 'created_at' | 'updated_at'>>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      accommodation_status: AccommodationStatus;
    };
    CompositeTypes: Record<string, never>;
  };
}