import { getIndividualMovie, PopularMovie } from "@/api/movies";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Movie = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [movie, setMovie] = useState<PopularMovie>();

  useEffect(() => {
    const idAsNumber = Number(id);
    console.log("ID", idAsNumber);
    if (!idAsNumber) {
      fetchIndividualMovie(1);
    } else {
      fetchIndividualMovie(idAsNumber);
    }
  }, [id]);

  const fetchIndividualMovie = async (id: number) => {
    const individualMovie = await getIndividualMovie(id);
    setMovie(individualMovie);
  };

  const MetaData = ({ title, value }: { title: string; value: string }) => (
    <View style={styles.metaDataContainer}>
      <Text style={[styles.bold, styles.marginRight]}>{title}:</Text>
      <Text>{value}</Text>
    </View>
  );

  if (!movie) {
    return;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={{ uri: movie.bannerImage }} style={styles.bannerImage} />

        <View style={styles.container}>
          <View style={styles.filmInfoContainer}>
            <>
              <Image
                source={{ uri: movie.posterImage }}
                style={styles.posterImage}
              />
            </>
            <View style={styles.filmInfo}>
              <Text style={styles.bold}>{movie.title}</Text>
              <Text>{movie.duration}</Text>
            </View>
          </View>

          <View style={styles.marginTop}>
            <MetaData title="Release date" value={movie.releaseDate} />
            <MetaData title="Director" value={movie.director} />
            <MetaData title="Box Offie" value={movie.boxOffice} />
          </View>

          <View style={styles.marginTop}>
            <Text style={styles.bold}>STORYLINE</Text>
            <Text>{movie.storyline}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: -50,
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
  filmTitle: {},
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
