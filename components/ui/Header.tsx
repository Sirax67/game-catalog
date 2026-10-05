import Link from "next/link";

function DicesIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="2" y="10" width="12" height="12" rx="2" ry="2" />
      <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
      <path d="M6 18h.01" />
      <path d="M10 14h.01" />
      <path d="M15 6h.01" />
      <path d="M18 9h.01" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="mt-7 rounded-full bg-base px-5 py-3 drop-shadow-[-3px_4px_0px_rgba(105,213,243,0.34)] sm:px-7 sm:py-4">
      <nav className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full transition hover:opacity-80 sm:gap-4"
        >
          <DicesIcon className="size-7 shrink-0 text-light sm:size-8" />
          <span className="bg-gradient-to-r from-white to-[#b5b5b5] bg-clip-text font-display text-sm font-medium text-transparent sm:text-base">
            Каталог настольных игр
          </span>
        </Link>

        <Link
          href="/"
          className="shrink-0 rounded-full text-sm text-light transition hover:text-accent sm:text-base"
        >
          Все игры
        </Link>
      </nav>
    </header>
  );
}
