import { View, StyleSheet, Text } from "react-native";

import { Card, CardType } from "components/card/card";
import { TransactionCategoryCard } from "components/transaction/transactionCard";

import { black200 } from "constants/color";
import { fontFamily } from "constants/font";

import { TransactionCategory } from "models/transaction.model";

import { normalizeMeasure } from "utils/style";

export interface TransactionSummaryProps {
  period: string;
  titles: string[];
  amount: string;
  subtitles: string[];
  category: TransactionCategory;
}

export const TransactionSummary: React.FC<TransactionSummaryProps> = ({
  period,
  titles,
  amount,
  subtitles,
  category,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <View>
        { titles.map((title, index) => <Text style={styles.title} key={index}>{title}</Text>)}
      </View>
      <Card type={CardType.Full}>
        <View>
        { subtitles.map((subtitle, index) => <Text style={styles.subtitle} key={index}>{subtitle}</Text>)}
        </View>
        <TransactionCategoryCard
          type={category}
          style={styles.transactionCard}
        />
        <Text style={styles.amount}>{amount}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  period: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
    lineHeight: 29,
    color: "#FFF",
    textAlign: "center",
    opacity: 0.72,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 39,
    textAlign: "center",
    color: "#FFF",
  },
  subtitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: black200,
  },
  transactionCard: {
    alignSelf: "center",
    marginVertical: normalizeMeasure(1),
  },
  amount: {
    fontFamily: fontFamily.medium,
    fontSize: 36,
    lineHeight: 43,
    textAlign: "center",
    color: black200
  }
});

//export interface 

export default TransactionSummary;
