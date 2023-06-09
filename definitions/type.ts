import { ViewStyle } from "react-native";

export type InputValue = string | number | null;

export type ComponentStyle = ViewStyle | ViewStyle[];

export interface MultipleInputData {
  label: string;
  value: InputValue;
}