import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { black300 } from "constants/color";
import { fontFamily } from "constants/font";

import { addStyleWhen, normalizeMeasure } from "utils/style";

export interface SettingItemProps {
  onPress: () => void;
  label: string;
  badge: React.ReactNode;
  bottomBorder?: boolean;
}

export const SettingItem: React.FC<SettingItemProps> = ({ onPress, label, badge, bottomBorder = false }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, addStyleWhen(bottomBorder, styles.bottomBorder)]}>
      {badge}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: normalizeMeasure(2),
    paddingVertical: normalizeMeasure(2)
  },
  label: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    lineHeight: 19,
    color: black300,
    marginLeft: normalizeMeasure(2)
  },
  bottomBorder: {
    borderBottomWidth: 1,
    color: "#000",
    opacity: 0.4
  }
});