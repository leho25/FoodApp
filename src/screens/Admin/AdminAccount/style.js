import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

export default style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  main: {
    paddingBottom: 30,
  },
  viewUser: {
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
  viewLabel: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
  viewIcon: {
    marginTop: 15,
  },
  text: {
    fontSize: 18,
    color: 'black',
    margin: 15,
  },
  viewLogOut: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  textUser: {
    fontSize: 18,
    color: 'red',
    marginBottom: 15,
    fontWeight: 'bold',
  },
});
