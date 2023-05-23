import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
    return (
      <View>
        <Text style={{color: 'red', fontSize: 25, margin: 15}}>Olá mundo</Text>
        <Text style={{fontSize:18, color: 'blue'}}>Adielson Medeiros</Text>
        <Logo largura={350} altura={350} fulano="Adielson Medeiros"/>
      </View>


    );
  }

export default App;

let img = 'https://sujeitoprogramador.com/reactlogo.png'

function Logo(props){
  return(
    <View>
    <Image source={{ uri: img}} style ={{width: props.largura, height:props.altura}}/>
    <Text>{props.fulano}</Text>
    </View>
    );
}