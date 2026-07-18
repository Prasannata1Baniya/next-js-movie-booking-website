import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-white">
            Now Showing
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-text-primary md:text-7xl">
            Experience Movies Like Never Before
          </h1>

          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Discover the latest blockbusters, explore theatres, choose your
            favorite seats, and book tickets in just a few clicks.
          </p>

          {/* Movie Info */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-text-secondary">
            <span>⭐ 8.8 IMDb</span>
            <span>🎬 Action</span>
            <span>⏱ 2h 35m</span>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/movies"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Book Now
            </Link>

            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black">
              ▶ Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}