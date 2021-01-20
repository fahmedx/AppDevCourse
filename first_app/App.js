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
      this.body = new Body();
      this.body.name = "Joseph";
    }
    
    render(){
      console.log(this.body.name);

      return(
        <View style={{backgroundColor:'white'}}>
          <StatusBar hidden/>
          {this.body.callname()}
        </View>
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

//        return(
//          <View>
//            <Text>{Platform.OS}</Text>
//          </View>
//        );


//mkloop(end){
        //for(let i=0;i<=end;i++){
        //  alert(i);
        //}
        //or
        //let i=0;
        //while(i<=end){
        //  alert(i);
        //  i++;
        //}
      //} 

//OldCode
//      mkcomponent(){
//        for (let i = 0; i <= 10; i++) {
//          this.component.push(<Text style={{color:'white',fontSize:25}}>Item: {i}</Text>);
//        }
//      }
//      showContent(){
//       if(this.showHeader && this.showBody){
//         return(
//           <View>
//             <Header></Header>
//             <Body></Body>
//             {
//               this.component.map((val) => {
//                 return(val);
//               })
//             }
//           </View>
//         );
//       }else {
//         <View>
//           <Text>Empty</Text>
//         </View>
//       }
//      }
//
//    render(){
//      return(
//          <ScrollView style={{flex:1,backgroundColor:'#343434'}}>           
//            <StatusBar hidden/>
//            {
//              //this.mkcomponent(),
//              //this.mkloop(20),
//              this.showContent()
//            }
//          </ScrollView>
//      );
//    }
