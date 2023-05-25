import { View, StyleSheet } from "react-native";

import { normalizeMeasure } from "utils/Style";

import { ContainerProps } from "shared/props/generic";

export const HeaderContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <View style={headerContainerStyles.container}>{children}</View>
  );
}

const headerContainerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: normalizeMeasure(2)
  }
});