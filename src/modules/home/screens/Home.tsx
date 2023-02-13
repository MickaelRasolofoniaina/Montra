import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { bisque, black100, black200, green, grey, red } from "constants/Color";

import { normalizeMeasure } from "utils/Style";

import {
  Typography,
  TypoVariant,
} from "modules/shared/components/typo/Typography";
import { Screen } from "modules/shared/components/container/Screen";
import { Badge } from "modules/shared/components/card/Badge";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Screen statusBarTheme="dark" bgColor={bisque}>
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
        <Typography
          text="Spend frequency"
          variant={TypoVariant.title3}
          color={black200}
          />
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
  },
  overview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: normalizeMeasure(4)
  },
  overviewItem: {
    flexBasis: "48%",
  },
});

export default Home;
