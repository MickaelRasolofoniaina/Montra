import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

import { green } from "constants/color";

import { normalizeMeasure } from "utils/style";

import { Screen } from "components/container/screen";

import TransactionForm from "../../components/transaction/transactionForm";

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
