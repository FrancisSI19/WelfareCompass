import React from "react";

import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StyledList from "../styledList/StyledList";

function ListView({ navigation }) {
   return (
        <View>
            <Button title="Voltar" onPress={() => navigation.goBack()} />

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
                <Text style={StyledList.activity1}>{activity1}</Text>
                <Text numberOfLines={2} style={StyledList.register}>{register}</Text>
              </View>
          </View>
     
      </View>
        </View>
    );
}

export default ListView;