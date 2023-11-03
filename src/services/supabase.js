import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://gnmfxqsstgrqowdtpcxo.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdubWZ4cXNzdGdycW93ZHRwY3hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNzExNDYsImV4cCI6MjAwNzg0NzE0Nn0.E_SewT0ND18_falwHRUA-il4QDviIRc46uYv_ghQ45Q';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
