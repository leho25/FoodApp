import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export default style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor:colors.background
      }, 
    viewInput:{
        flex: 0.9,
    },
    viewRegister:{
        flex:0.1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    textRegister:{
        color:'orange',
        fontSize:15
    },
    textNoAccount:{
        color:'black',
        fontSize:15
    },
    textVadition:{
        color:'red',
        fontSize:15,
        marginLeft:20,
        marginBottom:10
    },
    containerHeader: {
        height: 50,
        paddingHorizontal: 10,
        justifyContent:"center",
        marginBottom:90
      },
      iconArrowBack: {position: 'absolute', left: 10},
})

