"use client";

import { deleteBook } from "@/actions/books";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function DeleteBookButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [confirmation, setConfirmation] = useState(false);

  const handleClick = () => {
    startTransition(async () => {
      const result = await deleteBook(id);

      if (result.success) {
        toast.success("Book deleted succesfully");
        router.push("/");
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <>
      {confirmation ? (
        <Button
          onClick={handleClick}
          disabled={isPending}
          className="bg-red-900 hover:bg-red-800 text-white"
        >
          {isPending ? "Deleting" : "Are you sure?"}
        </Button>
      ) : (
        <Button
          onClick={() => setConfirmation(true)}
          className="bg-red-700 hover:bg-red-600 text-white"
        >
          Delete
        </Button>
      )}
    </>
  );
}
