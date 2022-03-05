import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";

import ModalRegister from "../ModalRegister/ModalRegister";
import StyledEmotions from "./StyledEmotions";
import AntDesign from "react-native-vector-icons/AntDesign";

import sleeping from '../../../../assets/humores/sleeping.png';
import happy from '../../../../assets/humores/happy.png';
import sad from '../../../../assets/humores/sad.png';
import nervous from '../../../../assets/humores/nervous.png';
import confused from '../../../../assets/humores/confused.png';

import DateTime from "../ModalDateTime/ModalDateTime";
import ModalActivitys from "../ModalActivitys/ModalActivitys";



function ModalEmotions({navigation}) {
  
  const [visivel, setVisivel] = useState(true);

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
              
          
          <View style={StyledEmotions.divider}>
        
            <View>
              <Image source={sleeping} style={StyledEmotions.image} />
            <Text style={StyledEmotions.feeling}>Sono</Text>
            </View>
        
            <View>
              <Image source={happy} style={StyledEmotions.image} />
              <Text style={StyledEmotions.feeling}>Feliz</Text>
            </View>
            <View>
              <Image source={nervous} style={StyledEmotions.image} />
              <Text style={StyledEmotions.feeling}>Preocupado</Text>
            </View>
            <View>
              <Image source={sad} style={StyledEmotions.image} />
              <Text style={StyledEmotions.feeling}>Triste</Text>
            </View>
            
              <View>
                <Image source={confused} style={StyledEmotions.image} />
                <Text style={StyledEmotions.feeling}>Cansado</Text>
            </View>
           
          </View>
          
      </View>
          
      <View>
          
              <ModalRegister />
            </View>
          </Modal>

     
     
  );
  
}

export default ModalEmotions;
