import React from 'react';
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {style} from './styles';

const Cart = () => {
  return (
    <View style={style.container}>
      <View style={style.containerHeader}>
        <Text style={style.textHeader}>Giỏ hàng</Text>
      </View>
      <ScrollView>
        <View style={style.containerCart}>
          <View style={style.innerContainerCart}>
            <View style={style.containerImageItem}>
              <Image
                source={{
                  uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                }}
                style={style.imageItem}
              />
            </View>
            <View style={style.containerInforItem}>
              <Text style={style.textName}>Name</Text>
              <Text style={style.textPrice}>Price</Text>
              <View style={style.containerUpDownQuality}>
                <TouchableOpacity style={style.btnUpDownQuality}>
                  <Text style={style.textUpAndDownQuality}>-</Text>
                </TouchableOpacity>
                <View style={style.btnUpDownQuality}>
                  <Text style={style.textUpAndDownQuality}>0</Text>
                </View>
                <TouchableOpacity style={style.btnUpDownQuality}>
                  <Text style={style.textUpAndDownQuality}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.containerRemoveItem}>
              <TouchableOpacity style={style.btnRemove}>
                <Text style={style.textRemove}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.line}></View>
        </View>
      </ScrollView>
      <View style={style.containerOrderAndTotalPrice}>
        <View style={style.containerTotalPrice}>
          <Text style={style.textTotal}>Tổng tiền:</Text>
          <Text style={style.textPrice}>Price</Text>
        </View>
        <View style={style.containerOrder}>
          <TouchableOpacity style={style.btnOrder}>
            <Text style={style.textOrder}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
