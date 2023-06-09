import React from "react";
import { StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { black, purple100 } from "constants/Color";

import { TransactionCategory, TransactionType } from "models/transaction.model";

import { Screen } from "shared/components/container/Screen";
import { HeaderContainer } from "shared/components/container/Container";
import { ButtonIcon, SimpleButton } from "shared/components/form/Button";
import { TransactionList } from "shared/components/transaction/TransactionList";

import { ReportButton } from "components/transaction/ReportButton";

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
      <ReportButton onPress={() => router.replace("transaction/report")} />
      <TransactionList items={TRANSACTION_LIST_TODAY} title="Today" />
      <TransactionList items={TRANSACTION_LIST_YESTERDAY} title="Yesterday" />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default Transaction;
