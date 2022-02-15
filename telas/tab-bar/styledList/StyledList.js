import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  information: {
        padding: 24,
        flexDirection: "row",
      
    },
    image: {
        width: 60,
        height: 60,
        
    },
    date: {
        color: colors.grey,
        fontWeight: 'bold',
        fontSize: 16,
  },
    time: {
        color: colors.grey,
        fontSize: 14,
        marginVertical: 8,
    },
    sentimento: {
        color: colors.red,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    atividades: {
        color: colors.black,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    relatorio: {
        color: colors.black,
        fontSize: 16,
        marginRight: 8,
        fontWeight: 'bold',
        textAlign: 'right',
        
      },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.cinza,
  },

});