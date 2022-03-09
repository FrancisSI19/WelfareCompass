import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import StyledActivitys from "./StyledActivitys";


function ModalActivitys({name}) {
    
    const [activitie, setActivitie] = useState(name);
    const [activitieList, setActivitieList] = useState();
    const [textActivitie, setTextActivitie] = useState('');
    
    //Seleção das atividades
    const [borderRadius, setBorderRadius] = useState();
    const [borderColor, setBorderColor] = useState();
    const [borderWidth, setBorderWidth] = useState();
    const [activitieSelect, setactivitieSelect] = useState(false);
    
    
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
            
            <View style={StyledActivitys.information}>
                <View
                     style={{
                        borderColor: borderColor,
                        borderWidth: borderWidth,
                        borderRadius: borderRadius,
                        width: 60,
                        height: 60,
                        marginTop: 10,
                        marginBottom: 10,
                    }}
                >
                    <TouchableOpacity onPress={() => {
                        selectActivities()
                    }}
                   
                    >
                        
                        <FontAwesome5 name={activitieList}
                            style={StyledActivitys.activityIcon}
                           
                        />
                        <Text style={StyledActivitys.activity}>{textActivitie}</Text>
                    </TouchableOpacity>
                    </View>
            </View>
      
    );
    
  }
  
  export default ModalActivitys;
  
