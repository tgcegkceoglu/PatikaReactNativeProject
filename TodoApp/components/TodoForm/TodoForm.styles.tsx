import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor: '#37474f',
        borderRadius:10,
        padding:10,
    },
    input:{
        color:'white',
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#6e8490',
        fontSize:15,
    },
    button:{
        margin: 10,
        padding:10,
        backgroundColor:'#ffa500',
        borderRadius:10,
        alignItems:'center',
    },

    buttonDisabled:{
        margin: 10,
        padding:10,
        backgroundColor:'grey',
        borderRadius:10,
        alignItems:'center',
    },
    button_text:{
        fontSize:15,
        color:'white',
    },
});
