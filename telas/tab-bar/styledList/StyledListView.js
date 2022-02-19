import { StyleSheet } from 'react-native';

 const StyledListView = StyleSheet.create({
   information: {
     flex: 1,
     padding: 24,
          
    },
    image: {
    marginTop: 20,
    marginVertical: 20,
    marginEnd: 10,
    marginLeft:10,
    alignItems: 'center',
    width: 60,
    height: 60,
    },
    date: {
      color: '#808080',
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 20,
    },
        
    time: {
      color: '#808080',
      fontSize: 14,
    
    },
    feeling: {
      color: '#ff0000',
      fontSize: 16,
      fontWeight: 'bold',
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
        marginTop: 10,
        marginEnd: 10,
        marginLeft: 15,
        marginVertical: 20,
    },
   
 });

export default StyledListView;