import React from "react";
import { Text, StyleSheet} from "react-native";
/*
//extendendo o react components
class Titulo extends React.Component{
   render(){
    return(
        <Text style = {css.titulo} >Ola!!</Text>
    );
   }
}
*/
// forma de fazer eurofunction
/*
const Titulo =() =>(
   <Text style={css.titulo} >Ola!!!</Text>
)
*/
// 3 forma criando uma função
function Titulo(props){
    return (
        <Text style ={css.titulo} >{props.titulo}</Text>
    );
}
const css = StyleSheet. create({
    titulo :{
        
         color: 'black',
         fontSize:50

    }
});

export default  Titulo

