import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { addElevation } from "utils/Style";

import { ContainerProps } from "shared/props/generic";

import { Render } from "./Render";

type BackdropProps = ContainerProps & {
  onClick: () => void;
  visible?: boolean;
};

export const Backdrop: React.FC<BackdropProps> = ({
  children,
  onClick,
  visible = false,
  style,
}) => {
  return (
    <Render when={visible}>
      <View style={[styles.container, style]}>
        <TouchableOpacity
          onPress={onClick}
          style={[styles.container, styles.backdrop]}
        />
        {children}
      </View>
    </Render>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  backdrop: {
    backgroundColor: "#000",
    opacity: 0.25,
    ...addElevation(1),
  },
});
