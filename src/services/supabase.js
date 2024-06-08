import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qmjcyqepcsoxttoxfujh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtamN5cWVwY3NveHR0b3hmdWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2MzI0MDUsImV4cCI6MjAzMzIwODQwNX0.VKsfL00lZ879gOwrCeH8nM4Hu_pDOGKJLBrb5P82zsI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
