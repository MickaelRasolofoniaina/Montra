import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { black } from "constants/Color";

import { addElevation } from "utils/Style";

import { ContainerProps } from "modules/shared/props/generic";

import { Render } from "./Render";

type BackdropProps =  ContainerProps & { onClick: () => void, visible?: boolean };

export const Backdrop: React.FC<BackdropProps> = ({ children, onClick , visible = false }) => {

  return (
    <Render when={visible}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onClick} style={[styles.container, styles.backdrop]} />
        <View style={styles.content}>
          {children}
        </View>
      </View>
    </Render>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "flex-end",
  },
  backdrop: {
    backgroundColor: black,
    opacity: 0.25,
    ...addElevation(1),
  },
  content: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    ...addElevation(2),
  }
});