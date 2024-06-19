import {React, useState} from 'react';
import style from './style';
import TextInputUI from '../../component/TextInputUI';
import ButtonUI from '../../component/ButtonUI';
import TitleUI from '../../component/TitleUI';
import {View} from 'react-native';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const isValidationOK = () =>
    password.length > 0 &&
    newPassword.length > 0 &&
    confirmNewPassword.length > 0;
  return (
    <View style={style.main}>
      <TitleUI title="Đổi mật khẩu" />
      <View style={style.viewInput}>
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
      </View>
      <ButtonUI
        title="ĐỔI MẬT KHẨU"
        disabled={isValidationOK() == false}
        onPress={() => {
          alert('Change password');
        }}
      />
    </View>
  );
};
export default ChangePassword;
