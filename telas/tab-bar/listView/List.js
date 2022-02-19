import React from "react";

import { Text, Image, View } from "react-native";
import StyledList from "../styledList/StyledList";



function List({ date, image, feeling, time, activity1, activity2, activity3, register }) {
  return <>
    
      <View style={StyledList.information}>
      
          <View  style={StyledList.divider}>
              <View style={StyledList.image}>
                <Image style={StyledList.image} source={image} />
              </View>
          <View>
                <View style={StyledList.date}><Text style={StyledList.date}>{date}</Text></View>
          
          <View style={StyledList.feeling}>
            <Text style={StyledList.feeling}>{feeling}</Text>
            <View style={StyledList.time}><Text style={StyledList.time}>{ time}</Text></View>
          
          </View> 
          
            </View>
              <View style={StyledList.activity}>
                <Text style={StyledList.activity}>{activity1}</Text>
          <View style={StyledList.register}><Text numberOfLines={1} ellipsizeMode="tail" style={StyledList.register}>{register}</Text></View>      
          
              </View>
          </View>
     
      </View>
    
  </>
}

export default List;