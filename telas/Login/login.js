import React from "react";

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import HomeLogo from "./logo/HomeLogo";
import AcessarLogin from "./ButtonLogin";


function Login({navigation}) {
  
        return (
          <View style={styledLogin.Container}>
            <HomeLogo />
                               
            <TextInput
              style={styledLogin.TextInput1}
              placeholder="Digite seu email"
            />
              
            <TextInput
              style={styledLogin.TextInput2}
              placeholder="Digite sua senha" />
            
            <AcessarLogin navigation={navigation}/>
            
            <TouchableOpacity>
              <Text style={styledLogin.Novo}>Novo usuário?</Text>
            </TouchableOpacity>
            
    
        </View>
      );
    }
  
  
  const styledLogin = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `#4169e1`,
        width: "100%",
        height: "100%",   
        
    },
  
    TextInput1: {
      backgroundColor: `#ccc`,
      color: `#a9a9a9`,
      width: 330,
      height: 60,
      borderRadius: 20,
      margin: 15,
      textAlign: 'center',
      marginTop: 60
    },
    
    TextInput2: {
      backgroundColor: `#ccc`,
      color: `#a9a9a9`,
      width: 330,
      height: 60,
      borderRadius: 20,
      margin: 15,
      textAlign: 'center',
    },
    Novo: {
      margin: 15,
      textAlign: 'center',
      marginTop: 50,
    },
  });

export default Login;

