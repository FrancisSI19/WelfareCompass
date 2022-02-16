import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesegin from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import Login from "../Login/Login";
import NewRegister from "../cadastrar/NewRegister";
import RegisterDaily from "../tab-bar/RegisterDaily";


const Tab = createBottomTabNavigator();

function RouterHome() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            tabBarOptions={{
                style: {
                    backgroundColor: '#778899',
                    borderTopColor: 'transparent'
                },
                activeTintColor: '#FFF',
                tabStyle: {
                    
                    paddingTop: 5,
                }
            }}>
           
            <Tab.Screen
                name="Start"
                component={NewRegister}
                options={{
                    tabBarIcon: ({ size, color }) =>
                    (<Entypo
                        name="home"
                        size={size}
                        color={color}
                    />
                    )
                }}
            />
            
            <Tab.Screen
                name="New "
                component={Login}
                options={{
                    tabBarIcon: ({ size, color }) =>
                    (<AntDesegin
                        name="pluscircle"
                        size={size}
                        color={color}
                    />
                    )
                }}
            />
          
            <Tab.Screen
                name="Menu"
                component={RegisterDaily}
                options={{
                    tabBarIcon: ({ size, color }) =>
                    (<Feather
                        name="list"
                        size={size}
                        color={color}
                    />
                    )
                }}
            />

        </Tab.Navigator>
    );
}

export default RouterHome;


/*
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
                  */