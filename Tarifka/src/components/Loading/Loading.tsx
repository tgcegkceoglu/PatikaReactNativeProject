import LottieView from 'lottie-react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Loading = () => {
    return(
        <LottieView style = {styles.lottie}  source={require('../../assets/json/loading.json')} autoPlay loop />
    )
}

const styles = StyleSheet.create({
    lottie:{
        flex:1
    }
})

export default Loading;