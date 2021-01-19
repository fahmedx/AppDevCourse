import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
        return(
            <View style={styles.view}>
              <Text style={styles.letters}> Wellcome to myTrainer! </Text>
            </View>
        );
  }

const styles = StyleSheet.create({

  view:{
    marginTop:0,
    backgroundColor:'#ff9640', 
    padding:8, 
    width:'100%'
  },
  letters:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'white',
    color:'#343434'
  }
  
});

export default Header;