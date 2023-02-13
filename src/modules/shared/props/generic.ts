import React from "react";
export interface Stylable {
  style?: any;
}
export interface ContainerProps extends Stylable {
  children?: React.ReactNode;
}

export interface ScreenProps {
  //navigation: Navi
}