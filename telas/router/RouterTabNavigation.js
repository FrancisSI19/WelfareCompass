import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesegin from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import NewRegister from "../cadastrar/NewRegister";
import ListEmotions from "../tab-bar/listView/List";



const Tab = createBottomTabNavigator();

function RouterHome() {

    const modalActivities = () => <View />

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            tabBarOptions={{
                style: {
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                    alignItems: 'center',
                }
            }}>
           
            <Tab.Screen
                name="Start"
                component={NewRegister}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) =>
                    (<Entypo
                        name="home"
                        size={size}
                        color={color}
                        backgroundColor="#fff"
                    />
                    )
                }}
            />
            
            <Tab.Screen
                name="modalActivities"
                component={modalActivities}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        navigation.navigate("ModalEmotions")
                    }
                })}
                
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color}) =>
                    (<AntDesegin
                        name="pluscircle"
                        size={size}
                        color={color}
                    />
                    )
                }}
            />
          
            <Tab.Screen
                name="New "
                component={ListEmotions}
                options={{
                    tabBarLabel: '',
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
