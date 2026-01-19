import { Tables } from "@/lib/types/supabase";

type Book = Tables<"books">;

export default function BookCard({ book }: { book: Book }) {
  const statusColors = {
    want_to_read: "border-l-blue-500",
    reading: "border-l-yellow-500",
    finished: "border-l-green-500",
  };

  return (
    <div
      className={`bg-zinc-800 w-60 h-28 flex flex-col text-left p-4 hover:bg-zinc-700 cursor-pointer border-l-4 transition-colors ${
        statusColors[book.status] || "border-l-zinc-500"
      }`}
    >
      <p className="text-md">{book.title}</p>
      <p className="text-sm text-gray-400">{book.author}</p>

      <div className="mt-2">
        {book.status === "finished" ? (
          book.rating ? (
            <p className="bg-yellow-600 px-2 py-0.5 rounded text-xs w-fit">
              Rating: {book.rating}/5
            </p>
          ) : (
            <p className="text-xs text-blue-400 hover:underline cursor-pointer">
              Rate book now
            </p>
          )
        ) : (
          /* Optional: Show something else for reading/want_to_read */
          <p className="text-xs text-zinc-500 italic">
            {book.status === "reading" ? "In progress..." : "On wishlist"}
          </p>
        )}
      </div>
    </div>
  );
}
