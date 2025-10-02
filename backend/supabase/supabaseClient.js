import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dsjhokxpobzvhdqkfqdk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzamhva3hwb2J6dmhkcWtmcWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MjM1NzUsImV4cCI6MjA3NDk5OTU3NX0.1yTbxFx7jAIAvrDe1GhQBhAUzl8r6Iin1L18Ms2mdXA';

export const supabase = createClient(supabaseUrl, supabaseKey);
