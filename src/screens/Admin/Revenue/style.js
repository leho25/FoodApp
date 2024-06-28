import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

export default style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    borderBottomWidth: 0.5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 0.1,
  },
  boder: {
    borderBottomWidth: 0.5,
    marginBottom: 15,
  },
  main: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewDate: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    flex: 0.2,
  },
  viewSince: {
    width: 180,
  },
  viewToDate: {
    width: 180,
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
  },
  viewItem: {
    flex: 1,
  },
  viewTotalMain: {
    backgroundColor: '#D3D3D3',
    alignItems: 'flex-end',
    flex: 0.1,
    justifyContent: 'center',
  },
  viewTotal: {
    flexDirection: 'row',
    marginLeft: 20,
    padding: 10,
  },
  titleTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  textTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginRight: 10,
  },
  textItem: {
    color: 'black',
    fontSize: 16,
  },
  textToTalItem: {
    color: '#32CD32',
    fontSize: 18,
    marginRight: 15,
  },
  titleOrder: {
    marginRight: 10,
  },
  containerHeader: {
    backgroundColor: '#fc5653',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  textHeader: {fontSize: 18, color: 'white'},
  iconArrowBack: {position: 'absolute', left: 10},
});
