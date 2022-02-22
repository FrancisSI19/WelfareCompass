import React from "react";

import { Text, View, Image, TouchableOpacity, styles } from "react-native";
import StyledListView from "../styledList/StyledListView";

import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import myRegister from "./Registers";


function ListView({ route: {params} , navigation }) {
  const { itemSelect } = params;
  const { image, time, date, feeling, activity1, activityIcon1,
          activity2, activityIcon2, activity3, activityIcon3, register, color } = itemSelect;
  
  
   return (
     
      <View style={StyledListView.information}>
          <View style={StyledListView.iconBack}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo
              name="arrow-with-circle-left"
              style={StyledListView.iconBack}
              />
              </TouchableOpacity>
          </View>
           
          <View>
            <Text style={StyledListView.time}>
            <Entypo name="clock" style={StyledListView.iconTime} />
              {time}
            </Text>
            </View>
        <View>
         <Text style={StyledListView.date}>
           <SimpleLineIcons name="calendar" style={StyledListView.iconCalendar}/>
           {date}
         </Text>
        </View>
       
        <View style={StyledListView.image}>
            <Image style={StyledListView.image} source={image} />
        </View>
       
        <View style={StyledListView.feeling} >
            <Text style={[StyledListView.feeling, {color: color}]}>{feeling}</Text>
        </View>
       <View style={StyledListView.divider}>
         <View style={StyledListView.activity}>
           <Text style={StyledListView.dividerActivity}>{activityIcon1}</Text>
          <Text style={StyledListView.activity}>{activity1}</Text>
        </View>
         <View style={StyledListView.activity}>
           <Text style={StyledListView.dividerActivity}>{activityIcon2}</Text>
           <Text style={StyledListView.activity}>{activity2}</Text>
           </View>
           
         <View style={StyledListView.activity}>
           <Text style={StyledListView.dividerActivity}>{activityIcon3}</Text>
           <Text style={StyledListView.activity}> {activity3} </Text>
         </View>
         
         </View>
        <View style={StyledListView.divider}>
            <Text style={StyledListView.register}>{register}</Text>
        </View>
                  
        
                   
            
      </View>
     
     
  );
  
}

export default ListView;
