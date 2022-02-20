import React from "react";

import { Text, View, Image, TouchableOpacity, styles } from "react-native";
import StyledListView from "../styledList/StyledListView";

import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";


function ListView({ route: {params, navigation} }) {
  const { itemSelect } = params;
  const { image, time, date, feeling, activity1, activityIcon1,
          activity2, activityIcon2, activity3, activityIcon3, register } = itemSelect;
  
  
   return (
     
      <View style={StyledListView.information}>
          <View style={StyledListView.iconBack}>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterDaily')}>
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
       
        <View style={StyledListView.feeling}>
            <Text style={StyledListView.feeling}>{feeling}</Text>
        </View>
       <View style={StyledListView.activity}>
         <Text style={StyledListView.activity}>{activity1}{activity2}{activity3}</Text>
       </View>
       <View style={StyledListView.activity}>
         <Text style={StyledListView.activity}>{activityIcon1} {activityIcon2} {activityIcon3}</Text>
       </View>
        
       <View style={StyledListView.divider}>
       <View style={StyledListView.register}>
             <Text style={StyledListView.register}>{register}</Text>
        </View>
       </View>               
        
                   
            
      </View>
     
     
  );
  
}

export default ListView;
