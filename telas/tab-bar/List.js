import React, {Component} from "react";

import { Text, Image, View, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StyledList from "./styledList/StyledList";

function List({ date, image, sentimento, time, atividades, relatorio }) {
 
  return <>

      <View style={StyledList.information}>
      
          <View  style={StyledList.divisor}>
              <View>
                <Image style={StyledList.image} source={image} />
              </View>
              <View>
                <Text style={StyledList.date}>{date}</Text>
                <Text style={StyledList.sentimento}>{sentimento}</Text>
                <Text style={StyledList.time}>{time}</Text>
              </View>
              <View>
                <Text style={StyledList.atividades}>{atividades}</Text>
                <Text numberOfLines={2} style={StyledList.relatorio}>{relatorio}</Text>
              </View>
          </View>
     
          </View>
        
     
   
  </>
}


export default List;