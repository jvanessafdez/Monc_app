import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'layouts/header';
import { ShiftDetailsScreen, ShiftScreen, CheckInOut } from 'modules/shift/presentation/screens';
import { RootStackParamList } from './navigationTYpes/navigationTypes';

const Stack = createStackNavigator<RootStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="shift"
        component={ShiftScreen}
        options={{
          header: (props) => <Header title='Turnos' search {...props} />,
        }}
      />
      <Stack.Screen
        name="shift-details"
        component={ShiftDetailsScreen}
        options={{
          header: (props) => <Header title='Turnos' {...props} />,
        }}
      />
      <Stack.Screen
        name="check-in-out"
        component={CheckInOut}
        options={{
          headerShown: false, // Agrega esta línea para ocultar el encabezado
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;