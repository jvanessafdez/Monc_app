import React, { useEffect } from 'react';
import { Slider } from 'common/components';
import { SafeAreaView, StatusBar, View } from 'react-native';
import type { StatusBarStyle } from 'react-native';
import { general } from 'assets';
import { RouteProp } from '@react-navigation/native';
import { Container, Box, Text } from 'native-base';
import { RootStackParamList } from 'navigation/navigationTYpes/navigationTypes';
import { ActivityCard } from '../../components/ActivityCard/activityCard';

const STYLES = ['default', 'dark-content', 'light-content'] as const;

type ScreenNameRouteProp = RouteProp<RootStackParamList, 'activities'>;

type Props = {
  route: ScreenNameRouteProp;
};

interface Activity {
  id: number;
  title: string;
  description: string;
  status: 'to_do' | 'done';
}

export const ActivitiesScreen: React.FC<Props> = ({route}) => {
  const { shift } = route.params;
  const [statusBarStyle, setStatusBarStyle] = React.useState<StatusBarStyle>(
    STYLES[1],
  );
  const [disabledTabs, setDisabledTabs] = React.useState([false, false]);
  const TabBarTitle = ['Tareas por hacer', 'Tareas Finalizadas']

  useEffect(() => {
    Disable()
  }, [shift.status])

  const Disable = () =>{
    if(shift.status == 'created'){
      return setDisabledTabs([false,true])
    }
    if(shift.status == 'closed'){
      return setDisabledTabs([true,false])
    }
  }  

  const Content = (tab:number) =>{
    return(
      <View>
        <View style = {general.marginTop}>
          {shift.extra.activity.map((activity: Activity) =>{
            if(activity.status == 'to_do' && tab == 0){
              return <ActivityCard key={activity.id} activity={activity} status = {{status:shift.status}}/>
            }
            if(activity.status == 'done' && tab == 1){
              return <ActivityCard key={activity.id} activity={activity} status = {{status:shift.status}}/>
            }
          })}
        </View>
      </View>
    )
  }

  const tabContents = {
    tab_0: () => (
      Content(0)
    ),
    tab_1: () => (
      Content(1)
    ),
  };

  return (
    <SafeAreaView style={general.screen}>
      <StatusBar barStyle={statusBarStyle} />
        <View style={{ flex: 1 }}>
          <Slider
            numberOfTabs={2}
            tabContents={tabContents}
            TabBarTitle={TabBarTitle}
            disabledTabs={disabledTabs}
            index_tab={shift.status == 'closed' ? 1 : 0}
          />
        </View>
    </SafeAreaView>

  );
};

