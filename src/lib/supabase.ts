import { createClient } from '@supabase/supabase-js';
import { nanoid } from 'nanoid';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Get or create a unique device ID for voting
export const getDeviceId = () => {
  let deviceId = localStorage.getItem('device_id')
  if (!deviceId) {
    deviceId = nanoid()
    localStorage.setItem('device_id', deviceId)
  }
  return deviceId
}
