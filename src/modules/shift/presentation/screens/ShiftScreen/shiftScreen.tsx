import React from 'react'
import { SafeAreaView, StatusBar, ScrollView, Text } from 'react-native'
import type { StatusBarStyle } from 'react-native';

import { ShiftCard } from '../../components/ShiftCard/shiftCard';
import { arrayShifts } from '../../../../../mocks/arrayShifts'
import { general } from 'assets';

const STYLES = ['default', 'dark-content', 'light-content'] as const;

export const ShiftScreen: React.FC = () => {
  const [statusBarStyle, setStatusBarStyle] = React.useState<StatusBarStyle>(
    STYLES[1],
  );
  const textStyle = {
    ...general.subtitle,
    marginStart: '5%',
    marginBottom:20
  };
  return (
    <SafeAreaView style={general.screen}>
      <StatusBar
        animated={true}
        backgroundColor='#fff'
        barStyle={statusBarStyle}
      />
      <ScrollView>
        <Text style={textStyle}>Hoy</Text>
        {
          arrayShifts.map(shift =>{
            return <ShiftCard key={shift.id} shift={shift}/>
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}