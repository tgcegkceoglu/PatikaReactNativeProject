import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: '100%',
    minHeight: 250,
    resizeMode: 'cover',
  },
  container: {
    padding: 5,
    backgroundColor: '#f2f2f2',
  },
  title: {
    color: '#a52a2a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  area: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a52a2a',
    paddingBottom:5,
    borderBottomWidth:1,
    borderBottomColor:'#bebebe'
  },
  instructions:{
    fontWeight:'medium',
    fontSize:16,
    paddingVertical:10
  },
  buttonText:{
    backgroundColor:'#ff0000',
    paddingVertical:15,
    borderRadius:10,
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:16,
    marginBottom:30,
    marginTop:15,
  }
});
