"use client";

import { Check, Trash2 } from "lucide-react";
import { markMessageAsRead, deleteMessage } from "@/lib/admin-actions";

interface MessageActionsProps {
  id: number;
  isRead: boolean | null;
}

export function MessageActions({ id, isRead }: MessageActionsProps) {
  return (
    <div className="flex gap-2 justify-end">
      {/* Tombol Mark as Read (Hanya muncul jika belum dibaca) */}
      {!isRead && (
        <form action={async () => await markMessageAsRead(id)}>
          <button
            type="submit"
            title="Mark as Read"
            className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-all"
          >
            <Check size={16} />
          </button>
        </form>
      )}

      {/* Tombol Hapus */}
      <form action={async () => await deleteMessage(id)}>
        <button
          type="submit"
          title="Delete Message"
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all"
          onClick={(e) => {
            if (!confirm("Delete this message permanently?")) e.preventDefault();
          }}
        >
          <Trash2 size={16} />
        </button>
      </form>
    </div>
  );
}