"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function StatusFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStatus = searchParams.get("status") || "all";

  function handleFilter(status: string) {
    const params = new URLSearchParams(searchParams);
    if (status === "all") {
      params.delete("status");
    } else {
      params.set("status", status);
    }
    router.push(`/?${params.toString()}`);
  }

  return (
    <select
      value={currentStatus}
      onChange={(e) => handleFilter(e.target.value)}
      className="bg-zinc-800 border border-zinc-700 text-white rounded p-2 mb-4 mt-7"
    >
      <option value="all">All Books</option>
      <option value="reading">Reading</option>
      <option value="finished">Finished</option>
      <option value="want_to_read">Want to Read</option>
    </select>
  );
}
