import { getIndividualMovie, PopularMovie } from "@/api/movies";
import { useFavourites } from "@/context/FavouritesContext";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FavouritesScreen() {
  const { favouriteMovies } = useFavourites();
  const [movieList, setMovieList] = useState<PopularMovie[]>([]);

  useEffect(() => {
    const movies: PopularMovie[] = [];
    favouriteMovies.forEach(async (id) => {
      const movie = await getIndividualMovie(Number(id));
      if (movie) {
        movies.push(movie);
      }
    });
    setMovieList(movies);
  }, [movieList]);

  return (
    <View>
      <Text style={styles.header}>Favourites Screen</Text>
      <View style={styles.moviesContainer}>
        {movieList.map((m) => (
          <View key={m.id}>
            <Text style={styles.movieTitles}>{m.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
  },
  moviesContainer: {
    gap: 4,
  },
  movieTitles: {
    fontSize: 16,
  },
});
