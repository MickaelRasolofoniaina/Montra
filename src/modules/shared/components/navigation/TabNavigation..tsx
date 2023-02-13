import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { Screen } from 'constants/Navigation';
import { primaryColor, grey100 } from 'constants/Color';
import { fontFamily } from 'constants/Font';

import Home from 'modules/home/screens/Home';

const Tab = createBottomTabNavigator();

const TABS = [{
  name: Screen.Home,
  component: Home,
  icon: (props: { focused: boolean, color: string, size: number }) => {
    return <Entypo name="home" size={props.size} color={props.color} />
  }
},{
  name: Screen.Transaction,
  component: Home,
  icon: (props: { focused: boolean, color: string, size: number }) => {
    return <MaterialCommunityIcons name="finance" size={props.size} color={props.color} />
  }
},{
  name: Screen.Budget,
  component: Home,
  icon: (props: { focused: boolean, color: string, size: number }) => {
    return <Entypo name="pie-chart" size={props.size} color={props.color} />
  }
},{
  name: Screen.Profile,
  component: Home,
  icon: (props: { focused: boolean, color: string, size: number }) => {
    return <FontAwesome name="user" size={props.size} color={props.color} />
  }
}]

export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: {
          fontFamily: fontFamily.semiBold,
          fontWeight: '500'
        },
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: grey100
      }}
      >
        {
          TABS.map(({ name, component, icon }) => {
            return <Tab.Screen key={name} name={name} component={component} options={{
              headerShown: name !== Screen.Home,
              tabBarIcon: icon
            }}/>
          })
        }
      </Tab.Navigator>
    </NavigationContainer>
  )
}
