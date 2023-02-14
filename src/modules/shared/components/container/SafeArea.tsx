import React from "react";
import { StyleSheet, SafeAreaView, LayoutChangeEvent, View } from "react-native";

import { screenPaddingHorizontal, screenPaddingTop } from "constants/Layout";

import { ContainerProps } from "../../props/generic";

export type SafeAreaProps = ContainerProps & { onLayout?: (event: LayoutChangeEvent) => void, removeHorizontalSpacing?: boolean}

export const SafeArea: React.FC<SafeAreaProps> = ({ children, onLayout, removeHorizontalSpacing = false }) => {
  return (
    <SafeAreaView onLayout={onLayout} style={styles.container}>
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