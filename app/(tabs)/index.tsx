import { getPopularMovies, PopularMovie } from "@/api/movies";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, FlatList } from "react-native";

const MovieCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 200, height: 300, marginRight: 8 }}
      />
      <Text>{title}</Text>
    </View>
  );
};

export default function MoviesScreen() {
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
      <Text>MOST POPULAR MOVIES</Text>
      <FlatList horizontal data={popularMovies} renderItem={({item}) => <MovieCard title={item.title} image={item.bannerImage} />}/>
    </View>
  );
}
