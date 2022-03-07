import React, {Component} from "react";
import StyledDateTime from "./StyledDateTime";
import moment from "moment"; //intalar biblioteca do moment JS npm install moment
import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

class DateTime extends React.Component {
    
    constructor(props) {super(props);
     this.state = {
      currentDate: new Date(),
         markedDate: moment(new Date()).format("YYYY-MM-DD" ),
         
     };
    }
    
    render() {
        moment.locale('pt-br');
        const time = moment().format(' h:mm:ss a')
        const date = moment().format(' D MMMM  YYYY');
       
        return (
            
            <View style={StyledDateTime.information}>
                <View style={StyledDateTime.information2}>
                    <AntDesign 
                        name="clockcircleo"
                        style={StyledDateTime.iconTime}
                    />
                    <Text style={StyledDateTime.date}>{time}</Text>
                </View>
                <View style={StyledDateTime.information2}>
                <AntDesign 
                        name="calendar"
                        style={StyledDateTime.iconTime}
                    />
                <Text style={StyledDateTime.date}>{date}</Text>
                </View>
                
            </View>
    );
    }
}
    
export default DateTime;