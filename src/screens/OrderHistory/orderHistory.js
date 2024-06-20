import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const OrderHistory = () => {
  return (
    <View style={{backgroundColor:"white"}}>
    <View style={style.main}>
      <View style={style.title}>
        <Text style={style.text}>Mã đơn hàng: </Text>
        <Text style={style.text}>Họ tên: </Text>
        <Text style={style.text}>Số điện thoại: </Text>
        <Text style={style.text}>Địa chỉ nhận: </Text>
        <Text style={style.text}>Thực đơn:</Text>
        <Text style={style.text}>Ngày đặt hàng: </Text>
      </View>
      <View style={style.info}>
        <Text style={style.textInfo}>0011165656</Text>
        <Text style={style.textInfo}>Lê Đức Phước</Text>
        <Text style={style.textInfo}>065156565</Text>
        <Text style={style.textInfo}>Bình Tân, Hồ Chí Minh</Text>
        <Text style={style.textInfo}>
          -Bò sốt tiêu đen(160 000 VNĐ) - Số lượng:1 Ga rang muoi(76 000VNĐ) -Số
          lượng: 2 Bò cuộn phô mai(99 000VNĐ) -Số lượng:3
        </Text>
        <Text style={style.textInfo}>28-06-2024, 05:40 PM</Text>
      </View>
    </View>
    <View style={style.viewTotal}>
        <Text style={style.textTotal}>Tổng Tiền:</Text>
        <Text style={style.textInfo}>Thanh toán: Tien mat</Text>
    </View>
    </View>
  );
};
export default OrderHistory;
