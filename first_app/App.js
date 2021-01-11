import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'

export default class App extends React.Component{
    render(){
      return (
      <View style={{marginTop:0}}>
          <Header/>
          <Body/>
          <Footer/>
          <NormalButton></NormalButton>
      </View>
      );
    }
}

const NormalButton = () =>{
  return(
    <Button title="Click Here!"></Button>
  );
}