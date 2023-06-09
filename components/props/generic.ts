import React from "react";

import { ComponentStyle } from "definitions/type";
export interface Stylable {
  style?: ComponentStyle;
}
export interface ContainerProps extends Stylable {
  children?: React.ReactNode;
}
