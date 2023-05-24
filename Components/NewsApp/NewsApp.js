import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './NewsApp.Style';

const API_KEY = '26c3bbd4404040c5986c25b5cf5e1e58';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState('us');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&q=${searchValue}&apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error(error));
  }, [country, searchValue]);

  const openArticle = (url) => {
    Linking.openURL(url).catch((err) => console.error('Une erreur est survenue', err));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => openArticle(item.url)}>
      <Image
        style={styles.image}
        source={{ uri: item.urlToImage }}
        key={item.urlToImage}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.time}>{new Date(item.publishedAt).toLocaleString()}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Pays :</Text>
        <Picker
          selectedValue={country}
          onValueChange={(itemValue) => setCountry(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="France" value="fr" />
          <Picker.Item label="États-Unis" value="us" />
          <Picker.Item label="Canada" value="ca" />
          <Picker.Item label="Belgique" value="be" />
          <Picker.Item label="Corée du Sud" value="kr" />
        </Picker>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher des articles..."
        value={searchValue}
        onChangeText={setSearchValue}
      />
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        key={country}
      />
    </View>
  );
};

export default NewsApp;
