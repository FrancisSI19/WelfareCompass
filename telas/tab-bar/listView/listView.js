import React from "react";

import { Text, View, Image, TouchableOpacity, styles } from "react-native";
import StyledListView from "../styledList/StyledListView";

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesegin from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { StackActions } from "react-navigation";


function ListView({ route: {params, navigation} }) {
  const { itemSelect } = params;
  const { image, time, date, feeling, activity1, register } = itemSelect;
  
  
   return (
     
        <View style={StyledListView.information}>
           
      <TouchableOpacity onPress={() => navigation.goBack(null)}>
         <AntDesegin
          name="arrowleft"
           size={20}
           color="#969696"
        />
        </TouchableOpacity>
        
              <View>
                  <View>
                    <Text style={StyledListView.time}>{time}</Text>
                    <Text style={StyledListView.date}>{date}</Text>
                    <Image style={StyledListView.image} source={image} />
                    <Text style={StyledListView.feeling}>{feeling}</Text>
                  </View>
                    <View>
                      <Text style={StyledListView.activity}>{activity1}</Text>
                    </View>
                      <View>
                        <Text style={StyledListView.register}>{register}</Text>
                      </View>
                   
              </View>
      </View>
     
     
  );
  
}

export default ListView;
