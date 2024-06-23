import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export default style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background,
  },
  forgotPassword: {
    color: 'blue',
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  viewInput: {
    flex: 0.6,
    marginTop: 20,
  },
  viewLogin: {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  viewRegister: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRegister: {
    color: 'orange',
    fontSize: 15,
  },
  textNoAccount: {
    color: 'black',
    fontSize: 15,
  },
  textVadition: {
    color: 'red',
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 1,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    color: '#333',
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 18,
  },
});
