import React from "react";
import { StyleSheet } from 'react-native';


const StyledListModal = StyleSheet.create({
  information: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f8f8ff',
    alignItems: 'center'
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
  },
  
    date: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    width: 250,
  },
  iconCalendar: {
    color: '#808080',
    fontSize: 11,
    },
        
    time: {
      color: '#969696',
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 15,
  },
  iconTime: {
    color: '#808080',
    fontSize: 12,
    flexDirection: 'column-reverse'
  },
    feeling: {
      color: '#008000',
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
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
 
    register: {
        color: '#000000',
        fontSize: 12,
        marginRight: 8,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 10,
        marginEnd: 10,
        marginLeft: 15,
        marginVertical: 20,
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
  dividerRegister: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 360,
    height: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#4169e1',
  },
  activityInput: {
    borderRadius: 30,
    width: 360,
    height: 100,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    color: '#a9a9a9',
    
 },
      
});


export default StyledListModal;