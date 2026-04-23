import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description: "Get in touch.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-2">Contact</h1>
      <p className="text-[--muted] mb-10">Get in touch.</p>
      <div className="space-y-3 text-sm">
        <div>
          <span className="text-[--muted]">Email — </span>
          <a
            href="mailto:ariftodote@gmail.com"
            className="underline underline-offset-4 hover:text-[--muted] transition-colors"
          >
            ariftodote@gmail.com
          </a>
        </div>
        <div>
          <span className="text-[--muted]">GitHub — </span>
          <a
            href="https://github.com/Suigeneris20"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-[--muted] transition-colors"
          >
            @Suigeneris20
          </a>
        </div>
      </div>
    </div>
  );
}
