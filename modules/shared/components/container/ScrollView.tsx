import React from "react";
import { ScrollView as RNScrollView } from "react-native";

import { normalizeMeasure } from "utils/Style";

import { ContainerProps } from "modules/shared/props/generic";

export const ScrollView: React.FC<ContainerProps> = ({ children }) => {
  return (
    <RNScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: normalizeMeasure(10)
      }}
    >
      {children}
    </RNScrollView>
  );
};
