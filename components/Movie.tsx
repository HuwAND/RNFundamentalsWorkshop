import { PopularMovie } from "@/api/movies";
import { useFavourites } from "@/context/FavouritesContext";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface MovieProps {
  movie: PopularMovie;
}

const Movie = ({ movie }: MovieProps) => {
  const {
    id,
    bannerImage,
    posterImage,
    releaseDate,
    director,
    boxOffice,
    storyline,
  } = movie;

  const { addFavourite } = useFavourites();

  const setFavourite = () => {
    addFavourite(String(id));
  };

  const MetaData = ({ title, value }: { title: string; value: string }) => (
    <View style={styles.metaDataContainer}>
      <Text style={[styles.bold, styles.marginRight]}>{title}:</Text>
      <Text>{value}</Text>
    </View>
  );

  return (
    <View>
      <Image source={{ uri: bannerImage }} style={styles.bannerImage} />

      <View style={styles.container}>
        <View style={styles.filmInfoContainer}>
          <>
            <Image source={{ uri: posterImage }} style={styles.posterImage} />
          </>
          <View style={styles.filmInfo}>
            <Text style={styles.bold}>{movie.title}</Text>
            <Text>{movie.duration}</Text>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.favouriteButton,
            pressed && styles.favouriteButtonPressed,
          ]}
          onPress={setFavourite}
        >
          <Text>Set Favourite</Text>
        </Pressable>

        <View style={styles.marginTop}>
          <MetaData title="Release date" value={releaseDate} />
          <MetaData title="Director" value={director} />
          <MetaData title="Box Offie" value={boxOffice} />
        </View>

        <View style={styles.marginTop}>
          <Text style={styles.bold}>STORYLINE</Text>
          <Text>{storyline}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: -50,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  bannerImage: {
    width: "100%",
    height: 300,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  posterImage: {
    height: 200,
    width: 100,
    borderRadius: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  favouriteButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "lightgray",
    alignSelf: "flex-start",
    borderRadius: 5,
  },
  favouriteButtonPressed: {
    backgroundColor: "red",
  },
  filmInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  filmInfo: {
    flexDirection: "column",
    marginLeft: 10,
  },
  metaDataContainer: {
    flexDirection: "row",
  },
  marginTop: {
    marginTop: 20,
  },
  marginRight: {
    marginRight: 5,
  },
});

export default Movie;
