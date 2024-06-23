import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import style from './style';
import {
    auth,
  } from '../../component/firebase/firebaseConfig';

const FeedBack = () => {
  const [value, onChangeText] = useState('');
  // const userId = auth.currentUser.email;
  return (
    <View style={style.main}>
      <Text style={style.text}>Họ và tên (*)</Text>
      <TextInput
        style={style.input}
        onChangeText={text => {
          onChangeText(text);
        }}
        value={value}
      />
      <Text style={style.text}>Số điện thoại</Text>
      <TextInput
        style={style.input}
        onChangeText={text => {
          onChangeText(text);
        }}
        value={value}
        keyboardType="numeric"
      />
      <Text style={style.text}>Email</Text>
      <TextInput
        style={style.input}
        value={userId}
      />
      <Text style={style.text}>Bình luận (*)</Text>
      <TextInput
        style={style.inputComment}
        onChangeText={text => {
          onChangeText(text);
        }}
        value={value}
        
      />
      <TouchableOpacity
        onPress={() => {
          alert('send');
        }}>
        <View style={style.sendFeedBack}>
          <Text style={style.title}>Gửi phản hồi</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default FeedBack;
