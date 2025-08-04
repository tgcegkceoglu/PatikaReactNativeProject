import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import CategoryCard from '../../components/CategoryCard';
import styles from './Categories.style';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({ navigation }) => {
  const { error, loading, data } = useFetch(
    `${Config.API_URL}/${Config.CATEGORIES}`,
  );

  const renderCategoryCard = ({ item }) => (
    <CategoryCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  const handleCategorySelect = categoryName => {
    navigation.navigate('MealsPage', { categoryName });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      style={styles.container}
      data={data?.categories || []}
      renderItem={renderCategoryCard}
    />
  );
};

export default Categories;
