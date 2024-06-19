import React from 'react';
import style from './style';
import {TouchableOpacity, View,Text} from 'react-native';

const ButtonUI = ({title, onPress, textStyle}) => {
  return (
    <TouchableOpacity  onPress={onPress}>
      <View style={style.container}>
        <Text style={[style.title, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonUI;