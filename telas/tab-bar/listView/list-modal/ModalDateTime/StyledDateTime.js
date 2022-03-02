import React from "react";
import { StyleSheet } from 'react-native';


const StyledDateTime = StyleSheet.create({
    information: {
        alignItems: 'center'
    },
    date: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
        width: 250,
        alignItems: 'center'
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
  
});

export default StyledDateTime;