import { LabForm } from "@/components/admin/LabForm";
import { createLab } from "@/lib/admin-actions";

export default function NewLabPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8"><h1 className="text-2xl font-bold">New Experiment</h1></div>
      <LabForm action={createLab} />
    </div>
  );
}