import {
  auth,
  signInWithEmailAndPassword,
} from '../../component/firebase/firebaseConfig';
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('TabScreen');
      }}
      style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{color: 'red'}}>lego</Text>
    </TouchableOpacity>
  );
};

export default Login;
