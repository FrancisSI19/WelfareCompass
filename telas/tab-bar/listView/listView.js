import React from "react";

import { Text, View, Image, TouchableOpacity } from "react-native";
import StyledList from "../styledList/StyledList";
import List from "./List";
import RegisterDaily from "./RegisterDaily";


function ListView({ route: {params} }) {
  const { itemSelect } = params;
  const { image, time, date, feeling, activity1, register } = itemSelect;
   return (
     
        <View>
            
       <TouchableOpacity onPress={() => navigation.goBack()}/>
            <View style={StyledList.information}>
      
             <View  style={StyledList.divider}>
                <View>
                  <Image style={StyledList.image} source={image} />
                </View>
                <View>
                  <Text style={StyledList.date}>{date}</Text>
                  <Text style={StyledList.feeling}>{feeling}</Text>
                  <Text style={StyledList.time}>{time}</Text>
                </View>
                <View>
                  <Text style={StyledList.activity}>{activity1}</Text>
                  <Text numberOfLines={2} style={StyledList.register}>{register}</Text>
                </View>
          </View>
     
      </View>
     </View>
     
  );
  
}

export default ListView;
