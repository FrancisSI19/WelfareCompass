import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabDiario from "../tab-bar/Home"
import TabMenu from "../tab-bar/Menu";
import TabNew from "../tab-bar/New";

import Login from "../Login/Login";
import { NavigationContainer } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

function Routers() {
    return (
        
        <Tab.Navigator tabBarOptions={{
            style: {
                backgroundColor: '#4169e1',
                borderTopColor: 'transparent'
            },
            activeTintColor: '#FFF',
            tabStyle: {
                paddingBottom: 5,
                paddingTop:5,
            }
        }}>
            
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Diario" component={TabDiario} />
            <Tab.Screen name="New" component={TabNew} />
            <Tab.Screen name="Menu" component={TabMenu} />

        </Tab.Navigator>

        
    ); 
}

export default Routers;