import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

const RevenueItem = (props) => {
  let {id, date, total} = props.revenue
  return (
    <View style={style.boder}>
      <View style={style.container}>
        <View style={style.titleOrder}>
          <Text >Mã đơn hàng:</Text>
          <Text>Ngày đặt hàng:</Text>
        </View>
        <View>
          <Text style={style.textItem}>{id}</Text>
          <Text style={style.textItem}>{date}</Text>
        </View>
      </View>
      <View style={style.viewTotal}>
        <Text style={style.textToTalItem}>Tổng Tiền:</Text>
        <Text style={style.textToTalItem}> {total}</Text>
      </View>
    </View>
  );
};
export default RevenueItem;
