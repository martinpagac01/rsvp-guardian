import { AdditionalGuest, ApprovedGuest, RsvpResponse } from './tables'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      additional_guests: {
        Row: AdditionalGuest
        Insert: Omit<AdditionalGuest, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<AdditionalGuest, 'id' | 'created_at' | 'updated_at'>>
      }
      approved_guests: {
        Row: ApprovedGuest
        Insert: Omit<ApprovedGuest, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<ApprovedGuest, 'id' | 'created_at' | 'updated_at'>>
      }
      rsvp_responses: {
        Row: RsvpResponse
        Insert: Omit<RsvpResponse, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<RsvpResponse, 'id' | 'created_at' | 'updated_at'>>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: {
      accommodation_status: AccommodationStatus
    }
    CompositeTypes: Record<string, never>
  }
}