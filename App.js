import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

//import Login from './telas/Login/Login';
//import HomeLogo from './telas/logo/HomeLogo';
import Routers from './telas/router/Router';
import { NavigationContainer } from '@react-navigation/native';
//import CadastrarRegistro from './telas/cadastrar/CadastrarRegistro';


function App (){
      return (
      <View style={styles.sectionContainer}>
          
     {/*     <StatusBar />
          <HomeLogo />
          <Login />
     */}
          <NavigationContainer><Routers /></NavigationContainer>
      
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
