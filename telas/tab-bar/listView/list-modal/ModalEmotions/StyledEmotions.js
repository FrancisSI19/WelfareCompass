import React from "react";
import { StyleSheet } from 'react-native';


const StyledEmotions = StyleSheet.create({
  information: {
    backgroundColor: '#f8f8ff',
    alignItems: 'center',
    
    
  },
  title: {
    color:'#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
 },
    image: {
    marginTop: 15,
    alignSelf: 'center',
    width: 40,
    height: 40,
    flexDirection: 'row',
 
  },
    feeling: {
      color: '#008000',
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
   
    iconClose: {
      width: 35,
      height: 30,
      fontSize: 20,
      backgroundColor:  '#d3d3d3',
      textAlign: 'center',
      textAlignVertical: 'center',
      marginLeft: 20,
      marginTop: 25,
      borderRadius: 10,
      color: '#4169e1',
      
},
  divider: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 360,
    height: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    
  },

       
 });


export default StyledEmotions;