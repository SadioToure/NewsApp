import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carouselContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  carouselItem: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: 120,
    borderRadius: 5,
    marginBottom: 10,
  },
  carouselTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carouselDescription: {
    fontSize: 14,
    color: '#777777',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  picker: {
    flex: 1,
    height: 50,
  },
});
