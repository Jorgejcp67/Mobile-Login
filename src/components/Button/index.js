import React from "react";
import { Button, Alert } from "react-native";
// não aceita style.
const Button =(props) =>{
    return(
        <Button
        style= ""
        color= "blue"
        title ={props.titulo}
        
        />
    );
}

export default Button;