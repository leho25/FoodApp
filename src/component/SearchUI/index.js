import React from 'react';
import {style} from './style';
import {View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchUI = ({viewStyle}) => {
  return (
    <View style={[style.containerSearch, viewStyle]}>
      <TextInput style={style.textInput} placeholder="Tên món ăn" />
      <View style={style.containerIconSearch}>
        <Ionicons name={'search'} size={20} />
      </View>
    </View>
  );
};

export default SearchUI;
