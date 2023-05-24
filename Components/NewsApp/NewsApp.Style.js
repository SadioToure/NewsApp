import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pickerLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    flex: 1,
  },
});
