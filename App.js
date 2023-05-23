import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
    return (
      <View>
        <Text style={{color: 'red', fontSize: 25, margin: 15}}>Olá mundo</Text>
        <Text style={{fontSize:18, color: 'blue'}}>Adielson Medeiros</Text>
        <Logo />
      </View>


    );
  }

export default App;

let img = 'https://sujeitoprogramador.com/reactlogo.png'

function Logo(){
  return(
    <Image source={{ uri: img}} style ={{width: 300, height:  300}}/>
  )
}