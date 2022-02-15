import React from "react";

import {
  Button,
    StyleSheet,
} from 'react-native';


function AcessarLogin() {
    return (
          
    <Button
        title="ENTRAR"
        styles={styledButton.Button}
        onPress={() => this.props.navigation.navigate('CadastrarRegistro')
        }
/>
      );
}
   
  const styledButton = StyleSheet.create({
    Button: {
        backgroundColor: 'blue',
        borderRadius: 20,
        width: 180,
        height: 60,
        marginTop: 40,
    },
    
  });


  export default AcessarLogin;