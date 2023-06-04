
import React from 'react';
import { StyleSheet, View, Alert} from 'react-native';

import Titulo from '../../components/titulo';
import MeuInput from '../../components/Input';
import SuperButton from '../../components/SuperButton';


export default function Login() {

  const logar = ()=>{
    Alert.alert("aqui vou fazer o login")
  }
  return (
    <View style={styles.container}>
      <Titulo titulo= "login"/>
      
      <MeuInput 
      label= "e-mail"
      placeholder= "exemplo@exemplo.com"/>
      
      <MeuInput 
      label= "Senha"
      placeholder= "123456"/>

      <SuperButton
      valor="entrar" 
      acao={logar}>
      

      </SuperButton>

    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
        alignItems: 'center',

        
    justifyContent: 'center',
  },
});