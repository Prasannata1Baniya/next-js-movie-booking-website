import Hero from "@/components/hero/Hero";
import MovieSection from "@/components/movie/MovieSection";
import { getMovies } from "@/actions/movies";

import GenreSection from "@/components/genre/GenreSection";
import FeatureSection from "@/components/features/FeatureSection";

export default async function Home() {
   const movies = await getMovies();
  return (
    <>
      <Hero />
      <MovieSection movies={movies} />
    </>
  );
}
