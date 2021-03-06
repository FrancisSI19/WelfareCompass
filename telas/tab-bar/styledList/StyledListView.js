import { StyleSheet } from 'react-native';

const StyledListView = StyleSheet.create({
  information: {
     flex: 1,
     padding: 24,
    backgroundColor: '#f8f8ff',
     alignItems: 'center'
     
    },
    image: {
    marginTop: 15,
    alignSelf: 'center',
    width: 60,
    height: 60,
    },
    date: {
      color: '#808080',
      fontWeight: 'bold',
      fontSize: 14,
      marginTop: 10,
      textAlign: 'center',

    
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
      
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 15,
      
     },
    activity: {
      color:'#000000',
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 10,
  },
  activityIcon: {
    color:'#000000',
    backgroundColor: 'blue',
    borderRadius: 50,
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
    iconBack: {
      color: '#969696',
      fontSize: 25,
      alignSelf: 'flex-start',
      
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
    backgroundColor: '#dcdcdc',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 30,
    marginRight: 10,
    borderRadius: 50,
    flexDirection: 'column',
    textAlign: 'center'
  
},
  
       
 });

export default StyledListView;