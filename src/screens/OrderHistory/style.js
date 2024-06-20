import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
  main: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginHorizontal: 20,
  },
  title: {
    paddingTop: 20,
    width: 110,
  },
  info: {
    paddingTop: 20,
    width: 260,
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  textInfo: {
    fontSize: 15,
    marginBottom: 10,
    color: 'black',
  },
  viewTotal: {
    margin:20
  },
  textTotal: {
    fontSize: 18,
    marginBottom: 10,
    color: 'red',
    fontWeight: 'bold',
  },
});
