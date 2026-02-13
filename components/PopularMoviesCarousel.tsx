import { getPopularMovies, PopularMovie } from "@/api/movies";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { MovieCard } from "./MovieCard";

interface PopularMoviesCarouselProps {
  onMoviePress: (id: number) => void;
}

export const PopularMoviesCarousel = ({
  onMoviePress,
}: PopularMoviesCarouselProps) => {
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
          <Pressable onPress={() => onMoviePress(item.id)}>
            <MovieCard title={item.title} image={item.bannerImage} />
          </Pressable>
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
