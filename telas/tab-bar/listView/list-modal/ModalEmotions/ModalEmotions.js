import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";

import ModalRegister from "../ModalRegister/ModalRegister";
import StyledEmotions from "./StyledEmotions";
import AntDesign from "react-native-vector-icons/AntDesign";

i
import DateTime from "../ModalDateTime/ModalDateTime";
import RegisterDaily from "../../RegisterDaily";
import ListSelectEmotions from "./ListSelectEmotions";
import ListView from "../../listView";
import { useNavigation } from "@react-navigation/native";


function ModalEmotions({ navigation }) {
  
  const [visivel, setVisivel] = useState(true);
  const navigation = useNavigation();

  const [borderRadius, setBorderRadius] = useState();
  const [borderColor, setBorderColor] = useState();
  const [borderWidth, setBorderWidth] = useState();
  const [emotionSelect, setEmotionSelect] = useState(false);
      
       
      function selectEmotions() {
        if (emotionSelect === false) {
            setBorderWidth(4)
            setBorderColor('blue')
            setBorderRadius(30)
            setEmotionSelect(true)
        }
        if (emotionSelect === true) {
            setBorderWidth(0)
            setBorderColor('')
            setBorderRadius(0)
            setEmotionSelect(false)
            }
        }
  
  navigation.navigate("ListView", { ModalEmotions });
  return (
        <Modal
              animationType="slide"
              transparent={true}
              visible={visivel}
              style={StyledEmotions.information}
        >
          <View >
                <View>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign
                    name="close"
                    style={StyledEmotions.iconClose}
                    />
                    </TouchableOpacity>
                </View>
              
                <View>
                    <Text style={StyledEmotions.title}>
                        Como você está hoje?
                </Text>
                    
                    <DateTime />
              
            </View>
                  
        <View>
          <ListSelectEmotions />
            </View>
              
            </View>
           
                  <View>
                    <RegisterDaily />
                    <ModalRegister />
                  </View>
    </Modal>
  
);
}



export default ModalEmotions;
