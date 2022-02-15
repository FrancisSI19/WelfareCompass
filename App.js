import React from 'react';

import {
  View,
  StatusBar,
  StyleSheet,
  Settings,

} from 'react-native';

import Login from './telas/Login/Login';
import HomeLogo from './telas/logo/HomeLogo';
import Routers from './telas/router/Routers';

import NewRegister from './telas/cadastrar/NewRegister';
import { createStackNavigator } from '@react-navigation/stack';
import AcessarLogin from './telas/Login/ButtonLogin';
import { NavigationContainer } from '@react-navigation/native';
import RegisterDaily from './telas/tab-bar/RegisterDaily';


function App() {
  
  {/*const Stack = createStackNavigator();*/}

      return (
      <View style={styles.sectionContainer}>
         {/* <StatusBar />
          <NavigationContainer>
          <Stack.Navigator>
        <Stack.Screen
          component={Settings}
          name="Logar" component={Login} />
        
        <Stack.Screen
          component={Settings}
          name="Cadastrar" component={CadastrarRegistro} />
        
      </Stack.Navigator>
          <HomeLogo />
          <Login />
         </NavigationContainer>*/}
          <RegisterDaily />
       
     </View>
    );
  }

const styles = StyleSheet.create({
    sectionContainer: {
    backgroundColor: `#4169e1`,
    width: "100%",
    height: "100%",   
  },

});

export default App;
