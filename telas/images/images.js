
import {
  StyleSheet,
  View,
} from 'react-native';

import telaInicial from '../../telas/images/telaInicial.png';
import React from 'react';
import { Image } from 'react-native';
import { Component } from 'react';


function Logo() {
    return (
        <Image source={telaInicial}
            style={styledImage.telaInicial}
        />
    );
}
    
    const styledImage = StyleSheet.create({
        telaInicial: {
            marginTop: 100,
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,
            height: 200,
        },
    });

export default Logo;
