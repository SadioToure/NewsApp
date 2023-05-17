import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenue !</Text>
        <Text style={styles.text}>Toutes les dernières actualités au même endroit !</Text>
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
    marginLeft: 25,
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
});

export default HomePage;
