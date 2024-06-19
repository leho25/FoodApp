import {
  auth,
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from '../../component/firebase/firebaseConfig';
import {React, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import {isValidEmail, isValidPassword} from '../../utils/validation';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import TextInputUI from '../../component/TextInputUI';
import ButtonUI from '../../component/ButtonUI';
import TitleUI from '../../component/TitleUI';

const Register = () => {
  const navigation = useNavigation();
  const [keyboardIsShow, setkeyboardIsShow] = useState(false);
  //state for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  //state for store email, password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <TitleUI title="Đăng Ký" />
      <View style={style.viewInput}>
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
        <TextInputUI
          onPress={text => {
            setErrorPassword(
              isValidPassword(text) == true
                ? ''
                : 'Password must be at least 6 characters',
            );
            setPassword(text);
          }}
          value={password}
          secureTextEntry={true}
          title="Mật khẩu"
        />
        <Text style={style.textVadition}>{errorPassword}</Text>
        <ButtonUI
          title="ĐĂNG KÝ TÀI KHOẢN"
          disabled={isValidationOK() == false}
          onPress={() => {
            createUserWithEmailAndPassword(auth, email, password)
              .then(userCredential => {
                const user = userCredential.user;
                sendEmailVerification(user).then(() => {
                  console.log('Email verifieltion sent');
                });
                firebaseSet(
                  firebaseDatabaseRef(firebaseDatabase, `users/${user.uid}`),
                  {
                    email: user.email,
                    emailVerified: user.emailVerified,
                    accessToken: user.accessToken,
                  },
                );
                navigation.navigate('Login');
              })
              .catch(error => {
                alert(`cannot signin, error: ${error.message}`);
              });
          }}
        />
      </View>
      {keyboardIsShow == false && (
        <View style={style.viewRegister}>
          <Text style={style.textNoAccount}>Đã có tài khoản?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={style.textRegister}> Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default Register;
