import React from "react";
import { StyleSheet } from 'react-native';


const StyledActivitys = StyleSheet.create({
  information: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f8f8ff',
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
    textAlignHorizontal: 'center',
  },
  activityTitle: {
    color:'#000000',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
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
    flexDirection: 'row'
  },
  dividerActivity: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 360,
    height: 400,
    justifyContent: 'space-around',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#4169e1',
  
  },
  dividerActivity1: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 340,
    height: 110,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row'
  },
       
 });


export default StyledActivitys;