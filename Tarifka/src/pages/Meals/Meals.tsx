import React from 'react';
import { View,FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MealCard from '../../components/MealCard';
import styles from './Meals.style'
const Meals = ({route,navigation }) => {
  const { categoryName } = route.params;
  const {error,loading,data} = useFetch(`${Config.API_URL}/filter.php?c=${categoryName}`)

  if(loading){
    return <Loading />
  }

  if(error){
    return <Error />
  }

  const renderMeals = ({item}) => (
    <MealCard meal={item} onSelect ={()=> handleMealSelect(item.idMeal)} />
  )

  const handleMealSelect = id => {
    navigation.navigate('DetailPage',{id})
  }

  console.log(data)

  return (
    <View>
      <FlatList style ={styles.container} data={data.meals ?? []}  renderItem={renderMeals}/>
    </View>
  );
};

export default Meals;
