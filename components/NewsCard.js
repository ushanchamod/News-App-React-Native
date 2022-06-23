import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function NewsCard({ item }) {
  const navigation = useNavigation();

  // Create navigation
  const goDetails = () => {
    navigation.navigate("Detail", {
      title: item.title,
      author: item.author,
      urlToImage: item.urlToImage,
      content: item.content,
      date: split(item.publishedAt),
      description: item.description
    });
  };

  // Change date in proper format
  const split = (x) => {
    return x.slice(0, 10);
  };

  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.author}>By {item.author}</Text>

      <Text style={styles.date}>{split(item.publishedAt)}</Text>

      <View style={styles.imageAndDescription}>
        <Image
          style={styles.image}
          source={item.urlToImage ? { uri: item.urlToImage } : null}
        />

        <View style={styles.descriptionAndBtn}>
          <Text style={styles.description}>{item.description}</Text>
          <TouchableOpacity onPress={goDetails} style={styles.btn}>
            <Text>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    width: width - 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  title: {
    left: 1,
    fontSize: 21,
    fontWeight: "bold",
  },

  author: {
    fontSize: 17,
    paddingBottom: 2,
    color: "#73777B",
  },

  date: {
    fontSize: 14,
    paddingBottom: 15,
    color: "#73777B",
  },

  imageAndDescription: {
    height: height * (25 / 100),
    flexDirection: "row",
    width: width,
  },

  image: {
    height: height * (25 / 100),
    width: width * (30 / 100),
    borderRadius: 10,
  },

  descriptionAndBtn: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    justifyContent: "flex-start",
  },

  description: {
    paddingHorizontal: 15,
    fontSize: 16,
    width: width * (64 / 100),
    maxHeight: height * (19 / 100),
    justifyContent: "flex-start",
    color: "#374045",
  },

  btn: {
    alignItems: "center",
    backgroundColor: "#9D84B7",
    marginHorizontal: 12,
    marginVertical: 5,
    padding: 8,
    borderRadius: 5,
    width: width * (23 / 100),
  },
});
