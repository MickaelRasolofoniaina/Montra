import React from "react";
import { View, StyleSheet } from "react-native";

import { ContainerProps } from "models/props.model";

import { normalizeMeasure, addStyleWhen } from "utils/style";

export enum CardType {
  Full,
  Half
}

export interface CardProps extends ContainerProps {
  type?: CardType;
  collapseeEdge?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, style, type = CardType.Half, collapseeEdge = false }) => {
  return (
    <View style={[styles.container, style, addStyleWhen(type === CardType.Full, styles.full), addStyleWhen(collapseeEdge, styles.collapseEdge)]}>
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
    borderBottomStartRadius: normalizeMeasure(4),
    paddingBottom: normalizeMeasure(3),
  },
  collapseEdge: {
    paddingTop: 0,
    paddingHorizontal: 0,
    paddingBottom: 0
  }
});