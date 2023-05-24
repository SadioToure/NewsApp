import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from './HomePage.Style';

const API_KEY = '26c3bbd4404040c5986c25b5cf5e1e58';
const HomePage = ({ navigation }) => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try{
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
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
        <Image source={{ uri: item.urlToImage }} style={styles.carouselImage} />
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
          layout={'default'} // Ajout de cette ligne pour fixer le layout du carrousel
        />
      </View>
    </View>
  );
}
export default HomePage;
