import {React, useState} from 'react';
import style from './style';
import TextInputUI from '../../component/TextInputUI';
import ButtonUI from '../../component/ButtonUI';
import TitleUI from '../../component/TitleUI';
import {View, TouchableOpacity, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
    // console.log('auth()',auth())
    console.log('auth', auth.EmailAuthProvider);
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
            console.error('Error updating password:', error);
            Alert.alert('Failed to update password. Please try again later.');
          });
      })
      .catch(error => {
        // Handle re-authentication error
        console.error('Error re-authenticating user:', error);
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
            onPress={handleChangePassword}
          />
        </View>
      </View>
    </View>
  );
};
export default ChangePassword;
