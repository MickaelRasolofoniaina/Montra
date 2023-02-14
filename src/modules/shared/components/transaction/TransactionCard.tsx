import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { white, yellow, yellow20 } from "constants/Color";

import { normalizeMeasure } from "utils/Style";

import { Transaction } from "models/transaction.model";

import { BadgeIcon } from "../card/Badge";

export interface TransactionCardProps {
  transaction: Transaction;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
}) => {
  const { category, description, amount, date } = transaction;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <BadgeIcon
          icon={<Entypo name="shopping-basket" size={35} color={yellow} />}
          color={yellow20}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textItem}>
          <Text>{category}</Text>
          <Text>{description}</Text>
        </View>
        <View style={styles.textItem}>
          <Text>{amount}</Text>
          <Text>{date.toLocaleTimeString()}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: white,
    borderRadius: 24,
    padding: normalizeMeasure(2),
    marginBottom: normalizeMeasure(1),
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: normalizeMeasure(1)
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textItem: {
    alignItems: "flex-end",
    justifyContent: "space-between"
  }
});
