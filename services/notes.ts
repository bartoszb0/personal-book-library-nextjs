import { getRequiredUser } from "@/lib/getRequiredUser";
import { createClient } from "@/lib/supabase/server";

export async function getNotes(bookId: string) {
  const user = await getRequiredUser();
  const supabase = await createClient();

  const { data: notes, error } = await supabase
    .from("book_notes")
    .select("*")
    .eq("user_id", user.id)
    .eq("book_id", bookId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return notes;
}
