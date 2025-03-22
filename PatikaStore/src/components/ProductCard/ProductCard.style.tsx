import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: Dimensions.get('window').width,
    backgroundColor: '#eceff1',
    borderRadius: 5,
    padding: 10,
    marginVertical:5,
    marginRight:10,
    justifyContent: 'space-between',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    backgroundColor:'white',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    color: '#808080',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stock:{
    color: '#ff0000',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
