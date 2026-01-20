"use client";

import { createNewBook } from "@/actions/books";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bookFormSchema, NewBookForm } from "@/lib/schemas/book";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function AddBookForm() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<NewBookForm>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: {
      title: "",
      author: "",
      status: "",
    },
  });

  const bookStatus = watch("status");

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = (data: NewBookForm) => {
    startTransition(async () => {
      const result = await createNewBook(data);

      if (result.success) {
        toast.success("Book added succesfully");
        router.push("/");
        reset();
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <div className="text-center flex flex-col gap-8">
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={isPending}>
          <FieldGroup className="flex flex-col gap-4">
            <Field>
              <FieldLabel>Book Title</FieldLabel>
              <Input {...register("title")} placeholder="Title" />
              {errors.title && <FieldError errors={[errors.title]} />}
            </Field>

            <Field>
              <FieldLabel>Author name</FieldLabel>
              <Input {...register("author")} placeholder="Author"></Input>
              {errors.author && <FieldError errors={[errors.author]} />}
            </Field>

            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <Field>
                  <FieldLabel>Book status</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-[210px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="want_to_read">
                          Want to read
                        </SelectItem>
                        <SelectItem value="reading">Reading</SelectItem>
                        <SelectItem value="finished">Finished</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.status && <FieldError errors={[errors.status]} />}
                </Field>
              )}
            />

            {bookStatus === "finished" && (
              <div className="flex flex-col gap-4 p-4 border rounded-md bg-muted/20 animate-in fade-in slide-in-from-top-2">
                <Field>
                  <FieldLabel>Rating (1-5)</FieldLabel>
                  <Input
                    {...register("rating", { valueAsNumber: true })}
                    type="number"
                    min={1}
                    max={5}
                    placeholder="5"
                  />
                  {errors.rating && <FieldError errors={[errors.rating]} />}
                </Field>
              </div>
            )}
          </FieldGroup>
        </fieldset>
        <Button type="submit" className="mt-5" disabled={isPending}>
          Submit
        </Button>
      </form>
    </div>
  );
}
