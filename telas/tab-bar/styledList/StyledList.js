import { StyleSheet } from 'react-native';

 const StyledList = StyleSheet.create({
   information: {
      padding: 10,
   },
    image: {
      width: 60,
      height: 60,
      marginLeft: 10,
      marginTop: 65
    },
    date: {
      color: '#808080',
      fontWeight: 'bold',
      fontSize: 16,
      flexDirection: 'row',
      marginLeft: 45,
      marginVertical: 2
    },
        
    time: {
      color: '#808080',
      fontSize: 12,
      flexDirection: 'column-reverse',
      marginVertical: 2,
      marginLeft: 5,
    },
    feeling: {
      color: '#ff0000',
      fontSize: 18,
      fontWeight: 'bold',
      flexDirection: 'row',
      marginLeft: 45,
    },
    activity: {
        color:'#000000',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10,
        
    },
    register: {
        color: '#000000',
        fontSize: 12,
        fontWeight: 'bold',
        alignItems: 'center',
        marginVertical: 10,
    },
    divider: {
      backgroundColor: '#ffffff',
      borderRadius: 30,
      width: 360,
      height: 170,
      justifyContent: 'flex-end',
      marginVertical: 10,
      
 },

 });

export default StyledList;