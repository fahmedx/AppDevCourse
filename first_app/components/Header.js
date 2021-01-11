import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
        return(
            <View style={{backgroundColor:'#ff9640', padding:20}}>
              <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'white'}}> Wellcome to myTrainer! </Text>
            </View>
        );
  }

export default Header;