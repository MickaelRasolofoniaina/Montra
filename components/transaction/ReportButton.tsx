import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { normalizeMeasure } from "utils/Style";

import { secondaryColor, purple100 } from "constants/Color";
import { fontFamily } from "constants/Font";

export interface ReportButtonProps {
  onPress: () => void;
}

export const ReportButton: React.FC<ReportButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>See your financial report</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color={purple100} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: secondaryColor,
    borderRadius: 8,
    padding: normalizeMeasure(2),
    marginBottom: normalizeMeasure(2),
  },
  label: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 19,
    color: purple100,
  },
});
