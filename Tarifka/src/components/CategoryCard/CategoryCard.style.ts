import { StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#eceff1',
        marginBottom:10,
        borderStartEndRadius:50,
        borderStartStartRadius:50,
        borderWidth:1,
        borderColor:'#bfaea8'
    },
    image:{
        height:100,
        width:100,
        resizeMode:'contain',
    },
    text:{
        marginLeft:10,
        color:'black',
        fontSize:18
    }
})