const popularMovies = [
  {
    id: 1,
    posterImage:
      "https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/M/MV5BZTQ0MmI0MmEtNjQwNi00NDFmLWEwMGUtZWYyMGYxYzQ5ZTNiXkEyXkFqcGdeQWxiaWFtb250._V1_.jpg",
    title: "Sing 2",
    duration: "1 hour 50 minutes",
    releaseDate: "28 January 2022",
    director: "Garth Jennings",
    boxOffice: "$190.8 million",
    storyline:
      "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show.",
  },
  {
    id: 2,
    posterImage:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/M/MV5BNzgwNTVjYWQtNTY3YS00NzIzLTg1ZDAtYTA5MDNkNWZhZjA5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    title: "Spider-man. No way home.",
    duration: "2 hours 28 minutes",
    releaseDate: "15 December 2021",
    director: "Jon Watts",
    boxOffice: "$1.69 billion",
    storyline:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
  },
  {
    id: 3,
    posterImage:
      "https://m.media-amazon.com/images/M/MV5BMzQ5ZDZhZDItZTNmZi00MWQ0LWJlNDUtZTE4ZWJmODNlM2Y3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/M/MV5BNTI3YTBjYzQtNzc1Ny00ODhhLTg0Y2EtMzUwYmYzMjk4YTkzXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
    title: "West Side Story",
    duration: "2 hours 36 minutes",
    releaseDate: "10 December 2021",
    director: "Steven Speilberg",
    boxOffice: "$44.1 million",
    storyline:
      "An adaptation of the 1957 musical, West Side Story explores forbidden love and the rivalry between the Jets and the Sharks, two teenage street gangs of different ethnic backgrounds.",
  },
  {
    id: 4,
    posterImage:
      "https://m.media-amazon.com/images/M/MV5BYzdlMTMyZWQtZWNmMC00MTJiLWIyMWMtM2ZlZDdlYzZhNTc0XkEyXkFqcGdeQXVyMTMzNDE5NDM2._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/M/MV5BYjdjY2U1NWItZTYzMC00YWM0LWI1MTUtNjk0YWFjNTU4NWNiXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
    title: "House of Gucci",
    duration: "2 hours 38 minutes",
    releaseDate: "26 November 2021",
    director: "Ridley Scott",
    boxOffice: "$150.5 million",
    storyline:
      "When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel their legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately...murder.",
  },
  {
    id: 5,
    posterImage:
      "https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/M/MV5BZmNkZTgwNTEtODhjOC00MmY3LTg3OWEtMDJjNzMwY2U1NWZiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "The Batman.",
    duration: "2 hours 55 minutes",
    releaseDate: "4 March 2022",
    director: "Matt Reeves",
    boxOffice: "Unknown",
    storyline:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
  },
  {
    id: 6,
    posterImage:
      "https://m.media-amazon.com/images/M/MV5BMzExMWVjODMtYjgzOC00ZDljLTgxMTktYWQ0NGNiOTcxNGYxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/M/MV5BNGU1Mzk0MmUtMjRmOS00ZGYyLWFhMjEtMmFiMjQ5MzI4ZDQwXkEyXkFqcGdeQWFybm8@._V1_.jpg",
    title: "Sonic the Hedgehog 2",
    duration: "1 hour 39 minutes",
    releaseDate: "1 April 2022",
    director: "Jeff Fowler",
    boxOffice: "Unknown",
    storyline:
      "Sequel to the 2020 live-action feature film 'Sonic the Hedgehog'.",
  },
];

const allMovies = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    title: "Jaws",
    characters: "A big shark",
    genre: "Adventure, horror",
    release: "1975, USA",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BN2U1MWE1NTMtYjQ2ZC00MTFmLWFmYjItODMyNGYxOTAyZmEzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    title: "Jaws 2",
    characters: "An even bigger shark",
    genre: "Fantasy, horror, adventure",
    release: "1978, USA",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMTE5OTY0OTcxMl5BMl5BanBnXkFtZTcwMTg0NjMyMQ@@._V1_.jpg",
    title: "Jaws 3",
    characters: "The biggest shark",
    genre: "Horror, adventure, fantasy",
    release: "1983, USA",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNGI1MTAxMWItOTE0OC00ZDhkLWE3Y2EtNjFiZmQ4NjQ1NGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    title: "Jaws. The revenge.",
    characters: "Sharks take revenge?!",
    genre: "Comedy, horror, adventure",
    release: "1987, USA",
  },
];

export const getPopularMovies = () => {
  return Promise.resolve(popularMovies);
};

export const getAllMovies = () => {
  return Promise.resolve(allMovies);
};

export const getIndividualMovie = (id: number) => {
  return Promise.resolve(popularMovies.find((movie) => movie.id === id));
};
