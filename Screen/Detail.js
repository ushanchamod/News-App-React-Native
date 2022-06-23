import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const { height } = Dimensions.get("window");

export default function Detail() {
  const route = useRoute();
  const img = { uri: route.params.urlToImage };
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.title}>{route.params.title}</Text>

      <View style={styles.separateLineSort}></View>

      <Text style={styles.author}>Author : {route.params.author}</Text>
      <Text style={styles.date}>Date : {route.params.date}</Text>
      <View style={styles.separateLineLong}></View>

      <Image
        style={styles.banner}
        source={
          route.params.urlToImage ? { uri: route.params.urlToImage } : null
        }
      />
      <View style={styles.separateLineLong}></View>

      <Text style={styles.description}>{route.params.description}</Text>

      <Text style={styles.content}>{route.params.content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 8,
    paddingTop: 20,
  },

  banner: {
    height: height * (30 / 100),
    width: "100%",
    resizeMode: "cover",
    borderRadius: 4,
  },

  title: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
    color: "#1B2430",
  },
  separateLineSort: {
    width: "70%",
    marginVertical: 5,

    height: 1,
    backgroundColor: "#eee",
  },
  separateLineLong: {
    width: "100%",
    marginVertical: 10,

    height: 2,
    backgroundColor: "#eee",
  },
  author: {
    fontSize: 18,
    color: "#73777B",
  },
  date: {
    fontSize: 16,
    color: "#73777B",
  },
  description: {
    borderLeftWidth: 3,
    fontSize: 16,
    color: "#7F7C82",
    fontWeight: "bold",
    paddingLeft: 10,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#413F42",
    lineHeight: 30,
  },
});
