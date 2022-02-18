import React from "react";

import { Text, View, Image, TouchableOpacity } from "react-native";
import StyledList from "../styledList/StyledList";
import List from "./List";
import RegisterDaily from "./RegisterDaily";


function ListView({ navigation }) {
  
   return (
        <View>
            
       <TouchableOpacity onPress={() => navigation.goBack()}/>
            <View style={StyledList.information}>
      
             <View  style={StyledList.divider}>
                <View>
                  <Image style={StyledList.image} source={RegisterDaily.image} />
                </View>
                <View>
                  <Text style={StyledList.date}>{RegisterDaily.date}</Text>
                  <Text style={StyledList.feeling}>{RegisterDaily.feeling}</Text>
                  <Text style={StyledList.time}>{RegisterDaily.time}</Text>
                </View>
                <View>
                  <Text style={StyledList.activity}>{RegisterDaily.activity1}</Text>
                  <Text numberOfLines={2} style={StyledList.register}>{RegisterDaily.register}</Text>
                </View>
          </View>
     
      </View>
        </View>
    );
}

export default ListView;