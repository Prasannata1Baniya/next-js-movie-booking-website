
import { prisma } from "@/lib/prisma";

export async function getMovies() {
  return prisma.movie.findMany({
    orderBy: {
      releaseDate: "desc",
    },
  });
}

export async function getFeaturedMovie() {}

export async function getMovieById(id: string) {}

export async function getMoviesByGenre(genre: string) {}

export async function searchMovies(query: string) {}