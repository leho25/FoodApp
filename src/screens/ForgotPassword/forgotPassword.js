import {React, useState} from 'react';
import style from './style';
import TextInputUI from '../../component/TextInputUI';
import ButtonUI from '../../component/ButtonUI';
import TitleUI from '../../component/TitleUI';
import {Text, View, TouchableOpacity} from 'react-native';
import {isValidEmail} from '../../utils/validation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const isValidationOK = () => email.length > 0 && isValidEmail(email) == true;
  return (
    <View style={style.main}>
       <View style={style.containerHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.iconArrowBack}>
          <Ionicons name={'arrow-back'} size={30} color={'black'} />
        </TouchableOpacity>
      </View>
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
        autoFocus={true}
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
