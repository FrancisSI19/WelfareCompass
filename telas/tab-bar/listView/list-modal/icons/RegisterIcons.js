import React from "react";

import Icon  from "react-native-vector-icons/MaterialIcons";
import ComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";


function ListIcons () {
    ListIcons = (calendar, time, sleep, teach, dog, church, pray, swimmer)
    calendar = [

    <SimpleLineIcons name="calendar" color="#969696" size={14} />,
];

    time = [
    <Entypo name="clock" color="#969696" size={14} />,
];

    sleep = [
    <FontAwesome5 name="bed" color="#969696" size={14} />,
];

    teach = [
    <FontAwesome5 name="chalkboard-teacher" color="#969696" size={12} />,
];

    dog = [
    <FontAwesome5 name="dog" color="#969696" size={14} />,
];

    church = [
    <FontAwesome5 name="church" color="#969696" size={14} />,
];

    pray = [
    <FontAwesome5 name="pray" color="#969696" size={14} />,
];

    swimmer = [
    <FontAwesome5 name="swimmer" color="#969696" size={14} />,
];
};

export default ListIcons;