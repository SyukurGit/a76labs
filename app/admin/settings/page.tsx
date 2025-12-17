import { db } from "@/lib/db";
import { siteSettings } from "@/lib/schema";
import { SettingsForm } from "@/components/admin/SettingsForm";

export default async function SettingsPage() {
  // 1. Ambil semua settings dari DB
  const allSettings = await db.select().from(siteSettings);

  // 2. Convert Array ke Object agar mudah dipakai di UI
  // Dari: [{key: 'site_title', value: 'A76'}, {key: 'email', value: 'x@x.com'}]
  // Jadi: { site_title: 'A76', email: 'x@x.com' }
  const settingsMap: Record<string, string> = {};
  allSettings.forEach((item) => {
    settingsMap[item.key] = item.value;
  });

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Site Settings</h1>
        <p className="text-gray-500">Manage global configurations and SEO defaults.</p>
      </div>

      {/* Kita oper data object ke Client Component form */}
      <SettingsForm initialData={settingsMap} />
    </div>
  );
}