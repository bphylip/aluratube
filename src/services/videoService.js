import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://elrhpherajkxlwxkuulr.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVscmhwaGVyYWpreGx3eGt1dWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTA0OTcsImV4cCI6MTk4Mzc4NjQ5N30.bqH1QFk_0l1SQb1uVoRcplvBbTsFIFtYU7ucrsf49Kk"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*")
        }
    }
}