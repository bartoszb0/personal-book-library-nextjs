export default function BooksSkeleton() {
  // Create an array of 6 items to fill the grid
  const skeletonItems = Array.from({ length: 6 });

  return (
    <div className="mt-4 animate-pulse flex flex-col items-center">
      {/* Ghost button skeleton */}
      <div className="h-10 w-32 bg-zinc-800 rounded mt-3" />

      {/* The Grid - matching your BooksList exactly */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {skeletonItems.map((_, i) => (
          <div
            key={i}
            className="bg-zinc-800 w-60 h-28 border-l-4 border-l-zinc-700 p-4 flex flex-col gap-2"
          >
            {/* Title line */}
            <div className="h-4 w-3/4 bg-zinc-700 rounded" />
            {/* Author line */}
            <div className="h-3 w-1/2 bg-zinc-700 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
