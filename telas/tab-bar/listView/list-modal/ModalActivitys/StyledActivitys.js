import React from "react";
import { StyleSheet } from 'react-native';


const StyledActivitys = StyleSheet.create({
  information: {
    flex: 1,
    padding: 5,
    marginTop: 5,
    alignItems: 'center'
    
   },
  activity: {
      color:'#000000',
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  activityIcon: {
    color:'#000000',
    fontSize: 30,
    borderWidth: 2,
    borderColor: '#4169e1',
    borderRadius: 30,
    width: 60,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
 
  divider: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 360,
    height: 290,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#4169e1',
  },
 });


export default StyledActivitys;