import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Alert, ScrollView, Keyboard } from 'react-native';
import style from './style';
import {
    auth,
  } from '../../component/firebase/firebaseConfig';
import HeaderUI from '../../component/Header';

const FeedBack = () => {
  const [value, onChangeText] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const handleCheckEmpty = () => {
    if (name.trim() === '' || comment.trim() === '') {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin bắt buộc');
    } 
  };
  const userId = auth.currentUser.email;
  return (
    <View style={style.main}>
      <HeaderUI title="Phản hồi"/>
      <ScrollView>
      <Text style={style.text}>Họ và tên (*)</Text>
      <TextInput
        style={style.input}
        onChangeText={text => {
          setName(text);
        }}
        value={name}
        autoFocus={true}
        onSubmitEditing={Keyboard.dismiss}
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
          setComment(text);
        }}
        value={comment}  
        multiline={true}
        editable={true}
        onSubmitEditing={Keyboard.dismiss}
      />
      <TouchableOpacity
        onPress={() => {
          handleCheckEmpty()
        }}>
        <View style={style.sendFeedBack}>
          <Text style={style.title}>Gửi phản hồi</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default FeedBack;
