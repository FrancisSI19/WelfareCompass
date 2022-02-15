import React from "react";
import { Text, Image, StyleSheet } from "react-native";

function List({date, image, time, atividade1, atividade2, atividade3, relatorio}) {
  return <>
    <Text>{date}</Text>
    
    <Text>{time}</Text>
    <Text>{atividade1}</Text>
    <Text>{atividade2}</Text>
    <Text>{atividade3}</Text>
    <Text>{relatorio}</Text>
  </> 
}
const styles = StyleSheet.create({
    sectionContainer: {
    backgroundColor: `#4169e1`,
    width: "100%",
    height: "100%",   
  },

});

export default List;