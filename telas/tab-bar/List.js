import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

function List({date, image, time, atividade1, atividade2, atividade3, relatorio}) {
  return (
    <View style={styledList.container}>
      <Text style={styledList.title}>{date}</Text>
      <Image style={{ width: 60, height: 60 }} source={image}/>
      <Text style={styledList.title}>{time}</Text>
      <Text style={styledList.title}>{atividade1}</Text>
      <Text style={styledList.title}>{atividade2}</Text>
      <Text style={styledList.title}>{atividade3}</Text>
      <Text numberOfLines={2} style={styledList.description}>{relatorio}</Text>
    </View>
    
  )
}
const styledList = StyleSheet.create({
    sectionContainer: {
    backgroundColor: `#4169e1`,
    width: "100%",
    height: "100%",   
  },

});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#000",
  },
});

export default List;