import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import { screenPaddingHorizontal, screenPaddingTop } from "constants/layout";

import { ContainerProps } from "models/props.model";

export type SafeAreaProps = ContainerProps & { removeHorizontalSpacing?: boolean}

export const SafeArea: React.FC<SafeAreaProps> = ({ children, removeHorizontalSpacing = false }) => {
  return (
    <SafeAreaView style={styles.container}>
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