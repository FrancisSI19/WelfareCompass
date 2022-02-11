import React from "react";

import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
} from 'react-native';
 
 
  function AcessarLogin (){
        return (
          <View>
            <Button title="ENTRAR" onPress={()=>{}}/>
            
            </View>
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