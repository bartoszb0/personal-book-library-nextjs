import { Suspense } from "react";
import BookDetails from "./components/book-details";
import BookExtra from "./components/book-extra";
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
      <BookExtra />
    </>
  );
}
