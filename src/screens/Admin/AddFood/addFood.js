import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style';
const AddFood = ({navigation}) => {
  return (
    <View style={style.containerMain}>
      <View style={style.containerHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.iconArrowBack}>
          <Ionicons name={'arrow-back'} size={30} color={'white'} />
        </TouchableOpacity>
        <Text style={style.textHeader}>Thêm món ăn</Text>
      </View>
      <ScrollView>
        <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Tên món ăn</Text>
          <TextInput style={style.inputModal} placeholder="Tên.." />
        </View>
        <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Mô tả món ăn</Text>
          <TextInput
            style={[style.inputModal, style.descriptionInput]}
            placeholder="Mô tả.."
            multiline
            numberOfLines={4}
          />
        </View>
        <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Giá món ăn</Text>
          <TextInput style={style.inputModal} placeholder="Giá.." />
        </View>
        <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Khuyến mãi</Text>
          <TextInput style={style.inputModal} placeholder="Khuyễn mãi.." />
        </View>
        <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Link ảnh món ăn</Text>
          <TextInput style={style.inputModal} placeholder="Link ảnh.." />
        </View>
        <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Link ảnh banner</Text>
          <Text style={style.colorWarning}>Phân cách với nhau bằng [ , ]</Text>
          <TextInput
            style={[style.inputModal, style.descriptionInput]}
            placeholder="Link ảnh banner.."
            multiline
            numberOfLines={4}
          />
        </View>
        <View style={style.containerButtonAddFood}>
          <TouchableOpacity style={style.btnAddFood}>
            <Text style={style.textBtnAddFood}>THÊM</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddFood;
