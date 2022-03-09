import { StyleSheet } from 'react-native';


 const StyledList = StyleSheet.create({
   information: {
      padding: 10,
   },
    image: {
      width: 40,
      height: 40,
      marginLeft: 10,
     
    },
    date: {
      color: '#808080',
      fontWeight: 'bold',
      fontSize: 14,
      flexDirection: 'row',
      marginLeft: 45,
      marginVertical: 2,
      
    },
    time: {
      color: '#808080',
      fontSize: 12,
      flexDirection: 'column-reverse',
      marginVertical: 2,
      marginLeft: 5,
    },
    feeling: {
      fontSize: 16,
      fontWeight: 'bold',
      flexDirection: 'row',
      color: 'black'
    },
    activity: {
        color:'#000000',
        fontSize: 12,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 5,
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
      marginTop: 10,
   
   
    },

 });

export default StyledList;