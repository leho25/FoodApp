import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import HeaderUI from '../../../component/Header';
import SearchUI from '../../../component/SearchUI';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {style} from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AdminHome = ({navigation}) => {
  return (
    <View style={style.containerMain}>
      <HeaderUI title={'Đồ ăn'} />
      <SearchUI viewStyle={style.viewStyleSearch} />
      <View style={style.containerListItem}>
        <View style={style.cardItemFood}>
          <View style={style.devLayoutItem}>
            <View style={style.containerImage}>
              <Image
                source={{
                  uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                }}
                style={style.imageItem}
              />
            </View>
            <View style={style.containerInforItem}>
              <Text style={style.textInforItem}>Name</Text>
              <Text style={style.textInforItem}>Discount</Text>
              <Text style={style.textInforItem}>Price</Text>
              <Text style={style.textInforItem}>Nổi bật</Text>
            </View>
            <View style={style.containerIconItem}>
              <TouchableOpacity>
                <MaterialCommunityIcons name={'playlist-edit'} size={36} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name={'remove'} size={36} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.containerDescription}>
            <Text numberOfLines={3} style={style.textDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddFood');
        }}
        style={style.containerAddFood}>
        <Ionicons name={'add-circle-outline'} size={30} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default AdminHome;
