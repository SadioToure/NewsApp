import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, Image, TextInput } from 'react-native';

const API_KEY = '26c3bbd4404040c5986c25b5cf5e1e58';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error(error));
  }, []);

  const openArticle = (url) => {
    Linking.openURL(url).catch((err) => console.error('Une erreur est survenue', err));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => openArticle(item.url)}>
      <Image 
        style={styles.image}
        source={{ uri: item.urlToImage }} 
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.time}>{new Date(item.publishedAt).toLocaleString()}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
  time: {
    fontSize: 12,
    marginTop: 10,
    color: 'gray',
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default NewsApp;
