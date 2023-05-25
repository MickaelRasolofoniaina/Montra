import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

import { red } from "constants/Color";

import { normalizeMeasure } from "utils/Style";

import { Screen } from "shared/components/container/Screen";

import { TransactionType } from "models/transaction.model";

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
        animation: "slide_from_bottom"
      }} />
      <TransactionForm transactionType={TransactionType.Out} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: normalizeMeasure(8),
  },
});

export default ManageExpense;
