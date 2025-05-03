import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RootStackParamList} from '../types/RootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'MemberResultScreen'>;

const MemberResultScreen: React.FC<Props> = ({route}) => {
  const {user} = route.params;

  return (
    <View>
      <Text style={styles.message}>Kayıt Tamamlandı</Text>
      <Text style={styles.label}>Üye Adı: {user.userName}</Text>
      <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
      <Text style={styles.label}>Üye Yaşı: {user.userAge}</Text>
      <Text style={styles.label}>Üye E-Posta Adresi: {user.userMail}</Text>
      <Text style={styles.label}>Üye Memleketi:{user.userHometown} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  message:{
    fontWeight:'bold',
    fontSize:50,
    textAlign:'center'
  }
});

export default MemberResultScreen;
