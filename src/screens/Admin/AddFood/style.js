import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#fc5653',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  textHeader: {fontSize: 26, fontWeight: '500', color: 'white'},
  containerFormInputModal: {gap: 8, margin: 10},
  textLabelInputModal: {
    fontSize: 16,
    fontWeight: '500',
  },
  inputModal: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  descriptionInput: {
    textAlignVertical: 'top',
  },
  colorWarning: {
    color: 'red',
  },
  containerMain: {flex: 1},
  iconArrowBack: {position: 'absolute', left: 10},
  containerButtonAddFood:{flex: 1},
  btnAddFood: {
    width: '95%',
    height: 50,
    backgroundColor: 'red',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnAddFood: {fontSize: 20, fontWeight: '500', color: 'white'},
});
