import React from "react";
import { ScrollView as RNScrollView } from "react-native";

import { normalizeMeasure } from "utils/style";

import { ContainerProps } from "components/props/generic";

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
