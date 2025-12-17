"use client"; // <--- Wajib ada ini agar onClick berfungsi

import { Trash2 } from "lucide-react";
import { deleteProduct } from "@/lib/admin-actions";

interface DeleteProductButtonProps {
  id: number;
}

export function DeleteProductButton({ id }: DeleteProductButtonProps) {
  return (
    <form
      action={async () => {
        // Kita panggil server action di sini
        await deleteProduct(id);
      }}
    >
      <button
        type="submit"
        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-all"
        onClick={(e) => {
          // Logika konfirmasi browser
          if (!confirm("Are you sure you want to delete this product?")) {
            e.preventDefault(); // Batalkan submit jika user klik Cancel
          }
        }}
      >
        <Trash2 size={16} />
      </button>
    </form>
  );
}