"use server";

import { getRequiredUser } from "@/lib/getRequiredUser";
import { createClient } from "@/lib/supabase/server";

export async function getBooks() {
  const user = await getRequiredUser();
  const supabase = await createClient();

  const { data: books, error } = await supabase
    .from("books")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Fetch error:", error);
    throw new Error(error.message);
  }

  return books;
}
