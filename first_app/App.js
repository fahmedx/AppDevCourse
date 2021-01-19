import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Platform } from 'react-native';
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'
import Constants from 'expo-constants';

export default class App extends React.Component{
    constructor(props){
      super(props);
      this.showText = true;
      this.showButton = false;
      this.showBody = true;
      this.showHeader = true;
    }

      showContent(){
//        return(
//          <View>
//            <Text>{Platform.OS}</Text>
//          </View>
//        );
       if(this.showHeader && this.showBody){
         return(
           <View>
             <Header></Header>
             <Body></Body>
           </View>
         );
       }else {
         <View>
           <Text>Empty</Text>
         </View>
       }
      }

    render(){
      return(
          <ScrollView style={{flex:1,backgroundColor:'#343434'}}>           
            <StatusBar hidden/>
            {
              this.showContent()
            }
          </ScrollView>
      );
    }
}

//const NormalButton = () =>{
//  return(
//    <Button title="Click Here!"></Button>
//  );
//}


//return (
// <ScrollView style={{marginTop:20,flex:1,backgroundColor:'#343434'}}>
// {
//   (this.showHeader)?
//   <Header></Header>
//   :
//   <View><Text>Empty</Text></View>
// }
// {
//   (this.showBody)?
//   <Body></Body>
//   :
// <View><Text>Empty</Text></View>
// }
// {
//   (this.showText)?
//   <Text>Texto</Text>
//   :
//   <View></View>
// }
// {
//   (this.showButton)?
//   <Button title="Button"></Button>
//   :
//   <View><Text>Empty</Text></View>
// }
// </ScrollView>
// );
