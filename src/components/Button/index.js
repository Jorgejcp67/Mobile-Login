import React from "react";
import { Button, Alert } from "react-native";
// não aceita style.
const MeuButton =(props) =>{
    return(
        <Button
        style= ""
        color= "blue"
        title ={props.titulo}
        onPress={props.acao}
        />
    );
}

export default MeuButton;