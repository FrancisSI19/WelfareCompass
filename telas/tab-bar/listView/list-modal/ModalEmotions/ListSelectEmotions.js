import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
}
from "react-native";

import StyledEmotions from "./StyledEmotions";


import sleeping from '../../../../assets/humores/sleeping.png';
import happy from '../../../../assets/humores/happy.png';
import sad from '../../../../assets/humores/sad.png';
import nervous from '../../../../assets/humores/nervous.png';
import confused from '../../../../assets/humores/confused.png';


function ListSelectEmotions() {
      const [borderRadius, setBorderRadius] = useState();
      const [borderColor, setBorderColor] = useState();
      const [borderWidth, setBorderWidth] = useState();
      const [emotionSelect, setEmotionSelect] = useState(false);
      
      
       
      function selectEmotions() {
        if (emotionSelect === false) {
            setBorderWidth(4)
            setBorderColor('#008000')
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
  return (
        
      <View >
          
          <View style={StyledEmotions.divider}>
                        
                    <View >
                        <TouchableOpacity onPress={() => {
                          selectEmotions()
                  }}>
                    <View style={{
                        borderColor: borderColor,
                        borderWidth: borderWidth,
                        borderRadius: borderRadius,
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={sleeping} style={StyledEmotions.image} />
                        <Text style={StyledEmotions.feeling}>Sono</Text>
                    </View>
                        </TouchableOpacity>
                    </View>
                        
                    <View>
                        <TouchableOpacity onPress={() => {
                          selectEmotions()
                        }}>
                            
                            <Image source={sad} style={StyledEmotions.image} />
                            <Text style={StyledEmotions.feeling}>Triste</Text>
                        </TouchableOpacity>
                    </View>
              
                    <View>
                        <TouchableOpacity onPress={() => {
                          selectEmotions()
                        }}>
                            <Image source={happy} style={StyledEmotions.image} />
                            <Text style={StyledEmotions.feeling}>Feliz</Text>
                        </TouchableOpacity>
                    </View>
              
                    <View>
                        <TouchableOpacity onPress={() => {
                          selectEmotions()
                        }}>
                            <Image source={nervous} style={StyledEmotions.image} />
                            <Text style={StyledEmotions.feeling}>Preocupado</Text>
                        </TouchableOpacity>
                    </View>
              
                    <View>
                        <TouchableOpacity onPress={() => {
                          selectEmotions()
                        }}>
                            <Image source={confused} style={StyledEmotions.image} />
                            <Text style={StyledEmotions.feeling}>Cansado</Text>
                        </TouchableOpacity>
                    </View>

              
          
          </View>
          
            </View>
               
                
         
              
            
           

  
);
}


export default ListSelectEmotions;