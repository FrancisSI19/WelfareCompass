import React from "react";

import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import AcessarLogin from "./ButtonLogin";

  function Login (){
        return (
        <View style={styledLogin.Container}>
                               
            <TextInput
              style={styledLogin.TextInput}
              placeholder="Digite seu email"
            />
              
            <TextInput
              style={styledLogin.TextInput}
              placeholder="Digite sua senha" />
            
            <AcessarLogin />
            
            <Text>Novo usuário?</Text>
    
        </View>
      );
    }
  
  
  const styledLogin = StyleSheet.create({
    Container: {
        marginTop: 360,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
                        
    },
    TextInput: {
      backgroundColor: `#ccc`,
      color: `#a9a9a9`,
      width: 330,
      height: 60,
      borderRadius: 20,
      margin: 15,
      textAlign: 'center',
     },
  });



  export default Login;

