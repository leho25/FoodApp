import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
    main: {
        flex: 1,
      }, 
    text: {
        fontWeight: 'bold',
        color:'red',
        fontSize: 20,
        alignSelf:"center",
        marginTop:85
    },
    buttonLogin:{
        backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        height:50,
        borderRadius:10,
        marginHorizontal:20
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginHorizontal: 20,
        marginVertical:1
    },
    forgotPassword:{
        color:"blue",
        fontSize:15,
        alignSelf:"center",
        marginTop:10,
        fontWeight:"bold"
    },
    viewInput:{
        flex: 0.6
    },
    viewLogin:{
        flex: 0.3
    },
    viewRegister:{
        flex: 0.1,
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
    textLogin:{
        color: 'white'
    },
    textVadition:{
        color:'red',
        fontSize:15,
        marginLeft:20,
    }
})

