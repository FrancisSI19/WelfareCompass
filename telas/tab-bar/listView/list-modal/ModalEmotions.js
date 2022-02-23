import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";

import StyledListModal from "./StyledListModal";
import ModalActivitys from "./ModalActivitys/ModalActivitys";
import ModalRegister from "./ModalRegister";

import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";


import sleeping from '../../../assets/humores/sleeping.png';
import happy from '../../../assets/humores/happy.png';
import sad from '../../../assets/humores/sad.png';
import nervous from '../../../assets/humores/nervous.png';
import confused from '../../../assets/humores/confused.png';




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
     
      <View style={StyledListModal.information}>
         
     
        <Modal
          animationType="slide"
          transparent={true}
          visible={visivel}
          style={ StyledListModal.information }
        >
           <View>
            <TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
              <AntDesign
              name="close"
              style={StyledListModal.iconClose}
              />
              </TouchableOpacity>
      </View>
        
          <View>
              <Text style={StyledListModal.title}>
                   Como você está hoje?
              </Text>
      </View>
      
        
      <View style={StyledListModal.divider}>
      
      <View>
        <Image source={sleeping} style={StyledListModal.image} />
        <Text style={StyledListModal.feeling}>Sono</Text>
        </View>
    
        <View>
        <Image source={happy} style={StyledListModal.image} />
        <Text style={StyledListModal.feeling}>Feliz</Text>
        </View>
        <View>
        <Image source={nervous} style={StyledListModal.image} />
        <Text style={StyledListModal.feeling}>Preocupado</Text>
        </View>
        <View>
        <Image source={sad} style={StyledListModal.image} />
        <Text style={StyledListModal.feeling}>Triste</Text>
        </View>
        
        <View>
        <Image source={confused} style={StyledListModal.image} />
        <Text style={StyledListModal.feeling}>Cansado</Text>
      </View>
        </View>
        <ModalActivitys />
        <ModalRegister/>
          </Modal>
      </View>
     
     
  );
  
}

export default ModalEmotions;
