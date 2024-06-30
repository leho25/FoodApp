import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';
export default style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  textVadition: {
    color: 'red',
    fontSize: 15,
    marginLeft: 20,
  },
  viewInput: {
    flex: 0.9,
    justifyContent: 'center',
  },
  containerHeader: {
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  text:{
    marginBottom:20
  },
  iconArrowBack: {position: 'absolute', left: 10},
  button: {marginTop: 15},
});
