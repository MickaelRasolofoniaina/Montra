import React from "react";
import { View, StyleSheet } from "react-native";

import { addStyleWhen } from "utils/style";

import { ContainerProps } from "components/props/generic";

export type StickyFooterProps = ContainerProps & { collapseBottom?: boolean };

export const StickyFooter: React.FC<StickyFooterProps> = ({ children, collapseBottom = false }) => {
  return (
    <View style={[styles.footer, addStyleWhen(collapseBottom, { bottom: 0 })]}>
      {children}
    </View>
  )
} 

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  }
});