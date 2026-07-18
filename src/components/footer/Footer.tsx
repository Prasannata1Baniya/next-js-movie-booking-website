import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-surface-secondary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
       
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-primary transition-colors hover:text-accent"
          >
          CineBook
          </Link>

          <p className="mt-2 max-w-sm text-sm text-text-secondary">
            Discover the latest movies, explore showtimes, and book your seats
            online with ease.
          </p>
        </div>

       
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            Home
          </Link>

          <Link
            href="/movies"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            Movies
          </Link>

          <Link
            href="/theatres"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            Theatres
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-text-secondary">
        &copy; {new Date().getFullYear()} CineBook. All rights reserved.
      </div>
    </footer>
  );
}