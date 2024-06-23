import {StyleSheet} from 'react-native';
import { colors } from '../../utils/color';
export default style = StyleSheet.create({
  container: {
    backgroundColor:colors.background,
    marginBottom:10,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 1,
  },
  containerHeader: {
    backgroundColor: '#fc5653',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  iconArrowBack: {position: 'absolute', left: 10},
  textHeader: {fontSize: 18, color: 'white'},
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
  viewPayMent:{
    flexDirection: 'row'
  },
  textTotal: {
    fontSize: 18,
    marginBottom: 10,
    color: 'red',
    fontWeight: 'bold',
    marginRight:20
  },
  textPayMent: {
    fontSize: 15,
    marginBottom: 10,
    color: 'black',
    fontWeight:"bold",
    marginLeft:20
  },
});
