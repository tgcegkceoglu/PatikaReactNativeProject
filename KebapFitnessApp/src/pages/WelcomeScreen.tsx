import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../components/Button';
import { RootStackParamList } from '../types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;

function WelcomeScreen({ navigation }: Props) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kebap Fitness Salonu</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

export default WelcomeScreen;
