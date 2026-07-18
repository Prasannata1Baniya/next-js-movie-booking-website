import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-surface border-b border-gray-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
       
        <Link
          href="/"
          className="text-2xl font-bold text-primary transition-colors hover:text-accent"
        >
           CineBook
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-text-primary text-white transition-colors hover:text-accent"
          >
            Home
          </Link>

          <Link
            href="/movies"
            className="text-text-primary text-white transition-colors hover:text-accent"
          >
            Movies
          </Link>

          <Link
            href="/theatres"
            className="text-text-primary text-white transition-colors hover:text-accent"
          >
            Theatres
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-lg border border-primary px-4 py-2 text-text-primary transition hover:bg-primary">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}