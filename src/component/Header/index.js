import React from 'react';
import {style} from './style';
import {View, Text} from 'react-native';

const HeaderUI = ({title}) => {
  return (
    <View style={style.containerHeader}>
      <Text style={style.textHeader}>{title}</Text>
    </View>
  );
};

export default HeaderUI;
