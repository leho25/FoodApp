import React, {useState} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import CheckBox from 'expo-checkbox';

const AdminOrderItem = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  let {id, name, phone, adress, menu, date, total, payment} = props.order;
  return (
    <View style={style.container}>
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
          <Text style={style.textInfo}>{id}</Text>
          <Text style={style.textInfo}>{name}</Text>
          <Text style={style.textInfo}>{phone}</Text>
          <Text style={style.textInfo}>{adress}h</Text>
          <Text style={style.textInfo}>{menu} </Text>
          <Text style={style.textInfo}>{date}</Text>
        </View>
      </View>
      <View style={style.viewTotal}>
        <View style={style.viewPayMent}>
          <Text style={style.textTotal}>Tổng Tiền:</Text>
          <Text style={style.textTotal}>{total}</Text>
        </View>
        <View style={style.viewPayMent}>
          <Text style={style.textInfo}>Thanh toán: </Text>
          <Text style={style.textPayMent}>{payment}</Text>  
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            style={style.checkbox}
          />
        </View>
      </View>
    </View>
  );
};
export default AdminOrderItem;
