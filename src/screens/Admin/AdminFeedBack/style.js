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
    marginBottom: 2,
    borderColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 8,
  },
  main: {
    flex: 1,
    backgroundColor:colors.background
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
