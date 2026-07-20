import { prisma } from "../src/lib/prisma";

console.log("DATABASE_URL:", process.env.DATABASE_URL);


async function main() {
  await prisma.movie.createMany({
    data: [
      {
        title: "Interstellar",
        description:
          "A team of explorers travel through a wormhole in space.",
        posterUrl:
          "https://m.media-amazon.com/images/I/91UMpWgj05L._AC_UF894,1000_QL80_.jpg",
        backdropUrl:
          "https://...",
        genre: "Sci-Fi",
        language: "English",
        duration: 169,
        rating: 8.7,
        releaseDate: new Date("2014-11-07"),
        trailerUrl: "https://youtube.com/",
        isFeatured: true,
      },

      {
        title: "Inception",
        description:
          "A skilled thief enters people's dreams.",
        posterUrl:
          "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        backdropUrl:
          "https://...",
        genre: "Sci-Fi",
        language: "English",
        duration: 148,
        rating: 8.8,
        releaseDate: new Date("2010-07-16"),
        trailerUrl: "https://youtube.com/...",
        isFeatured: false,
      },

      {
        title: "Dune",
        description:
          "Paul Atreides journeys to the most dangerous planet.",
        posterUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/250px-Dune_%282021_film%29.jpg",
        backdropUrl:
          "https://...",
        genre: "Adventure",
        language: "English",
        duration: 155,
        rating: 8.3,
        releaseDate: new Date("2021-10-22"),
        trailerUrl: "https://youtube.com/...",
        isFeatured: false,
      },

      {
        title: "The Batman",
        description:
          "Batman uncovers corruption in Gotham.",
        posterUrl:
          "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        backdropUrl:
          "https://...",
        genre: "Action",
        language: "English",
        duration: 176,
        rating: 7.8,
        releaseDate: new Date("2022-03-04"),
        trailerUrl: "https://youtube.com/...",
        isFeatured: false,
      },
    ],
  });

  console.log("Movies seeded successfully.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
