import { StyleSheet} from 'react-native';
import emotionOpacity from '../../telas/assets/humores/emotionOpacity.png';
import React from 'react';
import { Image } from 'react-native';


function LogoCadastar() {
    return (
        <Image source={emotionOpacity}
            style={styledImage.logoCadastro}
        />
    );
}
    
    const styledImage = StyleSheet.create({
        logoCadastro: {
            marginTop: 180,
            width: 80,
            height: 80,
            position: 'absolute',
            alignSelf: 'center',
            opacity: 0.5,
        
        },
    });

export default LogoCadastar;