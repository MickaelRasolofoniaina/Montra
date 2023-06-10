import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import { SafeArea } from "components/container/safeArea";

import { ContainerProps } from "models/props.model";

type ScreenProps = ContainerProps & {
  statusBarTheme: "light" | "dark",
  bgColor: string,
  notSafeView?: React.ReactNode,
  collapseEdge?: boolean;
  collapseBottom?: boolean;
}

export const Screen: React.FC<ScreenProps> = ({
  statusBarTheme,
  bgColor,
  children,
  notSafeView,
  style,
  collapseEdge = false,
  collapseBottom = false
}) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }, style]}>
      <StatusBar style={statusBarTheme} />
      <SafeArea removeHorizontalSpacing={collapseEdge} collapseBottom={collapseBottom}>
        {children}
      </SafeArea>
      {notSafeView}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});