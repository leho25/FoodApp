import React from "react";
import { TextInput } from "react-native";
import style from "./style";

const TextInputUI = ({title,onPress,value,styleTextInput,secureTextEntry}) => {
    return(
        <TextInput 
            placeholder={title}
            onChangeText={onPress}
            value={value}
            style={[style.textInput,styleTextInput]}
            secureTextEntry={secureTextEntry}
        />
    )
}

export default TextInputUI