import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({});

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-24 md:py-36">
        <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-8">
          <div>
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
          </div>
          <Image
            src="/me.jpg"
            alt="Ife Adebiyi"
            width={120}
            height={120}
            className="rounded-full object-cover shrink-0"
            priority
          />
        </div>
      </section>

      <section className="py-12 border-t border-[--border]">
        <h2 className="text-xs uppercase tracking-widest text-[--muted] mb-4">About</h2>
        <p className="text-[--fg] leading-relaxed max-w-prose">
          Professionally, a quant dev with a background in software development. See my resume{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-[--muted] transition-colors"
          >
            here
          </a>{" "}
          for what I do at work. This site is, however, a growing repository of my whimsy as well.
        </p>
      </section>
    </div>
  );
}
