import { PopularMoviesCarousel } from "@/components/PopularMoviesCarousel";
import { View } from "react-native";

import { useRouter } from "expo-router";
export default function MoviesScreen() {
  const router = useRouter();

  const onMoviePress = (id: number) => {
    router.push(`/movies/${id}`);
  };

  return (
    <View>
      <PopularMoviesCarousel onMoviePress={onMoviePress} />
    </View>
  );
}
