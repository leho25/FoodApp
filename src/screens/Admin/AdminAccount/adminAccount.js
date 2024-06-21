import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { auth } from '../../../component/firebase/firebaseConfig';
import {StackActions} from '@react-navigation/native';

const AdminAccount = () => {
  const navigation = useNavigation();
  const userId = auth.currentUser.email;
  return (
    <View style={style.container}>
      <View style={style.main}>
        <View style={style.viewUser}>
          <View style={style.viewIcon}>
            <FontAwesome
              name="user-circle-o"
              size={50}
              color="rgb(236,237,238)"></FontAwesome>
          </View>
          <Text style={style.textUser}>{userId}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          alert('repot')
        }}>
        <View style={style.viewLabel}>
          <View style={style.viewIcon}>
            <FontAwesome name="bar-chart" size={24}></FontAwesome>
          </View>
          <Text style={style.text}>Báo cáo doanh thu</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ChangePassword');
        }}>
        <View style={style.viewLabel}>
          <View style={style.viewIcon}>
            <FontAwesome5 name="user-cog" size={20}></FontAwesome5>
          </View>
          <Text style={style.text}>Đổi mật khẩu</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          auth.signOut();
          navigation.dispatch(StackActions.popToTop());
        }}>
        <View style={style.viewLogOut}>
          <View style={style.viewIcon}>
            <MaterialCommunityIcons
              name="logout-variant"
              size={25}></MaterialCommunityIcons>
          </View>
          <Text style={style.text}>Đăng xuất</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default AdminAccount;
