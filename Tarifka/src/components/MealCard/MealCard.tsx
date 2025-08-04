import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  View,
} from 'react-native';
import styles from './MealCard.style';
const MealCard = ({ meal, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{ uri: meal.strMealThumb }}
        >
            <View style ={ styles.textContainer}>
                  <Text numberOfLines={1} style={styles.text}>
            {meal.strMeal}
          </Text>
            </View>
        
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
