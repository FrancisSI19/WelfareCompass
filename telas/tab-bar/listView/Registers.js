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
    image: sad,
    feeling: "TRISTE",
    color: "#808080",
    
  },
  
  {
    id: "2",
    image: nervous,
    feeling: "PREOCUPADO",
    color: "#ff0000",
    
  },

  {
    id: "3",
    image: happy,
    feeling: "FELIZ",
    color: '#4169e1',
    
  },
  {
    id: "4",
    image: happy,
    feeling: "FELIZ",
    color: '#4169e1',
    
  },
  {
    id: "5",
    image: sleeping,
    feeling: "CANSADO",
    color: '#008000',
    
  },
];

export default myRegister;


