import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
    paddingBottom: 20,
  },
  image: {
    minHeight: 200,
    resizeMode: 'cover',
    borderRadius: 20,
    justifyContent: 'flex-end',
    overflow:'hidden'
  },

  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,

    textAlign: 'right',
  },
});
