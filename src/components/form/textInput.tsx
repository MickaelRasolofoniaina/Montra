import React from "react";
import {
  KeyboardTypeOptions,
  TextInput as RNTextInput,
  StyleSheet,
} from "react-native";

import { fontFamily } from "constants/font";
import { grey, grey200, white } from "constants/color";

import { normalizeMeasure } from "utils/style";

import { Stylable } from "models/props.model";

export enum TextInputVariant {
  Large = "large",
  Normal = "normal",
}

export interface TextInputProps extends Stylable {
  value: string;
  onChange: (text: string) => void;
  variant?: TextInputVariant;
  type?: KeyboardTypeOptions | undefined;
  placeholder?: string;
  placeholderTextColor?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  variant = TextInputVariant.Normal,
  type = "default",
  style,
  placeholder = "",
  placeholderTextColor,
}) => {
  return (
    <RNTextInput
      onChangeText={onChange}
      value={value}
      keyboardType={type}
      style={[styles[variant], style]}
      returnKeyType="done"
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

const styles = StyleSheet.create({
  normal: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 18,
    color: grey,
    borderWidth: 1,
    borderColor: grey200,
    borderRadius: 16,
    padding: normalizeMeasure(2),
    marginBottom: normalizeMeasure(2),
  },
  large: {
    fontFamily: fontFamily.semiBold,
    fontSize: 64,
    lineHeight: 77,
    color: white,
    marginBottom: normalizeMeasure(1),
  },
});
