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
  light40,
  black200,
} from "constants/color";
import { fontFamily } from "constants/font";

import { addStyleWhen, normalizeMeasure } from "utils/style";

import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from "models/transaction.model";

import { Stylable } from "components/props/generic";

import { ComponentStyle } from "types/form.type";

import { BadgeIcon } from "../card/badge";

export interface TransactionCardProps {
  transaction: Transaction;
}

const renderTransactionBadge = (category: TransactionCategory, style?: ComponentStyle) => {
  switch (category) {
    case TransactionCategory.Shopping:
      return (
        <BadgeIcon
          icon={<Entypo name="shopping-basket" size={35} color={yellow} />}
          color={yellow20}
          style={style}
        />
      );
    case TransactionCategory.Subscription:
      return (
        <BadgeIcon
          icon={
            <MaterialIcons name="event-note" size={35} color={primaryColor} />
          }
          color={secondaryColor}
          style={style}
        />
      );
    case TransactionCategory.Salary:
      return (
        <BadgeIcon
          icon={<MaterialIcons name="attach-money" size={35} color={green} />}
          color={green20}
          style={style}
        />
      );
    case TransactionCategory.Transportation:
      return (
        <BadgeIcon
          icon={<FontAwesome5 name="car-side" size={35} color={blue} />}
          color={blue20}
          style={style}
        />
      );
    case TransactionCategory.Vehicle:
      return (
        <BadgeIcon
          icon={<FontAwesome5 name="car" size={35} color={blue} />}
          color={blue20}
          style={style}
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
          style={style}
        />
      );
  }
}

export const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
}) => {
  const { category, description, amount, date, type } = transaction;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{renderTransactionBadge(category)}</View>
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

export interface TransactionCategoryCardProps extends Stylable {
  type: TransactionCategory;
}

export const TransactionCategoryCard: React.FC<TransactionCategoryCardProps> = ({ type, style }) => {
  return (
    <View style={[cardStyles.container, style]}>
      {renderTransactionBadge(type, cardStyles.badgeStyle)}
      <Text style={cardStyles.label}>{type}</Text>
    </View>
  )
}

const cardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: light40,
    borderRadius: 24,
    padding: normalizeMeasure(2)
  },
  label: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    lineHeight: 21,
    color: black200,
    textTransform: "capitalize",
    marginLeft: normalizeMeasure(1)
  },
  badgeStyle: {
    height: 30,
    width: 30
  }
});
