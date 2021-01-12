import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
        return(
            <View style={styles.view}>
              <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'white'}}> Wellcome to myTrainer! </Text>
            </View>
        );
  }

const styles = StyleSheet.create({

  view:{
    backgroundColor:'#ff9640', 
    padding:20, 
    width:'100%'
  }
  
});

export default Header;