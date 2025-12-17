"use client";

import { Trash2 } from "lucide-react";
import { deleteLab } from "@/lib/admin-actions";

export function DeleteLabButton({ id }: { id: number }) {
  return (
    <form action={async () => await deleteLab(id)}>
      <button
        type="submit"
        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-all"
        onClick={(e) => {
          if (!confirm("Delete this experiment permanently?")) e.preventDefault();
        }}
      >
        <Trash2 size={16} />
      </button>
    </form>
  );
}