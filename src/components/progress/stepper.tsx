import { View, StyleSheet } from "react-native";
import { addStyleWhen, normalizeMeasure } from "utils/style";

export interface StepperProps {
  stepCount: number;
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ stepCount, currentStep }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: stepCount }, (value) => value).map(
        (_, index) => {
          return (
            <View
              style={[
                styles.item,
                addStyleWhen(index === currentStep, styles.active),
              ]}
              key={index}
            />
          );
        }
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: normalizeMeasure(1)
  },
  item: {
    flex: 1,
    backgroundColor: "#FFF",
    opacity: 0.24,
    height: 4,
  },
  active: {
    opacity: 1,
  },
});
