import React from "react";
import { ViewStyle } from "react-native";
export interface Stylable {
  style?: ViewStyle | ViewStyle[];
}
export interface ContainerProps extends Stylable {
  children?: React.ReactNode;
}

export interface ScreenProps {
  //navigation: Navi
}