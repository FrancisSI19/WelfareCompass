import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    ScrollView
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import StyledActivitys from "./StyledActivitys";
import ModalEmotions from "../ModalEmotions/ModalEmotions";


function ModalActivitys({name}) {
    
    const [activitie, setActivitie] = useState(name);
    const [activitieList, setActivitieList] = useState();
    const [textActivitie, setTextActivitie] = useState('');    
    
        function selectionActivities() {
            if(activitie === "sports") {
                setActivitieList("swimmer");
                setTextActivitie("Natação");
            } 
            if(activitie === "shopping") {
                setActivitieList("dog");
                setTextActivitie("Pets");
             } 
            if (activitie === "party") {
                setActivitieList("church");
                setTextActivitie("Culto");
            } 
            if (activitie === "movies") {
                setActivitieList("car");
                setTextActivitie("Trânsito");
            } 
            if (activitie === "good_meal") { 
                setActivitieList("coffee");
                setTextActivitie("Café da Manhã");
            } 
            if (activitie === "games") {
                setActivitieList("biking");
                setTextActivitie("Aula de Bike");
            } 
            if (activitie === "date") {
                setActivitieList("laptop");
                setTextActivitie("Programando");
            } 
            if (activitie === "cooking") { 
                setActivitieList("users");
                setTextActivitie("Reunião");
            } 
            if (activitie === "rest") { 
                setActivitieList("chalkboard-teacher");
                setTextActivitie("Ensinando");
            } 
         
        }
        useEffect(() => { selectionActivities() }, [])
        
                
        return (
            
            <SafeAreaView style={StyledActivitys.information}>
            <View>
                <ModalEmotions />
                <View >
                        <View>
                            <TouchableOpacity>
                                <FontAwesome5 name={activitieList} style={StyledActivitys.activityIcon} />
                                <Text style={StyledActivitys.activity}>{ textActivitie}</Text>
                            </TouchableOpacity>
                        
                        </View>
                  
                    </View>
            </View>
            
        </SafeAreaView>
      
    );
    
  }
  
  export default ModalActivitys;
  
