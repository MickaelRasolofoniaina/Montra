import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";

import { addStyleWhen } from "utils/Style";

import { primaryColor, grey100, green, red, blue } from "constants/Color";
import { fontFamily } from "constants/Font";

import { CircleButton } from "../form/Button";

export const MenuAction: React.FC = ({}) => {
  const router = useRouter();

  const [show, toggleShow] = useState(false);

  const toggleMenu = () => {
    toggleShow((prev) => !prev);
  };

  const navigate = (routeName: string) => {
    router.replace(routeName);
    toggleShow(false);
  };

  return (
    <>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <CircleButton
          icon={<AntDesign name="downcircleo" size={24} color="#FFF" />}
          color={green}
          onPress={() => navigate("transaction/income")}
          style={[styles.hide, addStyleWhen(show, styles.showOnLeft)]}
        />
  
        <CircleButton
          icon={<AntDesign name="upcircleo" size={24} color="#FFF" />}
          color={red}
          onPress={() => navigate("transaction/expense")}
          style={[styles.hide, addStyleWhen(show, styles.showOnRight)]}
        />
        <CircleButton
          icon={<Entypo name="cycle" size={24} color="#FFF" />}
          color={blue}
          onPress={() => navigate("transaction")}
          style={[styles.hide, addStyleWhen(show, styles.showOnTop)]}
        />
        <CircleButton
          addEffect={false}
          icon={<AntDesign name="plus" size={24} color="#FFF" style={addStyleWhen(show, {
            transform: [
              {
                rotate: "45deg"
              }
            ]
          })} />}
          color={primaryColor}
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

export const TabNavigation: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopWidth: 0 },
        tabBarInactiveTintColor: grey100,
        tabBarActiveTintColor: primaryColor,
        tabBarLabelStyle: {
          fontFamily: fontFamily.semiBold,
          fontSize: 10,
          lineHeight: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: "Transaction",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="finance"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="action"
        options={{
          tabBarLabel: () => null,
          tabBarButton: () => {
            return <MenuAction />;
          },
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="pie-chart" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="user" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};
