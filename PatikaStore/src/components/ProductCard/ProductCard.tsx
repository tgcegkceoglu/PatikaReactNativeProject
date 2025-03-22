import React from 'react';
import {Image, Text, View} from 'react-native';
import {ProductType} from '../../types/product/product_type';
import styles from './ProductCard.style';

const ProductCard = ({product}: {product: ProductType}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgURL}} style={styles.image} />
      <Text style={styles.title} >{product.title}</Text>
      <Text style={styles.price} >{product.price}</Text>
      {product.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
    </View>
    
  );
};

export default ProductCard;
