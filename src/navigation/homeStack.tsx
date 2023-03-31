import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'layouts/header';
import ShiftScreen from 'modules/shift/presentation/screens/shiftScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = 'shift'
        component = { ShiftScreen }
        options = {{
          header: (props) => <Header title='Turnos' {...props}/>
        }}
      />
    </Stack.Navigator>
  )
}