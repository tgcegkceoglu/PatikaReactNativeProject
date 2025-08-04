import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const Error = () => {
  return (
    <LottieView
      style={styles.lottie}
      source={require('../../assets/json/error.json')}
      autoPlay
      loop
    />
  );
};

const styles = StyleSheet.create({
    lottie:{
        flex:1,
        marginHorizontal:20,
    }
})

export default Error;
