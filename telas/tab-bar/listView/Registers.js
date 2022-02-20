import React from "react";
import icons from "./icons/RegisterIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const confused = require("../../assets/humores/confused.png");
const happy = require("../../assets/humores/happy.png");
const sleeping = require("../../assets/humores/sleeping.png");
const nervous = require("../../assets/humores/nervous.png");



const myRegister = [
  {
    id: "1",
    date: "14 de Fevereiro de 2022",
    image: confused,
    feeling: "CONFUSO",
    time: "07:00",
    activity1: 'Meditação   ',
    activityIcon1: [
      <FontAwesome5 name="pray" color="#969696" size={12} />, "  ",  
    ],
    activity2: "Esporte   ",
    activityIcon2: [
    <FontAwesome5 name="swimmer" color="#969696" size={12} />, "  ", 
    ],
    activity3: 'Trabalho  ', 
    activityIcon3: [
    <FontAwesome5 name="chalkboard-teacher" color="#969696" size={12} />, "  ",      
    ],
    register: "Hoje acordei, li a bíblia, orei, fui para a academia, fiz um delicioso almoço."
  },
  {
    id: "2",
    date: "15 de Fevereiro de 2022",
    image: happy,
    feeling: "FELIZ",
    time: "07:00",
    activity1: "Esporte",
    activity2: "Cozinhar",
    activity3: "Esporte",
    register: "Hoje acordei, li a bíblia, orei, fui para a academia, fiz um delicioso almoço."
},
  

];

export default myRegister;


