import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';

const Body = () => {
    return(
        <View style={styles.view}>
          <Image style ={{width:85,height:85}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
        />
        <Text style={styles.text}>Texto</Text>
        </View>
    );
  }

const styles = StyleSheet.create({
  view:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    padding:30
  },
  text:{
    width:'70%', 
    paddingLeft:20,
    paddingRight:20
  }  
});

export default Body;