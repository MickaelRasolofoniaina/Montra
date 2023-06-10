import React from "react";

import { ComponentStyle } from "types/style.type";

export interface Stylable {
  style?: ComponentStyle;
}
export interface ContainerProps extends Stylable {
  children?: React.ReactNode;
}