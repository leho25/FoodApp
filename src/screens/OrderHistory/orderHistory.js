import React, {useState} from 'react';
import {Text, FlatList, View,TouchableOpacity} from 'react-native';
import OrderHistoryItem from './orderHistoryItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';
import HeaderUI from '../../component/Header';

const OrderHistory = ({navigation}) => {
  const[ok,setOK] = useState(true)
  const [orders, setOrder] = useState([
    {
      id: '151151555651651',
      name: 'Lê Đức Phước',
      phone: '065985484',
      adress: 'Bình Tân, Ho Chi Minh',
      menu: `Bò sốt tiêu đen(160 000 VNĐ) -Số lượng: 1
       -Gà rang muối(76 000 VNĐ) -Số lượng: 2
       - Cá mú hấp Hồng Koong(195 000 VNĐ) -Số lượng: 3
       - Sườn xào chua(195 000 VNĐ) -Số lượng: 3`,
      date: '28-06-2024 05:40 PM',
      total: '952 000 VNĐ',
      payment: 'Tiền mặt',
    },
    {
      id: '28479823451',
      name: 'Phan Duy Long',
      phone: '0877652148',
      adress: 'Bình Tân, Ho Chi Minh',
      menu: `Bò sốt tiêu đen(160 000 VNĐ) -Số lượng: 1
       -Gà rang muối(76 000 VNĐ) -Số lượng: 2
       - Cá mú hấp Hồng Koong(195 000 VNĐ) -Số lượng: 3
       - Sườn xào chua(195 000 VNĐ) -Số lượng: 1`,
      date: '28-06-2024 05:40 PM',
      total: '876 000 VNĐ',
      payment: 'Chuyển khoản',
    },
    {
      id: '258879823451',
      name: 'Thanh Hana',
      phone: '0325652148',
      adress: 'Bình Tân, Ho Chi Minh',
      menu: `Bò sốt tiêu đen(160 000 VNĐ) -Số lượng: 1
       -Gà rang muối(76 000 VNĐ) -Số lượng: 2
       - Cá mú hấp Hồng Koong(195 000 VNĐ) -Số lượng: 3`,
      date: '28-06-2024 05:40 PM',
      total: '266 000 VNĐ',
      payment: 'Tiền mặt',
    },
  ]);
  return (
    <View>
       <View style={style.containerHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.iconArrowBack}>
          <Ionicons name={'arrow-back'} size={30} color={'white'} />
        </TouchableOpacity>
        <Text style={style.textHeader}>Lịch sử đặt hàng</Text>
      </View>
      <FlatList
        data={orders}
        renderItem={({item}) => <OrderHistoryItem order={item} key={item.id} />}
        keyExtractor={eachKey => eachKey.id}
      />
    </View>
  );
};
export default OrderHistory;
