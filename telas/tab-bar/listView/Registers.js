import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

const sleeping = require("../../assets/humores/sleeping.png");
const happy = require("../../assets/humores/happy.png");
const sad = require("../../assets/humores/sad.png");
const nervous = require("../../assets/humores/nervous.png");


const myRegister = [
  {
    id: "1",
    date: "14 de Fevereiro de 2022",
    image: sad,
    feeling: "TRISTE",
    color: "#808080",
    time: "07:00",
    activity1: 'Meditação   ',
    activityIcon1: [
      <FontAwesome5 name="pray" color="#969696" size={12} />, "  ",  
    ],
    activity2: "Trabalho   ", 
    activityIcon2: [
    <FontAwesome5 name="chalkboard-teacher" color="#969696" size={12} />, "  ",      
    ],
    
    activity3: "Esporte   ",
    activityIcon3: [
    <MaterialCommunityIcons name="bike" color="#969696" size={12} />, "  ", 
    ],
    register: "Hoje acordei, li a bíblia, orei, fui para a academia, fiz um delicioso almoço."
  },
  
  {
    id: "2",
    date: "15 de Fevereiro de 2022",
    image: nervous,
    feeling: "PREOCUPADO",
    color: "#ff0000",
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
    id: "3",
    date: "16 de Fevereiro de 2022",
    image: happy,
    feeling: "FELIZ",
    color: '#4169e1',
    time: "07:00",
    activity1: 'Meditação   ',
    activityIcon1: [
      <FontAwesome5 name="pray" color="#969696" size={12} />, "  ",  
    ],
    activity2: "Trabalho   ", 
    activityIcon2: [
    <FontAwesome5 name="chalkboard-teacher" color="#969696" size={12} />, "  ",      
    ], 
    activity3: "Trânsito   ",
    activityIcon3: [
    <AntDesign name="car" color="#969696" size={12} />, "  ", 
    ],
    
    register: "Hoje acordei, li a bíblia, orei, fui para a academia, fiz um delicioso almoço."
  },
  {
    id: "4",
    date: "17 de Fevereiro de 2022",
    image: happy,
    feeling: "FELIZ",
    color: '#4169e1',
    time: "07:00",
    activity1: 'Meditação   ',
    activityIcon1: [
      <FontAwesome5 name="pray" color="#969696" size={12} />, "  ",  
    ],
    activity2: "Trabalho   ", 
    activityIcon2: [
    <FontAwesome5 name="chalkboard-teacher" color="#969696" size={12} />, "  ",      
    ],
    activity3: "Esporte   ",
    activityIcon3: [
    <FontAwesome5 name="swimmer" color="#969696" size={12} />, "  ", 
    ],
    register: "Hoje acordei, li a bíblia, orei, fui para a academia, fiz um delicioso almoço."
  },
  {
    id: "5",
    date: "18 de Fevereiro de 2022",
    image: sleeping,
    feeling: "CANSADO",
    color: '#008000',
    time: "07:00",
    activity1: 'Meditação   ',
    activityIcon1: [
      <FontAwesome5 name="pray" size={12} />, "  ",  
    ],
    activity2: "Trabalho   ", 
    activityIcon2: [
    <FontAwesome5 name="chalkboard-teacher" size={12} />, "  ",      
    ],
    
    activity3: "Esporte   ",
    activityIcon3: [
    <MaterialCommunityIcons name="bike" size={12} />, "  ", 
    ],
    register: "Hoje acordei, li a bíblia, orei, fui para a academia, fiz um delicioso almoço."
  },
];

export default myRegister;


