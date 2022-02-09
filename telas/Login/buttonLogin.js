import React from "react";

import {
    Button,
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';
  
 
  function AcessarLogin (){
        return (
            <View style={styledButton.Button}>
                <Button title="Entrar" style={styledButton.Button} />
            </View>
      );
    }
    
  const styledButton = StyleSheet.create({
    Button: {
        width: 150,
        height: 60,
        marginTop: 40,
    }      
  });


  export default AcessarLogin;