import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

import { green } from "constants/Color";

import { normalizeMeasure } from "utils/Style";

import { Screen } from "shared/components/container/Screen";

import TransactionForm from "../../components/transaction/TransactionForm";

export const ManageExpense: React.FC = () => {
  return (
    <Screen
      style={styles.container}
      bgColor={green}
      statusBarTheme="light"
      collapseEdge
    >
      <Stack.Screen options={{
        title: "Income",
        headerBackVisible: true,
        headerStyle: {
          backgroundColor: green
        },
        animation: "slide_from_bottom"
      }} />
      <TransactionForm />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: normalizeMeasure(8),
  },
});

export default ManageExpense;
