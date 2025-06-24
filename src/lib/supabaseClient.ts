import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pdiexuerqisdsjvgzzpd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkaWV4dWVycWlzZHNqdmd6enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NTMyMjksImV4cCI6MjA2NjMyOTIyOX0.vXKbaSHdv7nn7FEOOVZO0jdqW8IXRP-9QpWHdxilRxs'
export const supabase = createClient(supabaseUrl, supabaseKey)
