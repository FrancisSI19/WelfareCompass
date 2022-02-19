import { StyleSheet } from 'react-native';

 const StyledList = StyleSheet.create({
   information: {
  padding: 10,
   
    },
   
    image: {
    marginTop: 40,
    width: 60,
      height: 60,
    marginLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
     },
    date: {
      color: '#808080',
      fontWeight: 'bold',
      fontSize: 16,
      marginLeft: 15,
      alignItems: 'center',
      marginStart: 30,
      
    },
        
    time: {
      color: '#808080',
      fontSize: 12,
      marginVertical: 8,
      flexDirection: 'column',
      
      

    },
    feeling: {
      color: '#ff0000',
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 8,
      marginHorizontal: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginStart: 50,
      
          
     },
    activity: {
        color:'#000000',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    register: {
        color: '#000000',
        fontSize: 12,
        marginRight: 8,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 5,
        marginEnd: 10,
        marginLeft: 15,
        marginVertical: 20,
        
      
    },
   divider: {
    
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 360,
    height: 200,
    justifyContent: 'center'
 },

 });

export default StyledList;