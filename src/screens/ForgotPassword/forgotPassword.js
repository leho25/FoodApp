import {React, useState} from 'react';
import style from './style';
import TextInputUI from '../../component/TextInputUI';
import ButtonUI from '../../component/ButtonUI';
import TitleUI from '../../component/TitleUI';
import {Text, View} from 'react-native';
import {isValidEmail} from '../../utils/validation';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const isValidationOK = () => email.length > 0 && isValidEmail(email) == true;
  return (
    <View style={style.main}>
      <TitleUI title="Quên mật khẩu" />
      <TextInputUI
        onPress={text => {
          setErrorEmail(
            isValidEmail(text) == true ? '' : 'Email not is corret format',
          );
          setEmail(text);
        }}
        value={email}
        title="Email"
      />
      <Text style={style.textVadition}>{errorEmail}</Text>
      <ButtonUI
        title="GỬI LẠI MẬT KHẨU"
        disabled={isValidationOK() == false}
        onPress={() => {
          alert('send password');
        }}/>
    </View>
  );
};
export default ForgotPassword;
