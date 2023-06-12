//inicio da configuração
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//fim da confiuração

//inicio da importação das paginas
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Cadastros from './src/pages/Cadastros';
//fim da importação

//criando o componentes de tabs
function Tabs() {
  return (
    <Tab.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Bem vindo!',
          headerStyle: {
            backgroundColor: '#ffc400',
          }
        }}
      ></Stack.Screen>

      <Stack.Screen
        name='Login'
        component={Login}
      ></Stack.Screen>

      <Stack.Screen
        name='Cadastros'
        component={Cadastros}
      ></Stack.Screen>
    </Tab.Navigator>
  )
}


export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Bem vindo!',
            headerStyle: {
              backgroundColor: '#ffc400',
            }
          }}
        ></Stack.Screen>

        <Stack.Screen
          name='Login'
          component={Login}
        ></Stack.Screen>

        <Stack.Screen
          name='Cadastros'
          component={Tabs}
        ></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}