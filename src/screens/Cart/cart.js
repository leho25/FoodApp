import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {style} from './styles';

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const renderModalOrder = () => {
    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View style={style.containerModal}>
          <View style={style.containerFormOrderModal}>
            <View style={style.containerHeaderModal}>
              <Text style={style.textHeaderModal}>Chi tiết đơn hàng</Text>
              <Text style={style.textPriceModal}>Giá</Text>
            </View>
            <Text style={style.textInforModal}>
              - Bò cuộn phô mai (213 000 VNĐ) - Số lượng: 1
            </Text>
            <View style={style.containerFormInputModal}>
              <Text style={style.textLabelInputModal}>
                Phương thức thanh toán
              </Text>
              <TextInput style={style.inputModal} />
            </View>
            <View style={style.containerFormInputModal}>
              <Text style={style.textLabelInputModal}>Họ và Tên</Text>
              <TextInput style={style.inputModal} />
            </View>
            <View style={style.containerFormInputModal}>
              <Text style={style.textLabelInputModal}>Số điện thoại</Text>
              <TextInput style={style.inputModal} />
            </View>
            <View style={style.containerFormInputModal}>
              <Text style={style.textLabelInputModal}>Địa chỉ giao hàng</Text>
              <TextInput style={style.inputModal} />
            </View>
            <View style={style.containerButton}>
              <TouchableOpacity
                onPress={() => setOpenModal(false)}
                style={style.btnCancelModal}>
                <Text style={style.textButton}>Hủy bỏ</Text>
              </TouchableOpacity>
              <View style={style.btnAddToCartModal}>
                <Text style={style.textButton}>Đặt hàng</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
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
          <TouchableOpacity
            style={style.btnOrder}
            onPress={() => setOpenModal(true)}>
            <Text style={style.textOrder}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderModalOrder()}
    </View>
  );
};

export default Cart;
