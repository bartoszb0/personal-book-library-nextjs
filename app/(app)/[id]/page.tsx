import { Suspense } from "react";
import BookDetails from "./components/book-details";
import BookNotes from "./components/book-notes";
import DetailsLoadingSkeleton from "./components/details-loading";

export default function BookDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <>
      <Suspense fallback={<DetailsLoadingSkeleton />}>
        <BookDetails params={params} />
      </Suspense>
      <BookNotes />
    </>
  );
}
