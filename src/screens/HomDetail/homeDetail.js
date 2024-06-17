import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const windowHeight = Dimensions.get('window').height;
const HomeDetail = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#fc5653',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={'arrow-back'} size={30} color={'white'} />
        </TouchableOpacity>
        <Text style={{fontSize: 26, fontWeight: '500', color: 'white'}}>
          Chi tiết món ăn
        </Text>
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
            style={{height: 200}}
          />
          <View style={{marginHorizontal: 20, marginTop: 10}}>
            <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
              Name
            </Text>
            <Text style={{fontSize: 20, fontWeight: '500', color: 'red'}}>
              Price
            </Text>
          </View>
          <View
            style={{
              height: 2,
              borderWidth: 1,
              marginTop: 10,
              marginHorizontal: 20,
              borderColor: '#fc5653',
            }}></View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: '500', color: 'red'}}>
            Mô ta
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'black',
              marginTop: 5,
            }}>
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
        <View
          style={{
            marginTop: 10,
            width: '100%',
            windowHeight: '100%',
            paddingHorizontal: 20,
          }}>
          <View>
            <Text style={{fontSize: 16, fontWeight: '500', color: 'red'}}>
              Một số hình ảnh khác
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '48%',
                height: 150,
                backgroundColor: 'white',
                marginTop: 10,
              }}>
              <Image
                source={{
                  uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                }}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <View
              style={{
                width: '48%',
                height: 150,
                backgroundColor: 'white',
                marginTop: 10,
              }}>
              <Image
                source={{
                  uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                }}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <View
              style={{
                width: '48%',
                height: 150,
                backgroundColor: 'white',
                marginTop: 10,
              }}>
              <Image
                source={{
                  uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                }}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginVertical: 10,
            width: '100%',
            height: 50,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 26, color: 'white', fontWeight: '500'}}>
              Thêm vào giỏ hàng
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeDetail;
