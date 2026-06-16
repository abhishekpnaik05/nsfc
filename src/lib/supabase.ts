import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Database {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          phone: string;
          email?: string;
          service: string;
          date: string;
          time: string;
          message?: string;
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          whatsapp_sent: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          phone: string;
          email?: string;
          service: string;
          date: string;
          time: string;
          message?: string;
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          whatsapp_sent?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          phone?: string;
          email?: string;
          service?: string;
          date?: string;
          time?: string;
          message?: string;
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          whatsapp_sent?: boolean;
        };
      };
      customers: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          phone: string;
          email?: string;
          address?: string;
          total_orders: number;
          notes?: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          phone: string;
          email?: string;
          address?: string;
          total_orders?: number;
          notes?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          phone?: string;
          email?: string;
          address?: string;
          total_orders?: number;
          notes?: string;
        };
      };
      portfolio: {
        Row: {
          id: string;
          created_at: string;
          title: string;
          category: string;
          image_url: string;
          description?: string;
          featured: boolean;
          order: number;
        };
        Insert: {
          id?: string;
          created_at?: string;
          title: string;
          category: string;
          image_url: string;
          description?: string;
          featured?: boolean;
          order?: number;
        };
        Update: {
          id?: string;
          created_at?: string;
          title?: string;
          category?: string;
          image_url?: string;
          description?: string;
          featured?: boolean;
          order?: number;
        };
      };
      reviews: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          rating: number;
          text: string;
          image_url?: string;
          approved: boolean;
          date?: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          rating: number;
          text: string;
          image_url?: string;
          approved?: boolean;
          date?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          rating?: number;
          text?: string;
          image_url?: string;
          approved?: boolean;
          date?: string;
        };
      };
      quote_requests: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          phone: string;
          service: string;
          details: string;
          status: 'pending' | 'sent' | 'converted' | 'lost';
          whatsapp_sent: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          phone: string;
          service: string;
          details: string;
          status?: 'pending' | 'sent' | 'converted' | 'lost';
          whatsapp_sent?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          phone?: string;
          service?: string;
          details?: string;
          status?: 'pending' | 'sent' | 'converted' | 'lost';
          whatsapp_sent?: boolean;
        };
      };
    };
  };
}
