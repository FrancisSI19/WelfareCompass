import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";
import List from "./List";

const confused = require("../../telas/assets/humores/confused.png");
const happy = require("../../telas/assets/humores/happy.png");
const sleeping = require("../../telas/assets/humores/sleeping.png");
const nervous = require("../../telas/assets/humores/nervous.png");
const myRegister = [
  {
    id: "1",
    date: "14 de Fevereiro de 2022",
    image: confused,
    sentimento: "CONFUSO",
    time: "07:00",
    atividade1: "Meditação",
    atividade2: "Esporte",
    atividade3: "Cozinhar",
    relatorio: "Hoje acordei, li a bíblia, orei, fui para a academia, fiz um delicioso almoço."

  },
  {
    id: "2",
    date: "15 de Fevereiro de 2022",
    image: happy,
    sentimento: "BEM",
    time: "07:00",
    atividade1: "Estudo",
    atividade2: "Casa",
    atividade3: "Esporte",
    relatorio: "Hoje acordei, estudei, arrumei a casa, fui para a academia."

  }

];


function RegisterDaily() {
  /* função renderItem criada fora do flatlist
  para não precisar recriar toda vez que a lista for renderizada. */

  function renderItem({ item }) {
    return <List {...item} />;
  }
  
    return (
        <View style={styles.sectionContainer}>
        <FlatList
          data={myRegister}
          renderItem={renderItem}
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