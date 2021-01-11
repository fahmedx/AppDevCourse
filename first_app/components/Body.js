import React from 'react';
import {Text, View, Image} from 'react-native';

const Body = () => {
    return(
        <View style={{alignItems:'center',padding:10}}>
        <Text>Conteúdo do App</Text>
        <Text>Minha Imagem</Text>
          <Image style ={{width:100,height:100}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}
          />
        </View>
    );
  }

export default Body;