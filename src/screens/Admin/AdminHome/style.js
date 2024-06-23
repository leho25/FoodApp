import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  viewStyleSearch: {
    marginTop: 10,
  },
  containerMain: {flex: 1, backgroundColor: 'white'},
  containerListItem: {flex: 1, padding: 10},
  cardItemFood: {
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.38,
    shadowRadius: 10,
    elevation: 1,
    width: '100%',
    height: '40%',
    padding: 10,
    borderRadius: 1,
  },
  devLayoutItem: {width: '100%', height: '70%', flexDirection: 'row'},
  containerImage: {width: '40%', height: '100%'},
  imageItem: {width: '100%', height: '100%', borderRadius: 10},
  containerInforItem: {
    width: '45%',
    height: '100%',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  textInforItem: {fontSize: 18, fontWeight: '500'},
  containerIconItem: {
    width: '15%',
    height: '100%',

    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerDescription: {width: '100%', height: '30%'},
  textDescription: {fontSize: 16, color: 'black'},
  containerAddFood: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#008576',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50 / 2,
    right: 10,
    bottom: 10,
  },
});
