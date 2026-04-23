import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[--border] bg-[--bg]/90 backdrop-blur-sm">
      <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight hover:opacity-70 transition-opacity">
          Ife Arifalo
        </Link>
        <div className="flex items-center gap-5 text-sm text-[--muted]">
          <Link href="/projects" className="hover:text-[--fg] transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-[--fg] transition-colors">Writing</Link>
          <Link href="/contact" className="hover:text-[--fg] transition-colors">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
