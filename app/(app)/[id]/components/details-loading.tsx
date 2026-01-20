export default function DetailsLoadingSkeleton() {
  return (
    <div className="bg-zinc-800 rounded-lg p-8  w-[90vw] md:w-[60vw] lg:w-[600px] mx-auto border-zinc-700 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-10 bg-zinc-700 rounded w-3/4 mb-2"></div>

      {/* Author Skeleton */}
      <div className="h-7 bg-zinc-700 rounded w-1/2 mb-6"></div>

      {/* Status Badge Skeleton */}
      <div className="mb-8">
        <div className="h-10 w-32 bg-zinc-700 rounded-full"></div>
      </div>

      {/* Details Grid Skeleton */}
      <div className="space-y-6">
        {/* Rating Skeleton */}
        <div className="border-b border-zinc-700 pb-4">
          <div className="h-4 bg-zinc-700 rounded w-16 mb-2"></div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-6 w-6 bg-zinc-700 rounded"></div>
            ))}
          </div>
        </div>

        {/* Added Date Skeleton */}
        <div className="border-b border-zinc-700 pb-4">
          <div className="h-4 bg-zinc-700 rounded w-16 mb-2"></div>
          <div className="h-7 bg-zinc-700 rounded w-48"></div>
        </div>

        {/* Finished Date Skeleton */}
        <div className="border-b border-zinc-700 pb-4">
          <div className="h-4 bg-zinc-700 rounded w-20 mb-2"></div>
          <div className="h-7 bg-zinc-700 rounded w-48"></div>
        </div>
      </div>
    </div>
  );
}
