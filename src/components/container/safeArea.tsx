import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { screenPaddingHorizontal, screenPaddingTop } from "constants/layout";

import { ContainerProps } from "models/props.model";

export type SafeAreaProps = ContainerProps & { removeHorizontalSpacing?: boolean, collapseBottom?: boolean }

export const SafeArea: React.FC<SafeAreaProps> = ({ children, removeHorizontalSpacing = false, collapseBottom = false }) => {

  return (
    <SafeAreaView style={[{}, styles.container]} edges={collapseBottom ? ["top", "right", "left"] : ["top", "right", "left", "bottom"]}>
      <View style={[styles.container, {
        paddingTop: screenPaddingTop,
        paddingHorizontal: removeHorizontalSpacing ? 0 : screenPaddingHorizontal
      }]} >
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});