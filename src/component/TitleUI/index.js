import React from 'react';
import style from './style';
import {TouchableOpacity, View,Text} from 'react-native';

const TitleUI = ({title, textStyle}) => {
  return (
        <Text style={[style.text, textStyle]}>{title}</Text>
  );
};

export default TitleUI;