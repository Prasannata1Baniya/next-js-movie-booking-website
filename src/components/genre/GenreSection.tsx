const genres = [
  "Action",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Thriller",
  "Animation",
];

export default function GenreSection() {
  return (
    <section className="bg-surface-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-4xl font-bold text-text-primary">
          Browse by Genre
        </h2>

        <div className="flex flex-wrap gap-4">
          {genres.map((genre) => (
            <button
              key={genre}
              className="rounded-full border border-primary px-6 py-3 text-text-primary transition hover:bg-primary"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}