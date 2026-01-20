export default function NotesLoadingSkeleton() {
  return (
    <div className="mt-10">
      <h1 className="text-4xl mb-4">Notes</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-zinc-800 border-zinc-600 p-4 rounded-md shadow-lg border-2 animate-pulse"
              style={{
                minHeight: "120px",
              }}
            >
              {/* Title skeleton */}
              <div className="h-4 bg-zinc-400 rounded w-3/4 mb-3"></div>

              {/* Content skeleton - multiple lines */}
              <div className="space-y-2">
                <div className="h-3 bg-zinc-400 rounded w-full"></div>
                <div className="h-3 bg-zinc-400 rounded w-5/6"></div>
                <div className="h-3 bg-zinc-400 rounded w-4/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
