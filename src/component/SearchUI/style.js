import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  containerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'red',
    paddingLeft: 20,
  },
  containerIconSearch: {
    position: 'absolute',
    right: 30,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderColor: 'red',
  },
});
