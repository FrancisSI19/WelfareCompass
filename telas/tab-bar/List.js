import React from "react";

import { Text, Image, StyleSheet, View } from "react-native";
import StyledList from "./styledList/StyledList";

function List({date, image, sentimento, time, atividade1, atividade2, atividade3, relatorio}) {
  return (
    <View style={StyledList.information}>
        <View>
          <Image style={StyledList.image} source={image} />
        </View>
        <View>
          <Text style={StyledList.date}>{date}</Text>
          <Text style={StyledList.sentimento}>{sentimento}</Text>
          <Text style={StyledList.time}>{time}</Text>
        </View>
        <View>
          <Text style={StyledList.atividades}>{atividade1}</Text>
          <Text style={StyledList.atividades}>{atividade2}</Text>
          <Text style={StyledList.atividades}>{atividade3}</Text>
          <Text numberOfLines={2} style={StyledList.relatorio}>{relatorio}</Text>
      </View>
    </View>
    
      
      
    
  );
}


export default List;