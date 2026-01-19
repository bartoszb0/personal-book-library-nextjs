"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-4 mt-20">
      <h2 className="text-red-700">Something went wrong!</h2>
      <p className="text-lg">{error.message}</p>
      <Button className="mt-6 w-40" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
