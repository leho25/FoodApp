import {
  auth,
  signInWithEmailAndPassword,
} from '../../component/firebase/firebaseConfig';
import {React, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import {isValidEmail, isValidPassword} from '../../utils/validation';
import {useNavigation} from '@react-navigation/native';
import style from './style';

const Login = () => {
  const navigation = useNavigation();
  const [keyboardIsShow, setkeyboardIsShow] = useState(false);
  const [selectedId, setSelectedId] = useState();
  //state for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  //state for store email, password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //state check data is validate
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setkeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setkeyboardIsShow(false);
    });
  });
  return (
    <View style={style.main}>
      <View style={style.viewLogin}>
        <Text style={style.text}>Đăng Nhập</Text>
      </View>
      <View style={style.viewInput}>
        <TextInput
          onChangeText={text => {
            setErrorEmail(
              isValidEmail(text) == true ? '' : 'Email not is corret format',
            );
            setEmail(text);
          }}
          value={email}
          style={style.textInput}
          placeholder="Email"
        />
        <Text style={style.textVadition}>{errorEmail}</Text>
        <TextInput
          onChangeText={text => {
            setErrorPassword(
              isValidPassword(text) == true
                ? ''
                : 'Password must be at least 6 characters',
            );
            setPassword(text);
          }}
          value={password}
          secureTextEntry={true}
          style={style.textInput}
          placeholder="Mật khẩu"
        />
        <Text style={style.textVadition}>{errorPassword}</Text>
        <TouchableOpacity
          disabled={isValidationOK() == false}
          onPress={() => {
            signInWithEmailAndPassword(auth, email, password)
              .then(userCredential => {
                const user = userCredential.user;
                navigation.navigate('TabScreen')
              })
              .catch(error => {
                alert(`cannot signin, error: ${error.message}`);
              });
          }}>
          <View style={style.buttonLogin}>
            <Text style={style.textLogin}>ĐĂNG NHẬP TÀI KHOẢN</Text>
          </View>
        </TouchableOpacity>
        <Text style={style.forgotPassword}>Quên mật khẩu</Text>
      </View>
      {keyboardIsShow == false && (
        <View style={style.viewRegister}>
          <Text style={style.textNoAccount}>Chưa có tài khoản?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={style.textRegister}> Đăng ký</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default Login;
