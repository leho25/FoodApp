import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FeedBackItem = (props) => {
    let {name, comment} = props.feedback
  return (
    <View
      style={style.container}>
      <FontAwesome name="user-circle-o" size={50} color="rgb(236,237,238)" />

      <View style={style.viewInfo}>
        <Text style={style.text}>{name}</Text>
        <Text>{comment}</Text>
      </View>
    </View>
  );
};
export default FeedBackItem;
