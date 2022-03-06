import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet
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
import RegisterDaily from "../../RegisterDaily";


function ModalEmotions({navigation}) {
  const [visivel, setVisivel] = useState(true);

      const [borderRadius, setBorderRadius] = useState();
      const [borderColor, setBorderColor] = useState();
      const [borderWidth, setBorderWidth] = useState();
      const [activitieSelect, setactivitieSelect] = useState(false);
      const styleSelections = StyleSheet.create({
        styledSelect:{
          borderColor: borderColor,
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          width: 50,
          height: 50,
          alignItems: 'center',
        },
      })
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
                  
                
                    <View style={StyledEmotions.divider}>
                      <View>
                      <TouchableOpacity onPress={() => {
                  selectActivities()
                  
                }}>
                        <Image source={sleeping} style={StyledEmotions.image} />
                <Text style={StyledEmotions.feeling}>Sono</Text>
                </TouchableOpacity>
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
              
            </View>
           
                  <View>
                    <RegisterDaily />
                    <ModalRegister />
                  </View>
    </Modal>
  
);
}



export default ModalEmotions;
