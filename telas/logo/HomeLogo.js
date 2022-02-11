
import { StyleSheet} from 'react-native';
import logo from '../../telas/logo/logo.png';
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
            marginTop: 130,
            width: 200,
            height: 200,
            position: 'absolute',
            alignSelf: 'center',
        },
    });

export default HomeLogo;
