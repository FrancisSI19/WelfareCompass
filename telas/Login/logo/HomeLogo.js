
import { StyleSheet} from 'react-native';
import logo from './logo.png';
import React from 'react';
import { Image } from 'react-native';


function HomeLogo() {
    return (
        <Image source={logo}
            style={styledImage.logoHome}
        />
    );
}
    
    const styledImage = StyleSheet.create({
        logoHome: {
            width: 200,
            height: 200,
            alignSelf: 'center',
            position: 'relative',
        },
    });

export default HomeLogo;
