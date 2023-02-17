import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { InputValue, MultipleInputData } from "definitions/type";

import { normalizeMeasure } from "utils/Style";

import { fontFamily } from "constants/Font";
import { grey, grey200 } from "constants/Color";

import { Modal } from "../container/Modal";
import { RadioInput } from "./RadioInput";

export interface SelectInputProps {
  items: MultipleInputData[];
  onChange: (value: InputValue) => void;
  label: string;
  value: InputValue;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  items,
  onChange,
  value,
  label
}) => {
  const [showPicker, displayPicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleChange = (value: InputValue, label: string) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    displayPicker(false);
    onChange(value);
  }

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={() => displayPicker(true)}>
        <Text style={styles.text}>{selectedLabel !== "" ? selectedLabel : label}</Text>
        <AntDesign name="down" size={20} color={grey} />
      </TouchableOpacity>
      <Modal visible={showPicker} onClose={() => displayPicker(false)}>
        <RadioInput items={items} onChange={handleChange} value={selectedValue} />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: grey200,
    borderRadius: 16,
    padding: normalizeMeasure(2),
    marginBottom: normalizeMeasure(2),
  },
  text: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 18,
    color: grey,
    textTransform: "capitalize"
  },
});
