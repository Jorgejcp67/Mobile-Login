import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View } from 'react-native';
import Login from './src/pages/Login';



export default function App() {
  return (
    <View style={styles.container}>
     
      <Login/>
      
      <StatusBar style="auto" />

      </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
