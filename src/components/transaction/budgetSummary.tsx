import { View, StyleSheet, Text } from "react-native";

import { TransactionCategory } from "models/transaction.model";

import { fontFamily } from "constants/font";

import { normalizeMeasure } from "utils/style";

import { TransactionCategoryCard } from "./transactionCard";

export interface BudgetSummaryProps {
  period: string;
  titles: string[];
  categories: TransactionCategory[];
}

export const BudgetSummary: React.FC<BudgetSummaryProps> = ({ period, titles, categories }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          { titles.map((title, index) => <Text key={index} style={styles.title}>{title}</Text>)}
        </View>
        <View style={styles.categories}>
          { categories.map((category, index) => <TransactionCategoryCard key={index} type={category} style={styles.card} />)}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexBasis: "70%",
    justifyContent: "space-between"
  },
  period: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
    lineHeight: 29,
    color: "#FFF",
    textAlign: "center",
    opacity: 0.72,
  },
  content: {
    justifyContent: "center"
  },
  titleContainer: {
    marginBottom: normalizeMeasure(4)
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 39,
    textAlign: "center",
    color: "#FFF",
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: normalizeMeasure(1)
  },
  card: {
    backgroundColor: "#FFF"
  }
});