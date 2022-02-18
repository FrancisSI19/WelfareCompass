import { useNavigation } from "@react-navigation/native";
import React from "react";

import {
  StyleSheet, Button
} from 'react-native';

const navigation = useNavigation;
function AcessarLogin({ navigation }) {

  return (
      <Button
        style={styledButton.Button} title="ENTRAR"
        onPress={() => {
          navigation.navigate('RouterHome')
        }}/>
             
  );
}

  const styledButton = StyleSheet.create({
    Button: {
        backgroundColor: 'blue',
        borderRadius: 20,
        width: 120,
        height: 40,
        marginTop: 20,
        textAlign: 'center',
        alignSelf:'center'
    },
    
  });


  export default AcessarLogin;