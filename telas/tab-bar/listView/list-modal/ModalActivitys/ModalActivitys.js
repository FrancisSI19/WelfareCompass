import React, { useState } from "react";

import { Text, View, Image, TouchableOpacity, Modal } from "react-native";
import StyledActivitys from "./StyledActivitys";


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

function ModalActivitys() {
   
    
     return (
       
             <View style={StyledActivitys.information}>
             <View style={StyledActivitys.dividerActivity}>
                 <View style={StyledActivitys.dividerActivity1}>
                 <View>
                     <FontAwesome5 name="pray" style={StyledActivitys.activityIcon}/>
                     <Text style={StyledActivitys.activityTitle}>Meditando</Text>    
                 </View>
                 <View>
                     <FontAwesome5 name="chalkboard-teacher"  style={StyledActivitys.activityIcon}/>
                     <Text style={StyledActivitys.activityTitle}>Trabalhando</Text>    
                 </View> 

                 <View>
                     <MaterialCommunityIcons name="bike"  style={StyledActivitys.activityIcon}/>
                     <Text style={StyledActivitys.activityTitle}>Esporte</Text>    
                     </View> 
                 </View>
                 <View style={StyledActivitys.dividerActivity1}>
                     <View>
                        <FontAwesome5 name="swimmer"  style={StyledActivitys.activityIcon}/>
                        <Text style={StyledActivitys.activityTitle}>Esporte</Text>    
                     </View> 
                     
                     <View>
                        <AntDesign name="car"  style={StyledActivitys.activityIcon}/>
                        <Text style={StyledActivitys.activityTitle}>Trânsito</Text>    
                     </View> 
                     
                     <View>
                        <MaterialCommunityIcons name="bike"  style={StyledActivitys.activityIcon}/>
                        <Text style={StyledActivitys.activityTitle}>Esporte</Text>    
                    </View> 
                 </View>
                 
                 <View style={StyledActivitys.dividerActivity1}>
                     <View>
                        <MaterialCommunityIcons name="bike"  style={StyledActivitys.activityIcon}/>
                        <Text style={StyledActivitys.activityTitle}>Esporte</Text>    
                     </View> 
                     
                     <View>
                        <MaterialCommunityIcons name="bike"  style={StyledActivitys.activityIcon}/>
                        <Text style={StyledActivitys.activityTitle}>Esporte</Text>    
                     </View> 
                     
                     <View>
                        <MaterialCommunityIcons name="bike"  style={StyledActivitys.activityIcon}/>
                        <Text style={StyledActivitys.activityTitle}>Esporte</Text>    
                    </View> 
                     </View>
            </View>
        </View>
    );
    
  }
  
  export default ModalActivitys;
  
