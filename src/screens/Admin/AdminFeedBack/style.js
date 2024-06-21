import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

export default style = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingStart: 20,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 7,
    marginBottom: 5,
    borderColor: 'white',
  },
  main: {
    flex: 1,
  },
  viewInfo: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
