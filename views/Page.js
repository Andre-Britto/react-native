import React from "react";
import {View, Text} from "react-native";
import {css} from "../assets/css/Css";

export default function Page(props){
    return (
        <View style={css.textPage}>
            <Text>O nome da Empresa é {props.empresa} e seu ADM é {props.name}
            Comprou o produto {props.produto} na seguinte quantidade {props.quantidade}
            </Text>

        </View>
    )
}
