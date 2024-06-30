import {React, useState} from 'react';
import style from './style';
import TextInputUI from '../../component/TextInputUI';
import ButtonUI from '../../component/ButtonUI';
import TitleUI from '../../component/TitleUI';
import {View, TouchableOpacity, Alert, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isValidPassword} from '../../utils/validation';
import {
  auth,
  EmailAuthProvider,
  updatePassword,
  reauthenticateWithCredential,
} from '../../component/firebase/firebaseConfig';

const ChangePassword = ({navigation}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorNewPassword, setErrorNewPassword] = useState('');
  const [errorConfirmNewPassword, setErrorConfirmNewPassword] = useState('');
  const isValidationOK = () =>
    currentPassword.length > 0 &&
    newPassword.length > 0 &&
    confirmNewPassword.length > 0;
  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      Alert.alert('Passwords do not match. Please re-enter.');
      setNewPassword('');
      setConfirmNewPassword('');
      return;
    }
    const user = auth.currentUser;
    // Re-authenticate user to verify current password
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword,
    );
    console.log(credential);

    reauthenticateWithCredential(user, credential)
      .then(() => {
        // User re-authenticated, now update password

        updatePassword(user, newPassword)
          .then(() => {
            // Password updated successfully
            Alert.alert('Password updated successfully.');
            setNewPassword('');
            setConfirmNewPassword('');
          })
          .catch(error => {
            // Handle password update error
            Alert.alert('Failed to update password. Please try again later.');
          });
      })
      .catch(error => {
        // Handle re-authentication error
        Alert.alert(
          'Failed to re-authenticate. Please check your current password.',
        );
      });
  };

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
            setCurrentPassword(text);
          }}
          value={currentPassword}
          title="Mật khẩu cũ"
          autoFocus={true}
          styleTextInput={style.text}
        />
        <TextInputUI
          onPress={text => {
            setErrorNewPassword(
              isValidPassword(text) == true
                ? ''
                : 'Password must be at least 6 characters',
            );
            setNewPassword(text);
          }}
          value={newPassword}
          title="Mật khẩu mới"
        />
        <Text style={style.textVadition}>{errorNewPassword}</Text>
        <TextInputUI
          onPress={text => {
            setErrorConfirmNewPassword(
              isValidPassword(text) == true
                ? ''
                : 'Password must be at least 6 characters',
            );
            setConfirmNewPassword(text);
          }}
          value={confirmNewPassword}
          title="Xác nhận mật khẩu mới"
        />
        <Text style={style.textVadition}>{errorConfirmNewPassword}</Text>
        <View style={style.button}>
          <ButtonUI
            title="ĐỔI MẬT KHẨU"
            disabled={isValidationOK() == false}
            onPress={handleChangePassword}
          />
        </View>
      </View>
    </View>
  );
};
export default ChangePassword;
