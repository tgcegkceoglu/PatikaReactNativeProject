import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import product_data from './product_data.json';
import ProductCard from './components/ProductCard';
import {ProductType} from './types/product/product_type';
import SearchTextInput from './components/SearchTextInput';

function App() {
  const renderProduct = ({item}: {item: ProductType}) => (
    <ProductCard product={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <SearchTextInput />
      <FlatList
        data={product_data}
        renderItem={renderProduct}
        horizontal={false}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginRight: 6,
    flex: 1,
  },
  header: {
    color: '#800080',
    fontWeight: 'bold',
    fontSize: 25,
  },

});
export default App;
