import { Suspense } from "react";
import BookDetails from "./components/book-details";
import BookNotes from "./components/book-notes";
import DetailsLoadingSkeleton from "./components/details-loading";
import NotesLoadingSkeleton from "./components/notes-loading-skeleton";

export default function BookDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="w-[90vw] md:w-[60vw] lg:w-[600px] mx-auto">
      <Suspense fallback={<DetailsLoadingSkeleton />}>
        <BookDetails params={params} />
      </Suspense>
      <Suspense fallback={<NotesLoadingSkeleton />}>
        <BookNotes params={params} />
      </Suspense>
    </div>
  );
}
