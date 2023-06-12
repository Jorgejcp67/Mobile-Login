import React from "react"
import {Text,View,Button } from 'react-native';

function Home({navigation}){

    return (
       <View>
          <Text>Página Home</Text>
          <Button
          title="Navegar para Cadastros"
          onPress={ ()=> navigation.navigate ('Cadastros', {nome:"fulano", idade:21})}/>
       </View>

    );
}
export default Home;