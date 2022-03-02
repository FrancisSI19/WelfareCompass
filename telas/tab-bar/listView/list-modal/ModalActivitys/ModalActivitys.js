import React, { setState, useState } from "react";

import { Text, View, SafeAreaView, Image, TouchableOpacity, Modal, ScrollView } from "react-native";
import StyledActivitys from "./StyledActivitys";


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import ModalEmotions from "../ModalEmotions/ModalEmotions";
import ModalRegister from "../ModalRegister/ModalRegister";
import SaveRegister from "../ModalButton/ModalButtonSave";


function ModalActivitys({id, name}) {
    
    return (
       
            <SafeAreaView style={StyledActivitys.information}>
            <View>
                <ModalEmotions />
                <View >
                    <View>
                        <Text style={StyledActivitys.activity}>{ name}</Text>
                    </View>
                  
                    </View>
                    
             
            </View>
            
            
        </SafeAreaView>
       
        
        
        
      
    );
    
  }
  
  export default ModalActivitys;
  
