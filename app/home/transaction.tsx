import React from "react";
import { StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { black, purple100 } from "constants/color";

import { TransactionCategory, TransactionType } from "models/transaction.model";

import { Screen } from "components/container/screen";
import { HeaderContainer } from "components/container/container";
import { ButtonIcon, SimpleButton } from "components/form/button";
import { TransactionList } from "components/transaction/transactionList";

import { ReportButton } from "components/transaction/reportButton";

const TRANSACTION_LIST_TODAY = [
  {
    category: TransactionCategory.Shopping,
    description: "Buy some grocery",
    amount: 80,
    date: new Date(),
    type: TransactionType.Out,
  },
  {
    category: TransactionCategory.Subscription,
    description: "Disney",
    amount: 120,
    date: new Date(),
    type: TransactionType.Out,
  }
];

const TRANSACTION_LIST_YESTERDAY = [
  {
    category: TransactionCategory.Salary,
    description: "Buy some grocery",
    amount: 80,
    date: new Date(),
    type: TransactionType.In,
  },
  {
    category: TransactionCategory.Transportation,
    description: "Disney",
    amount: 120,
    date: new Date(),
    type: TransactionType.Out,
  }
];

export const Transaction: React.FC = () => {
  const router = useRouter();

  return (
    <Screen bgColor="#FFF" statusBarTheme="dark">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <HeaderContainer>
        <SimpleButton
          label="Month"
          startIcon={
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={purple100}
            />
          }
          onPress={() => {}}
        />
        <ButtonIcon
          icon={<Ionicons name="filter" size={30} color={black} />}
          onPress={() => {}}
        />
      </HeaderContainer>
      <ReportButton onPress={() => router.replace("transaction")} />
      <TransactionList items={TRANSACTION_LIST_TODAY} title="Today" />
      <TransactionList items={TRANSACTION_LIST_YESTERDAY} title="Yesterday" />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default Transaction;
