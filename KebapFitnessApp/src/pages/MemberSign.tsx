import {Alert, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { RootStackParamList} from '../types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'MemberSignScreen'>;

function MemberSign({navigation} : Props) {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userHometown, setUserHometown] = useState('');

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail || !userHometown) {
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler Boş Bırakılamaz!');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userHometown,
    };

    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <View>
      <Input
        label="Üye Adı"
        placeholder="Üyenin ismini giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üyenin soyadını giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üyenin yaşını giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üyenin e-posta adresini giriniz..."
        onChangeText={setUserMail}
      />
      <Input
        label="Üye Memleketi"
        placeholder="Üyenin memleketini giriniz..."
        onChangeText={setUserHometown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </View>
  );
}

export default MemberSign;
