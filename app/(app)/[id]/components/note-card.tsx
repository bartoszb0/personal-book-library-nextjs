"use client";

import { Edit2, Trash2 } from "lucide-react";

const getColorFromId = (id: string) => {
  const colors = [
    "bg-yellow-200 border-yellow-300",
    "bg-pink-200 border-pink-300",
    "bg-blue-200 border-blue-300",
    "bg-green-200 border-green-300",
    "bg-purple-200 border-purple-300",
    "bg-orange-200 border-orange-300",
    "bg-red-200 border-red-300",
    "bg-teal-200 border-teal-300",
  ];

  // Use a simple hash of the ID to pick a color
  const hash = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

const getRotationFromId = (id: string) => {
  const rotations = [
    "rotate-1",
    "-rotate-1",
    "rotate-2",
    "-rotate-2",
    "rotate-0",
  ];
  const hash = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return rotations[hash % rotations.length];
};

export default function NoteCard({ note }: { note: any }) {
  return (
    <div
      className={`${getColorFromId(note.id)} ${getRotationFromId(note.id)} p-4 rounded-md shadow-lg border-2 transition-all hover:scale-105 hover:shadow-xl relative group`}
      style={{
        minHeight: "120px",
      }}
    >
      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => {
            /* Edit logic here */
          }}
          className="p-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <Edit2 size={14} />
        </button>
        <button
          onClick={() => {
            /* Delete logic here */
          }}
          className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600"
        >
          <Trash2 size={14} />
        </button>
      </div>

      <h3 className="text-slate-900 font-bold text-sm mb-2 pr-16">
        {note.title}
      </h3>
      <p className="text-slate-800 text-base leading-relaxed break-words">
        {note.content}
      </p>
    </div>
  );
}
