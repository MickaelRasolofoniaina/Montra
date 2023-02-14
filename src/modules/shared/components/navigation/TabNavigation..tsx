import React from "react";
import { View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialCommunityIcons, FontAwesome, AntDesign } from "@expo/vector-icons";

import { Screen } from "constants/Navigation";
import { primaryColor, grey100, green } from "constants/Color";
import { fontFamily } from "constants/Font";

import Home from "modules/home/screens/Home";
import FakeScreen from "modules/home/screens/FakeScreen";

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
  name: "Action",
  component: FakeScreen,
  icon: (props: { focused: boolean, color: string, size: number }) => {
    return <AntDesign name="pluscircle" size={props.size} color={green} />
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

  const onMenuActionClick = () => {
    alert("KINDY");
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: {
          fontFamily: fontFamily.semiBold,
        },
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: grey100,
        tabBarStyle: {
          height: 90
        }
      }}
      >
        {
          TABS.map(({ name, component, icon }) => {
            return <Tab.Screen key={name} name={name} component={component} options={name !== "Action" ? {
              headerShown: name !== Screen.Home,
              tabBarIcon: icon
            }: {
              tabBarButton: () => {
                return <View style={{alignItems: "center",justifyContent: "center"}}><TouchableOpacity onPress={onMenuActionClick}>
                  {icon({ focused: false, color: "", size: 50})}
                </TouchableOpacity></View>
              }
            }}/>
          })
        }
      </Tab.Navigator>
    </NavigationContainer>
  )
}
