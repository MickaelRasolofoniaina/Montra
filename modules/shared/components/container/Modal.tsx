import React from "react";
import {
  View,
  StyleSheet,
  Modal as RNModal,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { screenPaddingHorizontal } from "constants/Layout";
import { primaryColor, Theme } from "constants/Color";

import { addElevation, normalizeMeasure } from "utils/Style";

import { ContainerProps } from "modules/shared/props/generic";

import { Render } from "./Render";
import { Backdrop } from "./Backdrop";
import { TextButton } from "../form/Button";

export interface ModalProps extends ContainerProps {
  visible: boolean;
  onConfirm?: () => void;
  onClose: () => void;
  enableClose?: boolean;
  enableAction?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  onConfirm,
  children,
  enableAction = false,
  enableClose = false,
}) => {
  return (
    <RNModal visible={visible} onRequestClose={onClose} transparent>
      <Backdrop visible={visible} onClick={onClose} style={styles.backdrop}>
        <View style={styles.container}>
          <Render when={enableClose}>
            <View style={styles.header}>
              <TouchableOpacity onPress={onClose}>
                <Ionicons name="close-circle" size={30} color={primaryColor} />
              </TouchableOpacity>
            </View>
          </Render>
          <View style={styles.body}>{children}</View>
          <Render when={enableAction}>
            <View style={styles.footer}>
              <TextButton
                onPress={onClose}
                label="Cancel"
                theme={Theme.danger}
              />

              <TextButton
                onPress={onConfirm ? onConfirm : onClose}
                label="Confirm"
                theme={Theme.success}
              />
            </View>
          </Render>
        </View>
      </Backdrop>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    alignItems: "center",
    justifyContent: "center",
    padding: screenPaddingHorizontal,
  },
  container: {
    borderRadius: 16,
    backgroundColor: "#FFF",
    ...addElevation(2),
    minWidth: "80%"
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: normalizeMeasure(1),
  },
  body: {
    paddingVertical: normalizeMeasure(4),
    paddingHorizontal: normalizeMeasure(2),
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: normalizeMeasure(1),
  },
});
