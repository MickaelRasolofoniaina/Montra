import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { addStyleWhen } from "utils/Style";

import { primaryColor, grey100, green, red, blue } from "constants/Color";
import { fontFamily } from "constants/Font";

import Home from "modules/home/screens/Home";
import FakeScreen from "modules/home/screens/FakeScreen";

import { CircleButton } from "../form/Button";

interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}

const MenuAction: React.FC = () => {

  const [show, toggleShow] = useState(false);

  const toggleMenu = () => {
    toggleShow(prev => !prev);
  };

  const onPress = () => {

  }

  return (
    <>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <CircleButton
          icon={<AntDesign name="downcircleo" size={24} color="#FFF" />}
          color={green}
          onPress={onPress}
          style={[styles.hide, addStyleWhen(show, styles.showOnLeft)]}
        />
        <CircleButton
          icon={<AntDesign name="upcircleo" size={24} color="#FFF" />}
          color={red}
          onPress={() => {}}
          style={[styles.hide, addStyleWhen(show, styles.showOnRight)]}
        />
        <CircleButton
          icon={<Entypo name="cycle" size={24} color="#FFF" />}
          color={blue}
          onPress={onPress}
          style={[styles.hide, addStyleWhen(show, styles.showOnTop)]}
        />
        <CircleButton
          addEffect={false}
          icon={<AntDesign name="plus" size={24} color="#FFF" />}
          color={green}
          onPress={toggleMenu}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  hide: {
    position: "absolute",
  },
  showOnTop: {
    top: -75 * 2
  },
  showOnLeft: {
    top: -75,
    left: -75
  },
  showOnRight: {
    top: -75,
    right: -75
  }
});

const TABS = [
  {
    name: "Home",
    component: Home,
    icon: (props: IconProps) => {
      return <Entypo name="home" size={props.size} color={props.color} />;
    },
  },
  {
    name: "Transaction",
    component: TransactionNavigator,
    icon: (props: IconProps) => {
      return (
        <MaterialCommunityIcons
          name="finance"
          size={props.size}
          color={props.color}
        />
      );
    },
  },
  {
    name: "Action",
    component: FakeScreen,
    icon: (props: IconProps) => {
      return <AntDesign name="pluscircle" size={props.size} color={green} />;
    },
  },
  {
    name: "Budget",
    component: Home,
    icon: (props: IconProps) => {
      return <Entypo name="pie-chart" size={props.size} color={props.color} />;
    },
  },
  {
    name: "Profile",
    component: Home,
    icon: (props: IconProps) => {
      return <FontAwesome name="user" size={props.size} color={props.color} />;
    },
  },
];

export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontFamily: fontFamily.semiBold,
          },
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: grey100,
          tabBarStyle: {
            height: 90,
          },
        }}
      >
        {TABS.map(({ name, component, icon }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={
                name !== "Action"
                  ? {
                      headerShown: name !== RootScreen.Home,
                      tabBarIcon: icon,
                    }
                  : {
                      tabBarButton: () => <MenuAction />,
                    }
              }
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
