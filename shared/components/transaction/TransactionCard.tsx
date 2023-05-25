import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import {
  white,
  yellow,
  yellow20,
  black300,
  grey,
  red,
  primaryColor,
  secondaryColor,
  red20,
  green20,
  green,
  blue,
  blue20,
} from "constants/Color";
import { fontFamily } from "constants/Font";

import { addStyleWhen, normalizeMeasure } from "utils/Style";

import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from "models/transaction.model";

import { BadgeIcon } from "../card/Badge";

export interface TransactionCardProps {
  transaction: Transaction;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
}) => {
  const { category, description, amount, date, type } = transaction;

  const renderBadge = () => {
    switch (category) {
      case TransactionCategory.Shopping:
        return (
          <BadgeIcon
            icon={<Entypo name="shopping-basket" size={35} color={yellow} />}
            color={yellow20}
          />
        );
      case TransactionCategory.Subscription:
        return (
          <BadgeIcon
            icon={
              <MaterialIcons name="event-note" size={35} color={primaryColor} />
            }
            color={secondaryColor}
          />
        );
      case TransactionCategory.Salary:
        return (
          <BadgeIcon
            icon={<MaterialIcons name="attach-money" size={35} color={green} />}
            color={green20}
          />
        );
      case TransactionCategory.Transportation:
        return (
          <BadgeIcon
            icon={<FontAwesome5 name="car-side" size={35} color={blue} />}
            color={blue20}
          />
        );
      case TransactionCategory.Vehicle:
        return (
          <BadgeIcon
            icon={<FontAwesome5 name="car" size={35} color={blue} />}
            color={blue20}
          />
        );
      default:
        return (
          <BadgeIcon
            icon={
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={35}
                color={red}
              />
            }
            color={red20}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{renderBadge()}</View>
      <View style={styles.textContainer}>
        <View style={styles.textItem}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.textItem}>
          <Text style={[styles.amount, addStyleWhen(type === TransactionType.In, styles.success)]}>
            {type === TransactionType.In ? "+" : "-"} {amount}
          </Text>
          <Text style={styles.date}>
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: white,
    borderRadius: 24,
    padding: normalizeMeasure(2),
    marginBottom: normalizeMeasure(1),
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: normalizeMeasure(1),
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textItem: {
    justifyContent: "space-between",
  },
  category: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    lineHeight: 19,
    color: black300,
    textTransform: "capitalize",
  },
  description: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
    lineHeight: 15,
    color: grey,
    textTransform: "capitalize",
  },
  amount: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    lineHeight: 19,
    color: red,
    textAlign: "right",
  },
  date: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
    lineHeight: 15,
    color: grey,
  },
  success: {
    color: green
  }
});
