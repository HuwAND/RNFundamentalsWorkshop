import { getPopularMovies, PopularMovie } from "@/api/movies";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

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
      <ScrollView horizontal>
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
          title="Sing 2"
        />
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"
          title="Spider-man. No way home."
        />
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMzQ5ZDZhZDItZTNmZi00MWQ0LWJlNDUtZTE4ZWJmODNlM2Y3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
          title="West Side Story"
        />
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BYzdlMTMyZWQtZWNmMC00MTJiLWIyMWMtM2ZlZDdlYzZhNTc0XkEyXkFqcGdeQXVyMTMzNDE5NDM2._V1_FMjpg_UX1000_.jpg"
          title="House of Gucci"
        />
      </ScrollView>
    </View>
  );
}
