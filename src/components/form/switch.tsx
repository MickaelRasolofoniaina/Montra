import React from "react";
import { View, Text, Switch as RNSwitch, StyleSheet } from "react-native";

import { fontFamily } from "constants/font";
import { black300, grey, primaryColor } from "constants/color";

import { normalizeMeasure } from "utils/style";

export interface SwitchProps {
  label: string;
  description: string;
  onValueChange: (value: boolean) => void;
  value: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  description,
  onValueChange,
  value,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <RNSwitch onValueChange={onValueChange} value={value} ios_backgroundColor={primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: normalizeMeasure(2)
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    lineHeight: 19,
    color: black300,
    marginBottom: normalizeMeasure(1)
  },
  description: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
    lineHeight: 16,
    color: grey,
  }
});
