import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

import {
  green,
  primaryColor,
  red,
  secondaryColor,
  Theme,
  white,
  yellow,
} from "constants/Color";
import { fontFamily } from "constants/Font";

import { normalizeMeasure } from "utils/Style";

import { Stylable } from "shared/props/generic";

export interface ButtonProps extends Stylable {
  label: string;
  onPress: () => void;
  theme?: Theme;
}

export const getStyle = (theme: Theme) => {
  switch (theme) {
    case Theme.primary:
      return primaryStyles;
    default:
      return defaultStyles;
  }
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  theme = Theme.primary,
}) => {
  const styles = getStyle(theme);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const primaryStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: primaryColor,
    borderRadius: normalizeMeasure(2),
    paddingVertical: normalizeMeasure(2),
    marginBottom: normalizeMeasure(2),
  },
  label: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    lineHeight: 21,
    color: white,
  },
});

const defaultStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: secondaryColor,
    borderRadius: normalizeMeasure(2),
    paddingVertical: normalizeMeasure(2),
    marginBottom: normalizeMeasure(2),
  },
  label: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    lineHeight: 21,
    color: primaryColor,
  },
});

export interface CircleButtonProps extends Stylable {
  icon: React.ReactNode;
  color: string;
  onPress: () => void;
  addEffect?: boolean;
}

export const CircleButton: React.FC<CircleButtonProps> = ({
  icon,
  color,
  onPress,
  style,
  addEffect = true,
}) => {
  const Button = addEffect ? TouchableOpacity : Pressable;

  return (
    <View style={style}>
      <Button onPress={onPress}>
        <View
          style={[
            {
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              backgroundColor: color,
              height: 50,
              width: 50,
            },
          ]}
        >
          {icon}
        </View>
      </Button>
    </View>
  );
};

export const TextButton: React.FC<ButtonProps> = ({
  label,
  onPress,
  theme = Theme.default,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ marginRight: normalizeMeasure(2) }}
    >
      <Text style={[textButtonStyles.label, textButtonStyles[theme]]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const textButtonStyles = StyleSheet.create({
  label: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 19,
  },
  success: {
    color: green,
  },
  danger: {
    color: red,
  },
  primary: {
    color: primaryColor,
  },
  default: {
    color: secondaryColor,
  },
  warning: {
    color: yellow,
  },
});