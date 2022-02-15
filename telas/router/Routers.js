import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo';

import Menu from "../tab-bar/Menu";
import List from "../tab-bar/List";
import NewRegister from "../cadastrar/NewRegister";
import RegisterDaily from "../tab-bar/RegisterDaily";

const Tab = createBottomTabNavigator();

function Routers() {
    return (
        
        <Tab.Navigator tabBarOptions={{
            style: {
                backgroundColor: '#778899',
                borderTopColor: 'transparent'
            },
            activeTintColor: '#FFF',
            tabStyle: {
                paddingBottom: 5,
                paddingTop:5,
            }
        }}>
           
            <Tab.Screen
                name="Home"
                component={RegisterDaily}
            />
            
            <Tab.Screen
                name="New "
                component={NewRegister}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Home') {
                        iconName = focused
                          ? 'ios-information-circle'
                          : 'ios-information-circle-outline';
                      } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                      }
          
                    return <Entypo name="home" size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                  })}
            />
          
            <Tab.Screen name="Menu" component={Menu} />

        </Tab.Navigator>

        
    );  
}

export default Routers;