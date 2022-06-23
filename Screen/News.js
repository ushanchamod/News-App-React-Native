import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import newsAPI from "../API/News";

import NewsCard from "../components/NewsCard";

const News = ({ navigation }) => {
  const [news, setNews] = useState([]); //for store api data

  useEffect(() => {
    getNewsFromAPI();
  }, []);

  function getNewsFromAPI() {
    newsAPI
      .get(
        "everything?q=tesla&from=2022-05-23&sortBy=publishedAt&apiKey=42bfe583a74449ebbcb6f3c2453aec34"
      )
      .then(function (response) {
        setNews(response.data.articles);
      })
      .catch(function () {
        alert("Check your connection");
      });
  }

  if (!news) {
    return null;
  }

  return (
    <View style={{paddingTop: 15 , backgroundColor: "#fff", width: '100%'}}>
      <FlatList
        data={news}
        keyExtractor={({ id }, index) => "key" + index}
        renderItem={({ item }) => {
            if(item.urlToImage != ""){
              return(
                <View>
                  <NewsCard item={item} />
                </View>
              )
            }
            
        }}
      />
    </View>
  );
};

export default News;
