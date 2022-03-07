import React from "react";
import { StyleSheet } from 'react-native';


const StyledDateTime = StyleSheet.create({
    information: {
        alignItems: 'center',
        marginLeft: 150
    },
    information2: {
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    
    date: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 10,
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
      
        marginTop: 15,
    },
    iconTime: {
        color: '#808080',
        fontSize: 12,
      
    },
  
});

export default StyledDateTime;