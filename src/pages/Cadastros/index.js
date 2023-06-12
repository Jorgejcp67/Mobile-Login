import React from "react"
import {Text, View, Button } from 'react-native';

function Cadastros({navigation,route}){

    return (
        <View>
           <Text>Página Cadastros</Text>
           <Text>Meu nome é:{route.params?.nome}</Text>
           <Text>Minha idade é:{route.params?.idade}</Text>
           <Button 
           title="Navegar para Home"
           onPress={()=> navigation.navigate('Home')}/>
       </View>

    );
}
export default Cadastros;


