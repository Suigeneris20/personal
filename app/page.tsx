import Link from "next/link";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({});

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-24 md:py-36">
        <h1 className="text-4xl font-bold tracking-tight">Ife Adebiyi</h1>
        <p className="mt-3 text-lg text-[--muted]">Engineer with an aptitude for learning.</p>
        <div className="mt-8 flex gap-5 text-sm">
          <Link href="/projects" className="underline underline-offset-4 hover:text-[--muted] transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="underline underline-offset-4 hover:text-[--muted] transition-colors">
            Writing
          </Link>
          <Link href="/contact" className="underline underline-offset-4 hover:text-[--muted] transition-colors">
            Contact
          </Link>
        </div>
      </section>

      <section className="py-12 border-t border-[--border]">
        <h2 className="text-xs uppercase tracking-widest text-[--muted] mb-4">About</h2>
        <p className="text-[--muted] leading-relaxed max-w-prose">
          I build software and write about ideas. This site is a growing space for my work and
          words — part portfolio, part blog, part internet home.
        </p>
      </section>
    </div>
  );
}
