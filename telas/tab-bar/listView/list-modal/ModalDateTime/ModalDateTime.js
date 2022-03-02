import React, {Component} from "react";
import StyledDateTime from "./StyledDateTime";
import moment from "moment"; //intalar biblioteca do moment JS npm install moment
import { View, Text } from "react-native";


class DateTime extends React.Component {
    
    constructor(props) {super(props);
     this.state = {
      currentDate: new Date(),
         markedDate: moment(new Date()).format("YYYY-MM-DD"),
         
     };
    }
    render() {
        moment.locale('pt-br');
        const time = moment().format(' h:mm:ss a')
        const date = moment().format(' D MMMM  YYYY');
        
        return (
            
            <View style={StyledDateTime.information}>
                
                <Text style={StyledDateTime.date}>{time}</Text>
                <Text style={StyledDateTime.date}>{date}</Text>
            </View>
    );
    }
}
    
export default DateTime;