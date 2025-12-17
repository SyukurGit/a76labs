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
    <div className="min-h-screen py-20 px-4 md:px-6 bg-gray-50/50">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header: Lebih 'Technical' */}
        <div className="mb-16">
          <h1 className="text-4xl font-mono font-bold tracking-tighter mb-4">
            /labs
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg font-mono">
            Experimental projects, prototypes, and raw ideas. <br />
            <span className="text-gray-400 text-sm">Caution: Things might break here.</span>
          </p>
        </div>

        {/* Labs List (Vertical Stack) */}
        <div className="space-y-6">
          {experiments.map((lab) => (
            <div 
              key={lab.id} 
              className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:border-black transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold font-mono group-hover:underline decoration-2 underline-offset-4">
                      {lab.title}
                    </h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded border ${
                      lab.type === 'Prototype' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                      'bg-purple-50 text-purple-700 border-purple-200'
                    }`}>
                      {lab.type}
                    </span>
                  </div>
                  
                  {/* Content Preview (Truncated) */}
                  <p className="text-gray-600 max-w-3xl leading-relaxed">
                    {lab.content ? lab.content.slice(0, 150) + (lab.content.length > 150 ? "..." : "") : "No description provided."}
                  </p>
                </div>

                {/* Slug Link (Optional: jika nanti mau detail page) */}
                {/* Saat ini kita biarkan sebagai card info saja atau link ke detail jika dibuat */}
                {/* <Link href={`/labs/${lab.slug}`} className="...">Read more</Link> */}
              </div>
            </div>
          ))}

          {/* Empty State */}
          {experiments.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-xl">
              <p className="font-mono text-gray-400">No experiments in the lab yet.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}