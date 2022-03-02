import { useNavigation } from "@react-navigation/native";
import React from "react";

import {
  StyleSheet, Button, View
} from 'react-native';

const navigation = useNavigation;
function AcessarLogin({ navigation }) {

  return (
    <View style={styledButton.Button}>
        <Button
        title="ENTRAR"
        onPress={() => {
          navigation.navigate('RouterHome')
        }}/>
    </View>
    
             
  );
}

  const styledButton = StyleSheet.create({
    Button: {
      width: 100,
      height: 40,
      textAlign: 'center',
      marginTop: 20,
      borderRadius: 30
    },
    
  });


  export default AcessarLogin;