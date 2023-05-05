import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './homeStack';
import ExtraScreen from '../modules/extras/presentation/screens/extraScreen';
import ProfileScreen from '../modules/profile/presentation/screens/profileScreen';
import NotificationScreen from 'modules/notifications/presentation/screens/notificationScreen';

type TabParamList = {
  Inicio: undefined;
  Extras: undefined;
  Notificaciones: undefined;
  Perfil: undefined;
};

type TabIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

type ScreenOptionsProps = {
  route: { name: string };
};

const Tab = createBottomTabNavigator<TabParamList>();

export const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }: ScreenOptionsProps) => ({
          tabBarIcon: ({ focused, color, size }: TabIconProps) => {
            let iconName: string = '';

            if (route.name === 'Inicio') {
              iconName = focused
              ? 'home'
              : 'home-outline';
            }  else if (route.name === 'Extras') {
              iconName = focused ? 'md-apps-sharp' : 'md-apps-outline';
            } else if (route.name === 'Notificaciones') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#01C6C0',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Inicio" component={HomeStack} />
        <Tab.Screen name="Extras" component={ExtraScreen} />
        <Tab.Screen name="Notificaciones" component={NotificationScreen} options={{ tabBarBadge: 4 }}/>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};