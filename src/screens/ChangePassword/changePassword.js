import {React, useState} from 'react';
import style from './style';
import TextInputUI from '../../component/TextInputUI';
import ButtonUI from '../../component/ButtonUI';
import TitleUI from '../../component/TitleUI';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChangePassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const isValidationOK = () =>
    password.length > 0 &&
    newPassword.length > 0 &&
    confirmNewPassword.length > 0;
  return (
    <View style={style.main}>
      <View style={style.containerHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.iconArrowBack}>
          <Ionicons name={'arrow-back'} size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={style.viewInput}>
      <TitleUI title="Đổi mật khẩu" />
        <TextInputUI
          onPress={text => {
            setPassword(text);
          }}
          value={password}
          title="Mật khẩu cũ"
        />
        <TextInputUI
          onPress={text => {
            setNewPassword(text);
          }}
          value={newPassword}
          title="Mật khẩu mới"
        />
        <TextInputUI
          onPress={text => {
            setConfirmNewPassword(text);
          }}
          value={confirmNewPassword}
          title="Xác nhận mật khẩu mới"
        />
        <View style={style.button}>
        <ButtonUI
          title="ĐỔI MẬT KHẨU"
          disabled={isValidationOK() == false}
          onPress={() => {
            alert('Change password');
          }}
        />
        </View>
      </View>
    </View>
  );
};
export default ChangePassword;
