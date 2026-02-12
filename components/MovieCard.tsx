import { Image, StyleSheet, Text, View } from "react-native";

export const MovieCard = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.movieImage}
      />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  movieImage: {
    width: 200,
    height: 300,
  },
});
