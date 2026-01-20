import { Tables } from "@/lib/types/supabase";
import { getBookDetails } from "@/services/books";
import RateBookModal from "../../components/rate-book-modal";
import DeleteBookButton from "./delete-btn";
import EditBookButton from "./edit-btn";

type Book = Tables<"books">;

export default async function BookDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book: Book = await getBookDetails(id);

  const statusColors = {
    want_to_read: "border-blue-500 bg-blue-500/10 text-blue-400",
    reading: "border-yellow-500 bg-yellow-500/10 text-yellow-400",
    finished: "border-green-500 bg-green-500/10 text-green-400",
  };

  const statusLabels = {
    want_to_read: "Want to Read",
    reading: "Reading",
    finished: "Finished",
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderStars = (rating: number | null) => {
    if (!rating) return <span className="text-zinc-500">Not rated</span>;
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "text-yellow-400" : "text-zinc-600"}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-zinc-800 rounded-lg p-8 w-full max-w-4xl mx-auto border-zinc-700">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">{book.title}</h1>

      {/* Author */}
      <p className="text-xl text-zinc-400 mb-6">by {book.author}</p>

      {/* Status Badge */}
      <div className="mb-8">
        <span
          className={`inline-block px-4 py-2 rounded-full border ${
            statusColors[book.status]
          }`}
        >
          {statusLabels[book.status]}
        </span>
      </div>

      {/* Details Grid */}
      <div className="space-y-6">
        {/* Rating */}
        <div className="border-b border-zinc-700 pb-4">
          <h2 className="text-sm font-semibold text-zinc-400 mb-2">Rating</h2>
          {book.rating ? (
            renderStars(book.rating)
          ) : book.status === "finished" ? (
            <RateBookModal />
          ) : (
            <span className="text-zinc-500">Finish the book to rate it</span>
          )}
        </div>

        {/* Added Date */}
        <div className="border-b border-zinc-700 pb-4">
          <h2 className="text-sm font-semibold text-zinc-400 mb-2">Added</h2>
          <p className="text-lg">{formatDate(book.created_at)}</p>
        </div>

        {/* Added Date */}
        <div className="border-b border-zinc-700 pb-4 flex  gap-2">
          <EditBookButton id={book.id} />
          <DeleteBookButton id={book.id} />
        </div>
      </div>
    </div>
  );
}
