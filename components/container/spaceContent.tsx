import React from "react";
import { View } from "react-native";

import { screenPaddingHorizontal } from "constants/layout";

import { ContainerProps } from "components/props/generic";

export const SpaceContent: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <View style={[{ paddingHorizontal: screenPaddingHorizontal }, style]}>
      {children}
    </View>
  )
}