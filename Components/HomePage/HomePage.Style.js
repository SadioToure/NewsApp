import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    carouselImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
    },
  });