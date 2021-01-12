import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Footer = () => {
    return(
        <View style={{}}>
            <Text style={styles.foot}>Rodapé</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({

    foot:{
        marginBottom:0,
        backgroundColor:'#ff9640',
        padding:5,
        width:'100%'
    }
    
  });
export default Footer;