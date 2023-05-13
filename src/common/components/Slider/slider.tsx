// import { colors } from 'assets';
// import React from 'react';
// import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';;
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// import { Route } from 'react-native-tab-view/lib/typescript/src/types';

// const FirstRoute: React.FC = () => (
//   <ScrollView horizontal={true} style={[styles.scene, styles.content1]}>
//     {/* Aquí puedes poner el contenido de tu primer slider */}
//     <Text>Primera Pestaña</Text>
//   </ScrollView>
// );

// const SecondRoute: React.FC = () => (
//   <ScrollView horizontal={true} style={[styles.scene, styles.content2]}>
//     {/* Aquí puedes poner el contenido de tu segundo slider */}
//     <Text>Segunda Pestaña</Text>
//   </ScrollView>
// );

// const initialLayout = { width: Dimensions.get('window').width };

// const renderCustomTabBarLabel = ({ route }: { route: Route }) => {
//   return (
//     <Text style={styles.tabBarLabel}>{route.title}</Text>
//   );
// };

// export const Slider: React.FC = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState<Route[]>([
//     { key: 'first', title: 'Primera' },
//     { key: 'second', title: 'Segunda' },
//   ]);

//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//   });

//   const renderTabBar = (props: any) => (
//     <TabBar
//       {...props}
//       indicatorStyle={{ backgroundColor: colors.primary, borderWidth:2, borderColor: colors.primary, borderRadius:2 }}
//       style={{ 
//         backgroundColor: 'white', 
//         justifyContent:'center',
//         elevation: 0
//       }}
//       renderLabel={renderCustomTabBarLabel}
//       pressColor="#f2f2f2"   
//     />
//   );

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       renderTabBar={renderTabBar}
//       onIndexChange={setIndex}
//       initialLayout={initialLayout}
//       style={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '90%',
//     alignSelf: 'center'
//   },
//   scene: {
//     flex: 1,
//   },
//   content1: {
//     backgroundColor: '#fff',
//   },
//   content2: {
//     backgroundColor: '#fff',
//   },
//   tabBarLabel: {
//     color: colors.primary,
//     fontSize: 14,
//     textTransform: 'none'
//   }
// });

import { colors } from 'assets';
import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Route } from 'react-native-tab-view/lib/typescript/src/types';

type TabData = {
  key: string;
  title: string;
};

type TabContents = {
  [key: string]: React.FC;
}

type Props = {
  numberOfTabs: number;
  tabContents: TabContents;
  disabledTabs: Array<boolean>;
  TabBarTitle:string[];
  tabBarBackgroundColor?: string;
  tabBarStyle?: any;
  index_tab: number
};

const initialLayout = { width: Dimensions.get('window').width };

const CustomTabBarLabel: React.FC<{ route: Route, disabledTabs: Array<boolean> }> = ({ route, disabledTabs }) => {
  const tabIndex = parseInt(route.key.split('_')[1]);
  const isDisabled = disabledTabs[tabIndex];
  return (
    <Text style={[styles.tabBarLabel, isDisabled ? { color: colors.disableTransparent } : { color: colors.primary }]}>{route.title}</Text>
  );
};

export const Slider: React.FC<Props> = ({
  numberOfTabs,
  tabContents,
  disabledTabs,
  TabBarTitle,
  tabBarBackgroundColor = 'white',
  tabBarStyle = {},
  index_tab
}) => {
  const [index, setIndex] = React.useState(index_tab);

  const routes: Array<TabData> = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < numberOfTabs; i++) {
      arr.push({ key: `tab_${i}`, title: TabBarTitle[i] });
    }
    return arr;
  }, [numberOfTabs]);

  const renderScene = SceneMap(
    Object.fromEntries(
      Object.keys(tabContents).map((key, index) => [key, tabContents[key]])
    )
  );

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: colors.primary,
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 2,
      }}
      style={[{
        backgroundColor: tabBarBackgroundColor,
        justifyContent: 'center',
        elevation: 0,
      }, tabBarStyle]}
      renderLabel={(routeProps) => <CustomTabBarLabel {...routeProps} disabledTabs={disabledTabs} />}
      pressColor="#f2f2f2"
      onTabPress={({ route, preventDefault }) => {
        if (disabledTabs[parseInt(route.key.split('_')[1])]) {
          preventDefault();
        }
      }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  tabBarLabel: {
    color: colors.primary,
    fontSize: 14,
    textTransform: 'none',
  },
});


