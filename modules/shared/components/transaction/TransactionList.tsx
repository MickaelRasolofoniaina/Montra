import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import { fontFamily } from "constants/Font";
import { black300 } from "constants/Color";

import { Transaction } from "models/transaction.model";

import { TransactionCard } from "./TransactionCard";
import { Typography, TypoVariant } from "../typo/Typography";

export interface TransactionListProps {
  title: string;
  items: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({
  title,
  items,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography
          variant={TypoVariant.title3}
          color={black300}
          text={title}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => {
          return <TransactionCard transaction={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row"
  },
  title: {
    fontFamily: fontFamily.bold,
  },
});
