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
        <NavigationContainer>
            <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#b0c4de',
                    },
                    activeTintColor: '#d3d3d3',
                    tabStyle: {
                        paddingTop: 5,
                    }    
                }}
        >
            
            <Tab.Screen name="Diario" component={TabDiario} />
            <Tab.Screen name="New" component={TabNew} />
            <Tab.Screen name="Menu" component={TabMenu} />

        </Tab.Navigator>
    </NavigationContainer>
        
    ); 
}

export default Routers;