import { db } from "@/lib/db";
import { labs } from "@/lib/schema";
import { desc, eq } from "drizzle-orm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labs - A76LABS",
  description: "Experimental projects, prototypes, and engineering playgrounds.",
};

async function getLabs() {
  const data = await db
    .select()
    .from(labs)
    .where(eq(labs.isPublished, true))
    .orderBy(desc(labs.createdAt));
  return data;
}

export default async function LabsPage() {
  const experiments = await getLabs();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 md:px-8 bg-gray-50/50">
      <div className="container mx-auto max-w-5xl">
        {/* Header: Tech & Web3 Vibe */}
        <div className="mb-14">
          <h1 className="text-4xl font-mono font-bold tracking-tighter mb-3 bg-gradient-to-r from-[#027FDB] to-blue-700 bg-clip-text text-transparent">
            /labs
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg font-mono">
            Experimental projects, prototypes, and raw ideas. <br />
            <span className="text-gray-400 text-sm">Caution: Things might break here.</span>
          </p>
        </div>

        {/* Labs List */}
        <div className="space-y-5">
          {experiments.length > 0 ? (
            experiments.map((lab) => (
              <div
                key={lab.id}
                className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-[#027FDB]/40 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl font-bold font-mono text-gray-900 group-hover:text-[#027FDB] transition-colors">
                        {lab.title}
                      </h3>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                          lab.type === "Prototype"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-purple-50 text-purple-700 border-purple-200"
                        }`}
                      >
                        {lab.type}
                      </span>
                    </div>

                    <p className="text-gray-600 max-w-3xl leading-relaxed text-sm sm:text-base">
                      {lab.content
                        ? lab.content.length > 150
                          ? lab.content.slice(0, 150) + "..."
                          : lab.content
                        : "No description provided."}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-xl">
              <p className="font-mono text-gray-400">No experiments in the lab yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}