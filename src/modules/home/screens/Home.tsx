import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { bisque, black100, black200, green, grey, red } from "constants/Color";
import { screenPaddingHorizontal } from "constants/Layout";

import { normalizeMeasure } from "utils/Style";

import { TransactionCategory, TransactionType } from "models/transaction.model";
import {
  Typography,
  TypoVariant,
} from "modules/shared/components/typo/Typography";
import { Screen } from "modules/shared/components/container/Screen";
import { Badge } from "modules/shared/components/card/Badge";
import { Tab } from "modules/shared/components/other/Tab";
import { TransactionList } from "modules/shared/components/transaction/TransactionList";

const TRANSACTION_FILTER = [
  {
    label: "Today",
  },
  {
    label: "Week",
  },
  {
    label: "Month",
  },
  {
    label: "Year",
  },
];

const TRANSACTION_LIST = [{
  category: TransactionCategory.Subscription,
  description: "Disney",
  amount: 120,
  date: new Date(),
  type: TransactionType.Out
},
{
  category: TransactionCategory.Shopping,
  description: "Buy some grocery",
  amount: 80,
  date: new Date(),
  type: TransactionType.Out
},{
  category: TransactionCategory.Food,
  description: "Buy a ramen",
  amount: 32,
  date: new Date(),
  type: TransactionType.Out
}]

export interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const onTrasactionFilterClick = () => {};

  return (
    <Screen statusBarTheme="dark" bgColor={bisque} collapseEdge>
      <View style={styles.container}>
        <View style={styles.balance}>
          <Typography
            text="Account balance"
            variant={TypoVariant.body1}
            color={grey}
          />
          <Typography
            text="$9400"
            variant={TypoVariant.title1}
            color={black100}
            marginBottom={3}
          />
        </View>
        <View style={styles.overview}>
          <View style={styles.overviewItem}>
            <Badge
              title="Income"
              text="$5000"
              color={green}
              icon={<AntDesign name="downcircleo" size={24} color={green} />}
            />
          </View>
          <View style={styles.overviewItem}>
            <Badge
              title="Expenses"
              text="$5000"
              color={red}
              icon={<AntDesign name="upcircleo" size={24} color={red} />}
            />
          </View>
        </View>
        <View style={styles.transaction}>
          <Typography
            text="Spend frequency"
            variant={TypoVariant.title3}
            color={black200}
            marginBottom={4}
          />
          <Tab
            items={TRANSACTION_FILTER}
            activeIndex={0}
            onClick={onTrasactionFilterClick}
          />
          <TransactionList items={TRANSACTION_LIST} title="Recent transaction" />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  balance: {
    alignItems: "center",
    paddingHorizontal: screenPaddingHorizontal,
  },
  overview: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: screenPaddingHorizontal,
    marginBottom: normalizeMeasure(4),
  },
  overviewItem: {
    flexBasis: "48%",
  },
  transaction: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFF",
    paddingTop: normalizeMeasure(2),
    paddingHorizontal: screenPaddingHorizontal
  },
});

export default Home;
