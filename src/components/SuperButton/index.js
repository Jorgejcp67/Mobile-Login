import React from "react";
import { TouchableHighlight, StyleSheet, View, Text, Alert } from "react-native";


const SuperButton =(props) => {
    return (
        <TouchableHighlight 
        style= { style. superButton}
        onPress={props.acao}
        >
            <View style={style.button}>
                <Text style={style.valor}>{props.valor}</Text>
            </View>
            </TouchableHighlight>

    );
}

 const style =StyleSheet.create({
    superButton:{

    },
    button:{
     alignItens:"center",
     backgroundColor:'rgb(203, 196, 215)',
     padding:12,
     width:300,
     
     
    },
    valor :{
        fontSize:20,
        color:"#f6e0e0",
        fontWeight:'bold'
    } 

 });
 export default SuperButton;