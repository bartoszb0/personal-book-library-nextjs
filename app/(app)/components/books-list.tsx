import { Tables } from "@/lib/types/supabase";
import { getBooks } from "@/services/books";
import BookCard from "./book-card";

type Book = Tables<"books">;

export default async function BooksList({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const allBooks: Book[] = await getBooks();

  const filteredBooks =
    !status || status === "all"
      ? allBooks
      : allBooks.filter((b) => b.status === status);

  return (
    <div className="mt-4">
      {filteredBooks.length <= 0 ? (
        <h1>No books found</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      )}
    </div>
  );
}
