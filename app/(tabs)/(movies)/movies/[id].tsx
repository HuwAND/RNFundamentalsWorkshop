import { getIndividualMovie, PopularMovie } from "@/api/movies";
import Movie from "@/components/Movie";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

const MovieScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [movie, setMovie] = useState<PopularMovie>();

  useEffect(() => {
    const idAsNumber = Number(id);
    fetchIndividualMovie(idAsNumber);
  }, [id]);

  const fetchIndividualMovie = async (id: number) => {
    const individualMovie = await getIndividualMovie(id);
    setMovie(individualMovie);
  };

  const onBackPress = () => {
    router.back();
  };

  if (!movie) {
    return;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable style={styles.backButton} onPress={onBackPress}>
          <Text>Back</Text>
        </Pressable>
        <Movie movie={movie} />
      </ScrollView>
    </SafeAreaView>
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

export default MovieScreen;
