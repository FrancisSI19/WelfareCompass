import React from "react";

import {
    Text,
    View,
    StyleSheet,
} from "react-native";
import LogoCadastar from "./StyledEmotion";

function NewRegister() {
    return (
      
        <View style={styledCadastro.Container} >
                
            <LogoCadastar/>
            
            <Text style={styledCadastro.styledText}>
                Você ainda não tem nenhum {"\n"} registro diário.
                Para começar, {"\n"} toque no ícone
                de adicionar na tela.
            </Text>
            </View>
    );
}

const styledCadastro = StyleSheet.create({
    Container: {
       
        backgroundColor: '#f5f5f5',
        width: "100%",
        height: "100%",   
    },
    styledText: {
        marginTop: 300,
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        textAlign: 'center',
        color: '#808080',
    },
 
  });

export default NewRegister;