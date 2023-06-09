import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { InputValue, MultipleInputData } from "definitions/type";

import { grey200, grey, yellow } from "constants/color";
import { fontFamily } from "constants/font";

import { addStyleWhen, normalizeMeasure } from "utils/style";

export interface RadioItemProps {
  label: string;
  value: InputValue;
  onSelected: (value: InputValue) => void;
  active: boolean;
  marginBottom?: number;
}

export const RadioItem: React.FC<RadioItemProps> = ({ label, value, onSelected, active, marginBottom = 2 }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(value)} style={[styles.container,{marginBottom: normalizeMeasure(marginBottom)}]}>
      <View style={[styles.dot, addStyleWhen(active,styles.dotActive)]} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const DOT_SIZE = 18;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: DOT_SIZE / 2,
    borderWidth: 1,
    borderColor: grey200,
    height: DOT_SIZE,
    width: DOT_SIZE,
    marginRight: normalizeMeasure(1)
  },
  dotActive: {
    backgroundColor: yellow
  },
  label: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 18,
    color: grey,
    textTransform: "capitalize"
  }
});

export interface RadioInputProps {
  items: MultipleInputData[];
  onChange: (value: InputValue, label: string) => void;
  value: InputValue;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  items,
  onChange,
  value
}) => {

  const [selectedValue, setSelectedValue] = useState<InputValue>(value);

  const handleValueChange = (value: InputValue, label: string) => {
    setSelectedValue(value);
    onChange(value, label);
  }

  // No need to use FlatList or FlashList
  return (
    <View>
      { items.map(({ label, value}) => (
        <RadioItem label={label} value={value} onSelected={(value: InputValue) => handleValueChange(value, label)} active={value === selectedValue} />
      ))}
    </View>
  )
}
