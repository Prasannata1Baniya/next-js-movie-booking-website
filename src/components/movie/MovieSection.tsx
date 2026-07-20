import MovieCard from "./MovieCard";

type Movie = {
  id: string;
  title: string;
  posterUrl: string;
  rating: number;
  duration: number;
  genre: string;
  language: string;
  releaseDate: Date;
};

type MovieSectionProps = {
  movies: Movie[];
};

export default function MovieSection({
  movies,
}: MovieSectionProps) {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-4xl font-bold text-text-primary">
            Now Showing
          </h2>

          <button className="text-accent hover:underline">
            View All →
          </button>
        </div>

        {/* Movies Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterUrl={movie.posterUrl}
              title={movie.title}
              rating={movie.rating}
              duration={movie.duration}
              genre={movie.genre}
              language={movie.language}
              releaseDate={movie.releaseDate.toDateString()}
            />
          ))}
        </div>
      </div>
    </section>
  );
}