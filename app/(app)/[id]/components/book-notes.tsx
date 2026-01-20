import { getNotes } from "@/services/notes";
import NoteCard from "./note-card";

export default async function BookNotes({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notes = await getNotes(id);

  return (
    <div className="mt-10">
      <h1 className="text-4xl mb-4">Notes</h1>
      {notes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500 text-xl">
            No notes yet. Add your first note above!
          </p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
