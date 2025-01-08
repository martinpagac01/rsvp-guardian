export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      additional_guests: {
        Row: {
          accommodation_status: Database["public"]["Enums"]["accommodation_status"]
          created_at: string
          dietary_requirements: string | null
          full_name: string
          id: string
          phone: string
          rsvp_response_id: string
          updated_at: string
        }
        Insert: {
          accommodation_status?: Database["public"]["Enums"]["accommodation_status"]
          created_at?: string
          dietary_requirements?: string | null
          full_name: string
          id?: string
          phone: string
          rsvp_response_id: string
          updated_at?: string
        }
        Update: {
          accommodation_status?: Database["public"]["Enums"]["accommodation_status"]
          created_at?: string
          dietary_requirements?: string | null
          full_name?: string
          id?: string
          phone?: string
          rsvp_response_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "additional_guests_rsvp_response_id_fkey"
            columns: ["rsvp_response_id"]
            isOneToOne: false
            referencedRelation: "rsvp_responses"
            referencedColumns: ["id"]
          },
        ]
      }
      approved_guests: {
        Row: {
          accommodation_status: Database["public"]["Enums"]["accommodation_status"]
          additional_guests_allowed: number
          created_at: string
          email: string
          full_name: string
          id: string
          updated_at: string
        }
        Insert: {
          accommodation_status?: Database["public"]["Enums"]["accommodation_status"]
          additional_guests_allowed?: number
          created_at?: string
          email: string
          full_name: string
          id?: string
          updated_at?: string
        }
        Update: {
          accommodation_status?: Database["public"]["Enums"]["accommodation_status"]
          additional_guests_allowed?: number
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      rsvp_responses: {
        Row: {
          approved_guest_id: string
          created_at: string
          dietary_requirements: string | null
          id: string
          phone: string
          updated_at: string
        }
        Insert: {
          approved_guest_id: string
          created_at?: string
          dietary_requirements?: string | null
          id?: string
          phone: string
          updated_at?: string
        }
        Update: {
          approved_guest_id?: string
          created_at?: string
          dietary_requirements?: string | null
          id?: string
          phone?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rsvp_responses_approved_guest_id_fkey"
            columns: ["approved_guest_id"]
            isOneToOne: true
            referencedRelation: "approved_guests"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      accommodation_status: "not_provided" | "provided"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
