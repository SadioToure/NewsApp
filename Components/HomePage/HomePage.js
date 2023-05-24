import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Picker } from '@react-native-picker/picker';
import { styles } from './HomePage.Style';

const API_KEY = '26c3bbd4404040c5986c25b5cf5e1e58';

const HomePage = ({ navigation }) => {
  const [carouselData, setCarouselData] = useState([]);
  const [country, setCountry] = useState('us');
  const carouselRef = useRef(null);
  const carouselInterval = useRef(null);
  const carouselDelay = 3000; // Temps en millisecondes entre les changements d'article
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
        );
        setCarouselData(response.data.articles);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchArticles();

    // Démarrer le carrousel automatique après le chargement initial des données
    carouselInterval.current = setInterval(() => {
      carouselRef.current?.snapToNext(); // Faire défiler vers l'article suivant
    }, carouselDelay);

    return () => {
      // Nettoyer l'intervalle lorsque le composant est démonté
      clearInterval(carouselInterval.current);
    };
  }, [country]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={{ uri: item.urlToImage }} style={styles.carouselImage} />
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselDescription}>{item.description}</Text>
      </View>
    );
  };

  const handleSnapToItem = (index) => {
    // Réinitialiser l'intervalle lorsqu'un nouvel article est en cours de visualisation
    clearInterval(carouselInterval.current);
    carouselInterval.current = setInterval(() => {
      carouselRef.current?.snapToNext(); // Faire défiler vers l'article suivant
    }, carouselDelay);
  };

  const handleCountryChange = (itemValue) => {
    setCountry(itemValue);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loadingText}>Chargement en cours ...</Text>
      ) : (
        <>
          <Text style={styles.title}>Bienvenue !</Text>
          <View style={styles.carouselContainer}>
            <Carousel
              ref={carouselRef}
              data={carouselData}
              renderItem={renderItem}
              sliderWidth={300}
              itemWidth={300}
              layout={'default'}
              onSnapToItem={handleSnapToItem}
            />
          </View>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Filtrer par pays :</Text>
            <Picker
              selectedValue={country}
              onValueChange={handleCountryChange}
              style={styles.picker}
            >
              <Picker.Item label="France" value="fr" />
              <Picker.Item label="États-Unis" value="us" />
              <Picker.Item label="Canada" value="ca" />
              <Picker.Item label="Belgique" value="be" />
              <Picker.Item label="Corée du Sud" value="kr" />
            </Picker>
          </View>
        </>
      )}
    </View>
  );
};

export default HomePage;
