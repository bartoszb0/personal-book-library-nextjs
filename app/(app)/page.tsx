import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import BooksList from "./components/books-list";
import BooksSkeleton from "./components/books-skeleton";
import { StatusFilter } from "./components/status-filter";

export default function Homepage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full text-center">
        <h1 className="text-3xl">My Books</h1>
        <Suspense fallback={<BooksSkeleton />}>
          <StatusFilter />
          <BooksList searchParams={searchParams} />
        </Suspense>
        <Button className="mt-10">+ Add new book</Button>
      </div>
    </div>
  );
}
