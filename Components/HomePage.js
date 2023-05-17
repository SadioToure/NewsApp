import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const API_KEY = '26c3bbd4404040c5986c25b5cf5e1e58';

const HomePage = ({ navigation }) => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try{
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${API_KEY}`
        );
        setCarouselData(response.data.articles);
      }catch(error){
        console.error(error);
      }
    };
    fetchArticles();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselDescription}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue !</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          data={carouselData}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  carouselContainer: {
    marginTop: 50,
  },
  carouselItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carouselDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomePage;
