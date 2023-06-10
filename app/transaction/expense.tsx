import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

import { red } from "constants/color";

import { normalizeMeasure } from "utils/style";

import { Screen } from "components/container/screen";

import { TransactionType } from "models/transaction.model";

import TransactionForm from "components/transaction/transactionForm";

export const Expense: React.FC = () => {
  return (
    <Screen
      style={styles.container}
      bgColor={red}
      statusBarTheme="light"
      collapseEdge
      collapseBottom
    >
      <Stack.Screen options={{
        title: "Expense",
        headerStyle: {
          backgroundColor: red
        }
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

export default Expense;
