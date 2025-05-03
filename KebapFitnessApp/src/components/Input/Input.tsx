import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './Input.style';
import {InputProps} from './Input.types';

const Input: React.FC<InputProps> = ({label,placeholder,onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style= { styles.input_container}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText}/>
      </View>
    </View>
  );
};

export default Input;
