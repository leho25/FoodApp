import {React, useState} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import style from './style';
import FeedBackItem from './feedBackItem';
import HeaderUI from '../../../component/Header';


const AdminFeedBack = props => {
  const [feedbacks, setFeedback] = useState([
    {
      name: 'phuoc@gmail.com',
      comment: 'Giao hang nhanh',
    },
    {
      name: 'leho@gmail.com',
      comment: 'It is a long established fact that a reader will be',
    },
    {
      name: 'phuocld2001@gmail.com',
      comment: 'There are many variations of passages of Lorem Ipsum available',
    },
    {
      name: 'truong@gmail.com',
      comment: 'All the Lorem Ipsum generators on the Internet tend to repeat',
    },
    {
      name: 'thanh@gmail.com',
      comment:
        'Lorem Ipsum is therefore always free from repetition, injected humour',
    },
    {
      name: 'long@gmail.com',
      comment:
        'Lorem Ipsum is therefore always free from repetition, injected humour',
    },
    {
      name: 'thanhphuong@gmail.com',
      comment:
        'Lorem Ipsum is therefore always free from repetition, injected humour',
    },
    {
      name: 'duy@gmail.com',
      comment:
        'Lorem Ipsum is therefore always free from repetition, injected humour',
    },
    {
      name: 'vyvy@gmail.com',
      comment:
        'Lorem Ipsum is therefore always free from repetition, injected humour',
    },
  ]);
  return (
    <View style={style.main}>
      <HeaderUI title="Phản hồi"/>
      <FlatList
        data={feedbacks}
        renderItem={({item}) => <FeedBackItem feedback = {item}  key={item.name}/>}
        keyExtractor={eachKey => eachKey.name}
      />
    </View>
  );
};
export default AdminFeedBack;
