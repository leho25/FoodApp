import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export default style = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor:colors.background,
  },
  input: {
    height: 45,
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:"red",
    borderRadius:5,
    fontSize:18
  },
  inputComment: {
    height: 80,
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:"red",
    borderRadius:10
  },
  text:{
    color:"black",
    marginLeft:12,
    fontSize:15,
    marginTop:12,
    fontWeight:"bold"
  },
  sendFeedBack:{
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
    height:50,
    borderRadius:10,
    marginHorizontal:100,
    marginTop:40
},
title:{
    color: 'white',
    fontSize:18
},
});
