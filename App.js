import React from 'react';
import { Component } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Login from './telas/Login/login';
import Logo from './telas/images/images';

function App (){
      return (
      <View style={styles.sectionContainer}>
          <StatusBar />
          <Logo/>
          <Login />

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
