import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';
export default style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  viewInput: {
    flex: 0.9,
    justifyContent:"center",
  },
  containerHeader: {
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  iconArrowBack: {position: 'absolute', left: 10},
  button:{marginTop:15}
});
