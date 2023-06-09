import { View, StyleSheet, Text } from "react-native";

import { Card, CardType } from "components/card/card";
import { TransactionCategoryCard } from "components/transaction/transactionCard";


import { black200 } from "constants/color";
import { fontFamily } from "constants/font";

import { TransactionCategory } from "models/transaction.model";

import { normalizeMeasure } from "utils/style";

export interface ReportSummaryProps {}

export const ReportSummary: React.FC<ReportSummaryProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This Month</Text>
      <View>
        <Text style={styles.subtitle}>You Spend</Text>
        <Text style={styles.subtitle}>$332</Text>
      </View>
      <Card type={CardType.Full}>
        <Text style={styles.cardTitle}>And your biggest</Text>
        <Text style={styles.cardTitle}>spending is from</Text>
        <TransactionCategoryCard type={TransactionCategory.Food} style={styles.transactionCard} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
    lineHeight: 29,
    color: "#FFF",
    textAlign: "center",
    opacity: 0.72
  },
  subtitle: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 39,
    textAlign: "center",
    color: "#FFF"
  },
  cardTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: black200
  },
  transactionCard: {
    alignSelf: "center",
    marginTop: normalizeMeasure(1)
  }
});

export default ReportSummary;
