
import {
  StyleSheet,
  View,
} from 'react-native';

import telaInicial from '../../telas/images/telaInicial.png';
import React from 'react';
import { Image } from 'react-native';


function Logo() {
    return (
        <Image source={telaInicial}
            style={styledImage.telaInicial}
        />
    );
}
    
    const styledImage = StyleSheet.create({
        telaInicial: {
            marginTop: 130,
            width: 200,
            height: 200,
            position: 'absolute',
            alignSelf: 'center',
        },
    });

export default Logo;
