import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { addStyleWhen } from "utils/Style";

import { primaryColor, grey100, green, red, blue } from "constants/Color";
import { fontFamily, fontSize } from "constants/Font";

import { ContainerProps } from "shared/props/generic";

import { CircleButton } from "../form/Button";


interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}

const MenuAction: React.FC = () => {
  const [show, toggleShow] = useState(false);

  const toggleMenu = () => {
    toggleShow((prev) => !prev);
  };

  const onPress = () => {};

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
    top: -75 * 2,
  },
  showOnLeft: {
    top: -75,
    left: -75,
  },
  showOnRight: {
    top: -75,
    right: -75,
  },
  tabNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

// export const TabNavigation: React.FC = () => {
//   return (
//     <View style={styles.tabNavigation}>
//       <Entypo name="home" size={30} color={grey} />
//       <MaterialCommunityIcons name="finance" size={30} color={grey} />
//       <AntDesign name="pluscircle" size={30} color={grey} />
//       <Entypo name="pie-chart" size={30} color={grey} />
//       <FontAwesome name="user" size={30} color={grey} />
//     </View>
//   );
// };

export const TabNavigation: React.FC = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: grey100,
      tabBarActiveTintColor: primaryColor,
      tabBarLabelStyle: {
        fontFamily: fontFamily.semiBold,
        fontSize: 10,
        lineHeight: 12
      }
    }}>
      <Tabs.Screen name="home/index" options={{
        title: "Home",
        tabBarIcon: ({ color, size }) => {
          return <Entypo name="home" size={size} color={color} />
        }
      }} />
      <Tabs.Screen name="transaction/index" options={{
        title: "Transaction",
        tabBarIcon: ({ color, size }) => {
          return <MaterialCommunityIcons name="finance" size={size} color={color} />
        }
      }} />
      <Tabs.Screen name="budget/index" options={{
        title: "Budget",
        tabBarIcon: ({ color, size }) => {
          return <Entypo name="pie-chart" size={size} color={color} />
        }
      }} />
      <Tabs.Screen name="profile/index" options={{
        title: "Profile",
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome name="user" size={size} color={color} />
        }
      }} />
    </Tabs>
  )
} 

