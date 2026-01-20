import z from "zod";

export const bookFormSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required.")
    .max(40, "Title must be at most 40 characters."),
  author: z
    .string()
    .min(1, "Author is required.")
    .max(40, "Author must be at most 40 characters."),
  status: z
    .string()
    .min(1, "Status is required.")
    .refine((val) => ["want_to_read", "reading", "finished"].includes(val), {
      message: "Invalid status selected.",
    }),
  rating: z.number("Rating is required").gte(1).lte(5).optional(),
});

export type NewBookForm = z.infer<typeof bookFormSchema>;
