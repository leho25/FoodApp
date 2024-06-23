import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Swiper from 'react-native-swiper';
import {style} from './styles';
import SearchUI from '../../component/SearchUI';
const Home = ({navigation}) => {
  const listImage = [
    'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
    'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
    'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
    'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
  ];
  return (
    <View style={style.container}>
      <SearchUI />
      <ScrollView>
        <View style={style.containerSwiper}>
          <Swiper
            style={style.swiper}
            showsButtons={true}
            buttonWrapperStyle={{position: 'absolute', top: 0}}
            paginationStyle={{
              bottom: -23,
            }}>
            {listImage.map((item, index) => (
              <View key={index} style={{height: 200}}>
                <Image
                  source={{uri: item}}
                  style={style.imageSwiper}
                  resizeMode="cover"
                />
              </View>
            ))}
          </Swiper>
        </View>
        <View style={style.containerListItemLabel}>
          <View>
            <Text style={style.textLabel}>Gợi ý món ăn</Text>
          </View>
          <View style={style.containerList}>
            <TouchableOpacity
              style={style.btnItem}
              onPress={() => navigation.navigate('HomeDetail')}>
              <View style={style.containerDiscount}>
                <Text style={style.textDiscount}>Giảm 10%</Text>
              </View>
              <Image
                source={{
                  uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                }}
                style={style.listImageItem}
              />
              <View style={{marginTop: 5}}>
                <Text style={style.textName}>Name</Text>
                <Text style={style.textPriceDiscount}>Gia Giam</Text>
                <Text style={style.textPrice}>Gia</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
