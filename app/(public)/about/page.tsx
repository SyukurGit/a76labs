import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - A76LABS",
  description: "Our philosophy, vision, and principles.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">
          About A76LABS
        </h1>

        <div className="prose prose-lg prose-gray text-gray-600 leading-relaxed">
          <p className="text-xl text-black font-medium mb-6">
            We are an independent product lab building practical digital tools.
          </p>

          <h3 className="text-black font-bold mt-12 mb-4">The Philosophy</h3>
          <p>
            Software has become too complex. We believe in returning to the basics: 
            solving clear problems with simple, maintainable code. 
            We do not chase trends. We build what is necessary.
          </p>

          <h3 className="text-black font-bold mt-12 mb-4">How We Work</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Product First:</strong> The code serves the product, not the other way around.</li>
            <li><strong>Speed:</strong> Ship fast, iterate often.</li>
            <li><strong>Clarity:</strong> Clear code is better than clever code.</li>
          </ul>

          <h3 className="text-black font-bold mt-12 mb-4">The Stack</h3>
          <p>
            We build primarily with Next.js, TypeScript, and SQLite (Turso). 
            This stack allows us to move fast without managing heavy infrastructure.
          </p>
        </div>

      </div>
    </div>
  );
}