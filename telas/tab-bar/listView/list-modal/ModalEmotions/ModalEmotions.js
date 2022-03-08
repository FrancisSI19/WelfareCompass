import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button
} from "react-native";

import ModalRegister from "../ModalRegister/ModalRegister";
import StyledEmotions from "./StyledEmotions";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTime from "../ModalDateTime/ModalDateTime";
import RegisterDaily from "../../RegisterDaily";
import ListSelectEmotions from "./ListSelectEmotions";
import ApiService from "../../../../Services/ApiService";


function ModalEmotions({navigation}) {
  
  const [visivel, setVisivel] = useState(true);
  const [userApi, setUserApi] = useState({
    daily_entry: {
      mood: "nervous",
      activity_ids: [2, 4, 7],
      description: "Ralando muito",
      username: "francislene"
    }
  })
  
    
function postModal(valor){
    ApiService.post("daily_entries/",valor)
      .then(response =>{
        const data = response.data  
        console.warn(data)
  })
    .catch(error => console.warn(error))
  }
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
                    <Button
                      title="SALVAR"
                      onPress={() => {
                      [postModal(userApi), navigation.navigate("ListApi")]
                    }}/>
                  </View>
    </Modal>
  
);
}



export default ModalEmotions;
