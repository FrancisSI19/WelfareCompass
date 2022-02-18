import React from "react";

import { Text, Image, View } from "react-native";
import StyledList from "../styledList/StyledList";



function List({ date, image, feeling, time, activity1, activity2, activity3, register }) {
  //const [selectedId, setSelectedId] = useState(null);
 
  return <>
    
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
                <Text numberOfLines={1} ellipsizeMode="tail" style={StyledList.register}>{register}</Text>
              </View>
          </View>
     
      </View>
    
  </>
}

export default List;