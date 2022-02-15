import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";
import List from "./List";
import { Image } from "react-native";
import emotionOpacity from '../../telas/assets/humores/emotionOpacity.png';

const myRegister = [
  {
    id: "1",
    date: "14 de Fevereiro de 2022",
    image: "source={emotionOpacity}",
    time: "07:00",
    atividade1: "Meditação",
    atividade2: "Esporte",
    atividade3: "Cozinhar",
    relatorio: "Hoje acordei, li a bíblia, orei, fui para a academia, fiz um delicioso almoço"

  }
];


function RegisterDaily() {
  
    return (
        <View style={styles.sectionContainer}>
        <FlatList
          data={myRegister}
          renderItem={({ item }) => <List {...item}/>}
          />
      </View>  
    );  
}
const styles = StyleSheet.create({
    sectionContainer: {
    backgroundColor: "#dcdcdc",
    width: "100%",
    height: "100%",   
  },

});

export default RegisterDaily;