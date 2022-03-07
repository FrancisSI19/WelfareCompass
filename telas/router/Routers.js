import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Login from "../Login/Login";
import RouterHome from "./RouterTabNavigation";
import ModalEmotions from "../tab-bar/listView/list-modal/ModalEmotions/ModalEmotions";
import ListView from "../tab-bar/listView/listView";


const Stack = createStackNavigator();


function Routers() {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="RouterHome" component={RouterHome} />
            <Stack.Screen name="ModalEmotions" component={ModalEmotions} />
            <Stack.Screen name="ListView" component={ListView}/>
            
        </Stack.Navigator>
        
    );  
}

export default Routers;