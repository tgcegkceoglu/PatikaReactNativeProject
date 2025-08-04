import React from 'react';
import { Text, ScrollView, Image,View,TouchableWithoutFeedback, Linking} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import styles from './Detail.style';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({ route }) => {
  const { id } = route.params;
  const { data, loading, error } = useFetch(
    `${Config.API_URL}/lookup.php?i=${id}`,
  );
  const meal = data?.meals?.[0];

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
      <View style={styles.container}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.area}>{meal.strArea}</Text>
        <Text style={styles.instructions}>{meal.strInstructions}</Text>
        <TouchableWithoutFeedback onPress={()=> Linking.openURL(meal.strYoutube)}>
          <Text style = {styles.buttonText}>Watch On Youtube</Text>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

export default Detail;
