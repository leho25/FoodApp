import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import HeaderUI from '../../../component/Header';
import SearchUI from '../../../component/SearchUI';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {style} from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  collection,
  db,
  deleteDoc,
  doc,
  getDocs,
} from '../../../component/firebase/firebaseConfig';

const AdminHome = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const productList = ({item}) => {
    const editProduct = () => {
      navigation.navigate('AddFood', {
        image: item.image,
        name: item.name,
        description: item.description,
        discount: item.discount,
        price: item.price,
        toggleCheckBox: item.toggleCheckBox,
        id: item.id,
      });
    };
    return (
      <View style={style.containerListItem}>
        <View style={style.cardItemFood}>
          <View style={style.devLayoutItem}>
            <View style={style.containerImage}>
              <Image
                source={{
                  uri: item?.image,
                }}
                style={style.imageItem}
              />
            </View>
            <View style={style.containerInforItem}>
              <Text style={style.textInforItem}>{item.name}</Text>
              <Text style={style.textInforItem}>{item.discount}</Text>
              <Text style={style.textInforItem}>{item.price}</Text>
              <Text style={style.textInforItem}>
                {item.toggleCheckBox ? 'Có' : 'Không'}
              </Text>
            </View>
            <View style={style.containerIconItem}>
              <TouchableOpacity onPress={() => editProduct(item.id)}>
                <MaterialCommunityIcons name={'playlist-edit'} size={36} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <FontAwesome name={'remove'} size={36} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.containerDescription}>
            <Text numberOfLines={3} style={style.textDescription}>
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products/'));
    const documents = [];
    querySnapshot.forEach(doc => {
      documents.push({id: doc.id, ...doc.data()});
    });
    setProducts(documents);
  };
  const deleteProduct = async docId => {
    const docRef = doc(db, 'products/', docId);
    console.log('docRef', docRef);
    try {
      await deleteDoc(docRef);
      console.log('Document successfully deleted!');
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  };
  const handleDelete = async id => {
    await deleteProduct(id);
  };
  useEffect(() => {
    getProducts();
  }, [products]);
  return (
    <View style={style.containerMain}>
      <HeaderUI title={'Đồ ăn'} />
      <SearchUI viewStyle={style.viewStyleSearch} />
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={productList}
        style={{flex: 1}}
      />
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
