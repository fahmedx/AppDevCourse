import React from 'react';
import {Text, View} from 'react-native';

const Footer = () => {
    return(
        <View style={{marginBottom:0,backgroundColor:'#ff9640', padding:5, width:'100%'}}>
            <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'white'}}>Rodapé</Text>
        </View>
    );
  }

export default Footer;