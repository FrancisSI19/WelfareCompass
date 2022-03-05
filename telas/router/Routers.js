import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native";


import Login from "../Login/Login";
import NewRegister from "../cadastrar/NewRegister";
import RegisterDaily from "../tab-bar/listView/RegisterDaily";
import RouterHome from "./RouterTabNavigation";
import { initialWindowMetrics } from "react-native-safe-area-context";
import ModalEmotions from "../tab-bar/listView/list-modal/ModalEmotions/ModalEmotions";


const Stack = createStackNavigator();


function Routers() {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="RouterHome" component={RouterHome} />
            <Stack.Screen name="ModalEmotions" component={ModalEmotions} />
            
        </Stack.Navigator>
        
    );  
}

export default Routers;