import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { labs } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { LabForm } from "@/components/admin/LabForm";
import { updateLab } from "@/lib/admin-actions";

interface EditLabProps { params: Promise<{ id: string }> }

export default async function EditLabPage({ params }: EditLabProps) {
  const { id } = await params;
  const labId = parseInt(id);
  if (isNaN(labId)) return notFound();

  const labData = await db.select().from(labs).where(eq(labs.id, labId)).limit(1);
  if (labData.length === 0) return notFound();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8"><h1 className="text-2xl font-bold">Edit Experiment</h1></div>
      <LabForm initialData={labData[0]} action={updateLab.bind(null, labId)} />
    </div>
  );
}