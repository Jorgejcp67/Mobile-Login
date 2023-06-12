
import React from 'react';
import { StyleSheet,  View , Button } from 'react-native';

import Titulo from '../../components/titulo';
import MeuInput from '../../components/Input';




export default function Login() {

 
  return (
    <View style={styles.container}>
      <Titulo titulo= "Login"/>
      
      <MeuInput 
      label= "E-mail"
      placeholder= "exemplo@exemplo.com"/>
      
      <MeuInput 
      label= "Senha"
      placeholder= "123456"/>

      <MeuInput
      label="Recuperar senha"
      placeholder="Recuperar senha"/>
       
       
      <Button
         valor="Entrar"> 
         

         </Button>
         

    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fba608',
        alignItems: 'center',
        justifyContent: 'center',
  },
});
