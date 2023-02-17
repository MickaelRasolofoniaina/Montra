import React from "react";
import { KeyboardTypeOptions, TextInput as RNTextInput, StyleSheet } from "react-native";

import { fontFamily } from "constants/Font";
import { grey, grey200, white } from "constants/Color";

import { normalizeMeasure } from "utils/Style";

import { Stylable } from "modules/shared/props/generic";

export enum TextInputVariant {
  Large = "large",
  Normal = "normal"
}

export interface TextInputProps extends Stylable {
  value: string;
  onChange: (text: string) => void;
  variant?: TextInputVariant;
  type?: KeyboardTypeOptions | undefined;
  placeholder?: string
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, variant = TextInputVariant.Normal, type = "default", style, placeholder = "" }) => {
  return (
    <RNTextInput 
      onChangeText={onChange}
      value={value}
      keyboardType={type}
      style={[styles[variant], style]}
      returnKeyType="done"
      placeholder={placeholder}
    />
  )
}

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
    marginBottom: normalizeMeasure(2)
  },
  large: {
    fontFamily: fontFamily.semiBold,
    fontSize: 64,
    lineHeight: 77,
    color: white,
    marginBottom: normalizeMeasure(1)
  }
});