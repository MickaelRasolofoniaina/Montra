import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

import {
  black,
  green,
  grey,
  primaryColor,
  red,
  secondaryColor,
  Theme,
  white,
  yellow,
} from "constants/color";
import { fontFamily } from "constants/font";

import { normalizeMeasure } from "utils/style";

import { Stylable } from "models/props.model";

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

export interface ButtonIconProps {
  icon: React.ReactNode;
  onPress: () => void;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonIconStyles.container}
    >
      {icon}
    </TouchableOpacity>
  )
}

const buttonIconStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: grey,
    borderRadius: 8,
    padding: normalizeMeasure(1)
  }
});

export interface SimpleButtonProps {
  label: string;
  onPress: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const SimpleButton: React.FC<SimpleButtonProps> = ({ label, onPress, startIcon, endIcon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={simpleButtonStyles.container}
    >
      <View style={simpleButtonStyles.startIcon}>{startIcon}</View>
      <Text style={simpleButtonStyles.label}>{label}</Text>
      <View style={simpleButtonStyles.endIcon}>{endIcon}</View>
    </TouchableOpacity>
  )
}

const simpleButtonStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: grey,
    borderRadius: 40,
    paddingVertical: normalizeMeasure(1),
    paddingHorizontal: normalizeMeasure(2)
  },
  startIcon: {
    marginRight: normalizeMeasure(1)
  },
  label: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    lineHeight: 18,
    color: black
  },
  endIcon: {
    marginLeft: normalizeMeasure(1)
  }
});
