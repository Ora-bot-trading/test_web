export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      legal_acceptance_evidence: {
        Row: {
          created_at: string
          evidence_json: Json
          financial_risk_disclaimer_accepted: boolean
          fund_origin_declaration_accepted: boolean
          id: string
          language: string
          legal_version_hash: string
          privacy_policy_accepted: boolean
          timestamp_utc: string
          updated_at: string
          user_email: string
          user_id: string
        }
        Insert: {
          created_at?: string
          evidence_json: Json
          financial_risk_disclaimer_accepted?: boolean
          fund_origin_declaration_accepted?: boolean
          id?: string
          language: string
          legal_version_hash: string
          privacy_policy_accepted?: boolean
          timestamp_utc?: string
          updated_at?: string
          user_email: string
          user_id: string
        }
        Update: {
          created_at?: string
          evidence_json?: Json
          financial_risk_disclaimer_accepted?: boolean
          fund_origin_declaration_accepted?: boolean
          id?: string
          language?: string
          legal_version_hash?: string
          privacy_policy_accepted?: boolean
          timestamp_utc?: string
          updated_at?: string
          user_email?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          provider: string | null
          provider_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          provider?: string | null
          provider_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          provider?: string | null
          provider_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      wallet_sessions: {
        Row: {
          chain_id: string
          created_at: string
          id: string
          is_active: boolean
          last_activity_at: string | null
          session_topic: string
          updated_at: string
          user_id: string | null
          wallet_address: string
          wallet_metadata: Json
        }
        Insert: {
          chain_id: string
          created_at?: string
          id?: string
          is_active?: boolean
          last_activity_at?: string | null
          session_topic: string
          updated_at?: string
          user_id?: string | null
          wallet_address: string
          wallet_metadata?: Json
        }
        Update: {
          chain_id?: string
          created_at?: string
          id?: string
          is_active?: boolean
          last_activity_at?: string | null
          session_topic?: string
          updated_at?: string
          user_id?: string | null
          wallet_address?: string
          wallet_metadata?: Json
        }
        Relationships: []
      }
      wallet_transactions: {
        Row: {
          amount: number | null
          block_number: number | null
          chain_id: string
          created_at: string
          gas_price: number | null
          gas_used: number | null
          id: string
          metadata: Json
          status: string
          token_address: string | null
          token_symbol: string | null
          transaction_hash: string
          transaction_type: string
          updated_at: string
          user_id: string | null
          wallet_session_id: string | null
        }
        Insert: {
          amount?: number | null
          block_number?: number | null
          chain_id: string
          created_at?: string
          gas_price?: number | null
          gas_used?: number | null
          id?: string
          metadata?: Json
          status?: string
          token_address?: string | null
          token_symbol?: string | null
          transaction_hash: string
          transaction_type: string
          updated_at?: string
          user_id?: string | null
          wallet_session_id?: string | null
        }
        Update: {
          amount?: number | null
          block_number?: number | null
          chain_id?: string
          created_at?: string
          gas_price?: number | null
          gas_used?: number | null
          id?: string
          metadata?: Json
          status?: string
          token_address?: string | null
          token_symbol?: string | null
          transaction_hash?: string
          transaction_type?: string
          updated_at?: string
          user_id?: string | null
          wallet_session_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallet_transactions_wallet_session_id_fkey"
            columns: ["wallet_session_id"]
            isOneToOne: false
            referencedRelation: "wallet_sessions"
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
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
