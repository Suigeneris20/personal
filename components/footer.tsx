export function Footer() {
  return (
    <footer className="border-t border-[--border] mt-auto">
      <div className="max-w-3xl mx-auto px-6 py-6 text-sm text-[--muted] flex items-center justify-between">
        <span>© {new Date().getFullYear()} Ife Arifalo</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/Suigeneris20"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[--fg] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
