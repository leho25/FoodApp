import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import HeaderUI from '../../../component/Header';
import SearchUI from '../../../component/SearchUI';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {style} from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AdminHome = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderUI title={'Đồ ăn'} />
      <SearchUI viewStyle={style.viewStyleSearch} />
      <View style={{flex: 1,padding:10}}>
        <View
          style={{
            marginBottom: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.38,
            shadowRadius: 10,
            elevation: 4,
            width: '100%',
            height: '40%',
            padding: 10,
            borderRadius: 5,
          }}>
          <View style={{width: '100%', height: '70%', flexDirection: 'row'}}>
            <View style={{width: '40%', height: '100%'}}>
              <Image
                source={{
                  uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                }}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <View
              style={{
                width: '45%',
                height: '100%',
                justifyContent: 'space-around',
                marginLeft: 10,
              }}>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Name</Text>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Discount</Text>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Price</Text>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Nổi bật</Text>
            </View>
            <View
              style={{
                width: '15%',
                height: '100%',

                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <MaterialCommunityIcons name={'playlist-edit'} size={36} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name={'remove'} size={36} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width: '100%', height: '30%'}}>
            <Text numberOfLines={3} style={{fontSize: 16, color: 'black'}}>
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
        <View
          style={{
            marginBottom: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.38,
            shadowRadius: 10,
            elevation: 4,
            width: '100%',
            height: '40%',
            padding: 10,
            borderRadius: 5,
          }}>
          <View style={{width: '100%', height: '70%', flexDirection: 'row'}}>
            <View style={{width: '40%', height: '100%'}}>
              <Image
                source={{
                  uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
                }}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <View
              style={{
                width: '45%',
                height: '100%',
                justifyContent: 'space-around',
                marginLeft: 10,
              }}>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Name</Text>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Discount</Text>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Price</Text>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Nổi bật</Text>
            </View>
            <View
              style={{
                width: '15%',
                height: '100%',

                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <MaterialCommunityIcons name={'playlist-edit'} size={36} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name={'remove'} size={36} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width: '100%', height: '30%'}}>
            <Text numberOfLines={3} style={{fontSize: 16, color: 'black'}}>
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
        style={{
          position: 'absolute',
          width: 50,
          height: 50,
          backgroundColor: '#008576',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50 / 2,
          right: 10,
          bottom: 10,
        }}>
        <Ionicons name={'add-circle-outline'} size={30} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default AdminHome;
