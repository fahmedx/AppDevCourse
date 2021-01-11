import React from 'react';
import {Text, View, ScrollView,Image} from 'react-native';

const Body = () => {
    return(
        <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',padding:30}}>
          <Image style ={{width:85,height:85}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
        />
        <Text style={{width:'70%', paddingLeft:20,paddingRight:20}}>Texto</Text>
        </View>
    );
  }

export default Body;