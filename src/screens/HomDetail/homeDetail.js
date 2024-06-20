import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './styles';

const HomeDetail = ({navigation}) => {
  const [openModal, setOpenModal] = useState(false);
  const renderModalAddToCart = () => {
    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View style={style.containerModal}>
          <View style={style.containerCardAddToCart}>
            <View style={style.innerContainerCardAddToCart}>
              <View style={style.containerImageModal}>
                <Image
                  source={{
                    uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                  }}
                  style={style.imageModal}
                />
              </View>
              <View style={style.containerInforModal}>
                <Text style={style.textNameModal}>Name</Text>
                <Text style={style.textPriceModal}>Price</Text>
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
            </View>
            <View style={style.containerButton}>
              <TouchableOpacity
                onPress={() => setOpenModal(false)}
                style={style.btnCancelModal}>
                <Text style={style.textButton}>Hủy bỏ</Text>
              </TouchableOpacity>
              <View style={style.btnAddToCartModal}>
                <Text style={style.textButton}>Thêm vào giỏ hàng</Text>
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={'arrow-back'} size={30} color={'white'} />
        </TouchableOpacity>
        <Text style={style.textHeader}>Chi tiết món ăn</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons name={'cart-outline'} size={30} color={'white'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <Image
            source={{
              uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
            }}
            style={style.imageItem}
          />
          <View style={style.containerInforItem}>
            <Text style={style.textName}>Name</Text>
            <Text style={style.textPrice}>Price</Text>
          </View>
          <View style={style.line}></View>
        </View>
        <View style={style.containerDescription}>
          <Text style={style.textLabel}>Mô ta</Text>
          <Text style={style.textDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
        <View style={style.containerImageOther}>
          <View>
            <Text style={style.textLabel}>Một số hình ảnh khác</Text>
          </View>
          <View style={style.innerContainerImageOther}>
            <View style={style.viewImageOther}>
              <Image
                source={{
                  uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                }}
                style={style.imageOther}
              />
            </View>
            <View style={style.viewImageOther}>
              <Image
                source={{
                  uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                }}
                style={style.imageOther}
              />
            </View>
            <View style={style.viewImageOther}>
              <Image
                source={{
                  uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                }}
                style={style.imageOther}
              />
            </View>
          </View>
        </View>
        <View style={style.containerAddToCart}>
          <TouchableOpacity
            style={style.btnAddToCart}
            onPress={() => setOpenModal(true)}>
            <Text style={style.textBtnAddToCart}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>

        {renderModalAddToCart()}
      </ScrollView>
    </View>
  );
};

export default HomeDetail;
