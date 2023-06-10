import { View, StyleSheet, Text } from "react-native";

import { Card, CardType } from "components/card/card";
import { TransactionCategoryCard } from "components/transaction/transactionCard";

import { black200 } from "constants/color";
import { fontFamily } from "constants/font";

import { TransactionCategory } from "models/transaction.model";

import { normalizeMeasure } from "utils/style";

export interface ReportSummaryProps {
  period: string;
  title: string;
  amount: string;
  firstSubtitle: string;
  secondSubtitle: string;
  category: TransactionCategory;
}

export const ReportSummary: React.FC<ReportSummaryProps> = ({
  period,
  title,
  amount,
  firstSubtitle,
  secondSubtitle,
  category,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{period}</Text>
      <View>
        <Text style={styles.subtitle}>{title}</Text>
        <Text style={styles.subtitle}>{amount}</Text>
      </View>
      <Card type={CardType.Full}>
        <Text style={styles.cardTitle}>
          <Text>{firstSubtitle}</Text>
          <Text>{"\n"}</Text>
          <Text>{secondSubtitle}</Text>
        </Text>
        <TransactionCategoryCard
          type={category}
          style={styles.transactionCard}
        />
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
    opacity: 0.72,
  },
  subtitle: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 39,
    textAlign: "center",
    color: "#FFF",
  },
  cardTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: black200,
  },
  transactionCard: {
    alignSelf: "center",
    marginTop: normalizeMeasure(1),
  },
});

export default ReportSummary;
