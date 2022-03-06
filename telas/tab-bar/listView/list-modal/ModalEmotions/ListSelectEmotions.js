import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import StyledEmotions from "./StyledEmotions";

function ListSelectEmotions({image, feeling}){

const [borderRadius, setBorderRadius] = useState();
const [borderColor, setBorderColor] = useState();
const [borderWidth, setBorderWidth] = useState();
const [activitieSelect, setactivitieSelect] = useState(false);

function selectActivities() {
  if (activitieSelect === false) {
      setBorderWidth(4)
      setBorderColor('blue')
      setBorderRadius(30)
      setactivitieSelect(true)
  }
  if (activitieSelect === true) {
      setBorderWidth(0)
      setBorderColor('')
      setBorderRadius(0)
      setactivitieSelect(false)
      }
    }

    return (
        <View style={StyledEmotions.divider}>
        <View >
                  
                <TouchableOpacity onPress={() => {
                  selectActivities()
                }}
                >
               
                    <View
                    style={{
                        borderColor: borderColor,
                        borderWidth: borderWidth,
                        borderRadius: borderRadius,
                        width: 60,
                        height: 60,
                        marginTop: 10,
                        marginBottom: 10,
                    }}
                    >
                        <Image source={image} />
                        <Text style={StyledEmotions.feeling}>{feeling}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
    )

}

export default ListSelectEmotions;