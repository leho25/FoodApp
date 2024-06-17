import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
const cardItem = (props) => {
    const {name,price,discount,image} = props
  return (
    <View style={style.containerList}>
      <TouchableOpacity
        style={style.btnItem}
        onPress={() => console.log('alo')}>
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
      <View style={{width: '48%', marginTop: 10}}>
        <Image
          source={{
            uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
          }}
          style={{width: '100%', height: 130, borderRadius: 10}}
        />
        <View style={{marginTop: 5}}>
          <Text>Name</Text>
          <Text>Gia Giam</Text>
          <Text>Gia</Text>
        </View>
      </View>
      <View style={{width: '48%', marginTop: 10}}>
        <Image
          source={{
            uri: 'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
          }}
          style={{width: '100%', height: 130, borderRadius: 10}}
        />
        <View style={{marginTop: 5}}>
          <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
            Name
          </Text>
          <Text>Gia Giam</Text>
          <Text>Gia</Text>
        </View>
      </View>
    </View>
  );
};

export default cardItem;
