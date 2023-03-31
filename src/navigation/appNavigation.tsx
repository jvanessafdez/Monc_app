import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeStack from './homeStack';
import { Icon } from 'react-native-vector-icons/AntDesign';
import { Text, View } from "native-base";

const Tab = createMaterialBottomTabNavigator();

export function AppNavigation() {
    return (
        <View>
            <Text>Hola</Text>
        </View>
       // <NavigationContainer>
        //    <Tab.Navigator
        //        shifting = {false}
        //        screenOptions = {({route}) => ({
        //            tabBarIcon: (routeStatus) => {
        //                return setIcon(route, routeStatus);
        //            },
        //            tabBarOptions: { upperCaseLabel: false }
        //        })}
        //    >
        //        <Tab.Screen
        //            name = 'home-stack'
        //            component = { HomeStack }
        //            options = {{
        //                title: 'Inicio'
        //            }}
        //        />
        //    </Tab.Navigator>
        //</NavigationContainer>
    )
}

type RouteProps = {
    route: any;
    routeStatus: any;
};

function setIcon ({route, routeStatus}: RouteProps) {
    switch(route.name) {
        case 'home-stack':
            return <Icon name='house'/>
            break;
        case 'home-stack':
            return <Icon name='house'/>
            break;
        case 'home-stack':
            return <Icon name='house'/>
            break;
        case 'home-stack':
            return <Icon name='house'/>
            break;
        default:
            break;
    }
}