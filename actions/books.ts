"use server";

import { bookFormSchema, NewBookForm } from "@/lib/schemas/book";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function createNewBook(data: NewBookForm) {
  // Validate once again
  const validatedFields = bookFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid form data",
    };
  }

  try {
    const supabase = await createClient();

    const { error } = await supabase.from("books").insert({
      title: validatedFields.data.title,
      author: validatedFields.data.author,
      status: validatedFields.data.status,
      rating: validatedFields.data.rating ?? null,
    });

    if (error) {
      console.error("Supabase Error:", error);
      return { success: false, error: error.message };
    }

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return { success: false, error: errorMessage };
  }
}

export async function deleteBook(id: string) {
  try {
    const supabase = await createClient();

    const { error } = await supabase.from("books").delete().eq("id", id);

    if (error) {
      console.error("Supabase Error:", error);
      return { success: false, error: error.message };
    }

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return { success: false, error: errorMessage };
  }
}
