import React from 'react';
import {TextInput} from 'react-native';
import styles from './SearchTextInput.style';

function SearchTextInput() {
  const [text, onChangeText] = React.useState('');

  return (
    <TextInput
      placeholder="Ara.."
      cursorColor="black"
      placeholderTextColor={'#bfc1c4'}
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
    />
  );
}

export default SearchTextInput;
