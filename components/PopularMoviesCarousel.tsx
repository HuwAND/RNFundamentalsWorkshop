import { getPopularMovies, PopularMovie } from "@/api/movies";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MovieCard } from "./MovieCard";

export const PopularMoviesCarousel = () => {
  const [popularMovies, setPopularMovies] = useState<PopularMovie[]>([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const fetchedPopularMovies = await getPopularMovies();
    setPopularMovies(fetchedPopularMovies);
  };

  return (
    <View>
      <Text style={styles.title}>MOST POPULAR MOVIES</Text>
      <FlatList
        horizontal
        contentContainerStyle={styles.carouselContainer}
        data={popularMovies}
        renderItem={({ item }) => (
          <MovieCard title={item.title} image={item.bannerImage} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  carouselContainer: {
    gap: 16,
  },
});
