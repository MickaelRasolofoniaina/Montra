import React from "react";
import { View } from "react-native";

import { screenPaddingHorizontal } from "constants/Layout";

import { ContainerProps } from "shared/props/generic";

export const SpaceContent: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <View style={[{ paddingHorizontal: screenPaddingHorizontal }, style]}>
      {children}
    </View>
  )
}