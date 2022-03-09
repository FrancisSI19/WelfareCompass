import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import StyledActivitys from "./list-modal/ModalActivitys/StyledActivitys";

function ListApiActivities({ name }) {

    const [activitie, setActivitie] = useState(name);
    const [activitieList, setActivitieList] = useState();
    const [textActivitie, setTextActivitie] = useState('');
    console.warn(name)
        
    function activitieApi() {
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
        
        useEffect(() => { activitieApi() }, [])
    
    return (
        <View>
           <FontAwesome5 name={activitieList}
                style={StyledActivitys.activityIcon}
            />
            <Text style={StyledActivitys.activity}>{textActivitie}</Text>
        </View>
    )
}

export default ListApiActivities;
