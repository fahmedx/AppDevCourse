import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Platform } from 'react-native';
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'
import Constants from 'expo-constants';

export default function App(){
  //read/set
  const [count,setCount] = useState(0);

  const [name,setName] = useState("Jorje");

  const [list,setList] = useState(['Rice','beans','bread','meat']);

  return(
      <View style={{backgroundColor:'white'}}>
                <StatusBar hidden/>
                <Header></Header>
                <Body texto="Count++:" ></Body>
                <Button title="Count++" onPress={()=>setCount(count+1)}></Button>
                <Text style={{alignSelf:'center'}}>{count}</Text>
                <Button title="Name" onPress={()=>setName("Jorjão")}></Button>
                <Text style={{alignSelf:'center'}}>{name}</Text>
                <Button title="List" onPress={()=>setList([...list,'salad'])}></Button>
                {
                  list.map((val)=>{
                    return(<Text>{val}</Text>);
                  })  
                }
      </View>

  )
}

//export default class App extends React.Component{
//    constructor(props){
//      super(props);
//
//      this.state = {
//        count: 0,
//        page:'home'
//      }
//    }
//
//
//    countAdd = () =>{
//      this.setState({count:this.state.count+1});
//    }
//
//    goBack = () =>{
//      this.setState({page:'home'});
//    }
//
//    changeView = () =>{
//      this.setState({page:'other'});
//    }
//
//    render(){
//      if(this.state.page=="home"){
//          return(
//            <View style={{backgroundColor:'white'}}>
//              <StatusBar hidden/>
//              <Header></Header>
//              <Body texto="Count++:" ></Body>
//              <Button title="Count++" onPress={()=>this.countAdd()}></Button>
//              <Text style={{alignSelf:'center'}}>{this.state.count}</Text>
//              <Body texto="Change View:" ></Body>
//              <Button title="Change" onPress={()=>this.changeView()}></Button>
//              <Text style={{alignSelf:'center'}}>Home</Text>
//            </View>
//          );
//      }else if(this.state.page=="other"){
//        return(
//            <View style={{backgroundColor:'white'}}>
//                  <StatusBar hidden/>
//                  <Header></Header>
//                  <Body texto="Change View:" ></Body>
//                  <Button title="Go Back" onPress={()=>this.goBack()}></Button>
//                  <Text style={{alignSelf:'center'}}>Other Page</Text>
//            </View>
//        );
//      }
//    }
//
//}

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
