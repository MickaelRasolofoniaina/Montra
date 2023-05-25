import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

import { red } from "constants/Color";

import { normalizeMeasure } from "utils/Style";

import { Screen } from "shared/components/container/Screen";

import TransactionForm from "../../components/transaction/TransactionForm";

export const ManageExpense: React.FC = () => {
  return (
    <Screen
      style={styles.container}
      bgColor={red}
      statusBarTheme="light"
      collapseEdge
    >
      <Stack.Screen options={{
        title: "Expense",
        headerBackVisible: true
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
