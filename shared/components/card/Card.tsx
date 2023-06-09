import React from "react";
import { View, StyleSheet } from "react-native";

import { ContainerProps } from "shared/props/generic";

import { normalizeMeasure, addStyleWhen } from "utils/Style";

export enum CardType {
  Full,
  Half
}

export interface CardProps extends ContainerProps {
  type?: CardType
}

export const Card: React.FC<CardProps> = ({ children, style, type = CardType.Half }) => {
  return (
    <View style={[styles.container, style, addStyleWhen(type === CardType.Full, styles.full)]}>
      {children}
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderTopStartRadius: normalizeMeasure(4),
    borderTopEndRadius: normalizeMeasure(4),
    paddingTop: normalizeMeasure(3),
    paddingHorizontal: normalizeMeasure(2)
  },
  full: {
    borderBottomEndRadius: normalizeMeasure(4),
    borderBottomStartRadius: normalizeMeasure(4)
  }
});