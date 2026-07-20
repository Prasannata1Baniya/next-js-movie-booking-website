type MovieCardProps = {
  posterUrl: string;
  title: string;
  rating: number;
  duration: number;
  genre: string;
  language: string;
  releaseDate: string;
};

export default function MovieCard({
  posterUrl,
  title,
  rating,
  duration,
  genre,
  language,
  releaseDate,
}: MovieCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-surface-secondary shadow-lg">
      {/* Poster */}
      <div>
        <img
          src={posterUrl}
          alt={title}
          className="h-80 w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating & Duration */}
        <div className="mb-2 flex items-center justify-between">
          <span>⭐ {rating}</span>
          <span>{duration} min</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary">
          {title}
        </h3>

        {/* Genre & Language */}
        <p className="mt-2 text-text-secondary">
          {genre} • {language}
        </p>

        {/* Release Date */}
        <p className="mt-1 text-sm text-text-secondary">
          {releaseDate}
        </p>

        {/* Button */}
        <button className="mt-5 w-full rounded-lg bg-primary py-2 text-white transition hover:bg-red-700">
          Book Now
        </button>
      </div>
    </div>
  );
}