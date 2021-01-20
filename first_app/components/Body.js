import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import externStyles from '../styles.js'

export default class Body extends React.Component{
  constructor(props){
    super(props);
    this.name = "name";
  }

  callname(){
    return(<Text>{this.name}</Text>);
  }

  render(){
    return(
      <View>
        <Text>{this.name}</Text>
      </View>
    )
  }

}

//const Body = () => {
//    return(
//        <View style={styles.view}>
//          <Image style ={{width:85,height:85}}
//          source={{
//            uri: 'https://reactnative.dev/img/tiny_logo.png'
//          }}
//        />
//        <Text style={externStyles.fontStyle}> Texto</Text>
//        </View>
//    );
//  }
//
//const styles = StyleSheet.create({
//  view:{
//    flex:1,
//    flexDirection:'row',
//    flexWrap:'wrap',
//    padding:30,
//    backgroundColor:''
//  },
//  text:{
//    width:'70%', 
//    paddingLeft:20,
//    paddingRight:20
//  }  
//});
//
//export default Body;