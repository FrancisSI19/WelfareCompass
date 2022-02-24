import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView
} from "react-native";

import StyledEmotions from "./StyledEmotions";
import ModalActivitys from "../ModalActivitys/ModalActivitys";
import ModalRegister from "../ModalRegister/ModalRegister";
import SaveRegister from "../ModalButton/ModalButtonSave";


import AntDesign from "react-native-vector-icons/AntDesign";


import sleeping from '../../../../assets/humores/sleeping.png';
import happy from '../../../../assets/humores/happy.png';
import sad from '../../../../assets/humores/sad.png';
import nervous from '../../../../assets/humores/nervous.png';
import confused from '../../../../assets/humores/confused.png';
import DateTime from "../ModalDateTime/ModalDateTime";


function ModalEmotions() {
  
  const [visivel, setVisivel] = useState(true);
 
  /*const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectDate) => {
    const currenDate = selectDate || date;
    setShow(Platform.OS === 'ios');
  };
  
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  */
  return (
     
    <SafeAreaView style={StyledEmotions.information}>
      
         <Modal
            animationType="slide"
            transparent={true}
            visible={visivel}
            style={ StyledEmotions.information }
          >
            <View>
              <TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
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
        </View>
              <DateTime />
          
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
              <ModalActivitys />
              <ModalRegister />
              <SaveRegister />
          </Modal>
      </SafeAreaView>
     
     
  );
  
}

export default ModalEmotions;
