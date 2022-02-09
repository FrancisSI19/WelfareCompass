import React from "react";


import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
  
  
  function Login (){
        return (
        <View style={styledLogin.Text}>
                     
            <TextInput>
              <Text>Digite seu email</Text>
            </TextInput>

            <TextInput>
              <Text>Digite sua senha</Text>
            </TextInput>
                     
            <Button title='Entrar'
              style={styledButton.button}/>
        </View>
      );
    }
  
  
  const styledLogin = StyleSheet.create({
    Text: {
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
        },
                
  });

  const styledButton = StyleSheet.create({
    button: {
     
      
        },
                
  });
  
  export default Login;

