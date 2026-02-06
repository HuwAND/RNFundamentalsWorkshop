import { Image, ScrollView, Text, View } from "react-native";

const MovieCard = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
        }}
        style={{ width: 200, height: 300, marginRight: 8 }}
      />
      <Text>Movie Card</Text>
    </View>
  );
};

export default function MoviesScreen() {
  return (
    <View>
      <Text>MOST POPULAR MOVIES</Text>
      <ScrollView horizontal>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ScrollView>
    </View>
  );
}
