import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";

import { red, green } from "constants/color";

import { normalizeMeasure } from "utils/style";

import { Screen } from "components/container/screen";
import ReportSummary from "components/transaction/reportSummary";
import { Stepper } from "components/progress/stepper";

import { TransactionCategory } from "models/transaction.model";

export const Report: React.FC = () => {
  const theme = [red, green];

  const [activeIndex, setActiveIndex] = useState(0);

  const onPageSelected = (e: PagerViewOnPageSelectedEvent) => {
    setActiveIndex(e.nativeEvent.position);
  };

  return (
    <Screen style={styles.container} bgColor={theme[activeIndex]} statusBarTheme="light">
      <Stack.Screen
        options={{
          headerBackVisible: false,
          headerShown: false,
          headerStyle: {
            backgroundColor: theme[activeIndex],
          },
        }}
      />
      <Stepper stepCount={3} currentStep={activeIndex} />
      <PagerView
        overdrag
        style={styles.viewPager}
        initialPage={0}
        onPageSelected={onPageSelected}
        pageMargin={normalizeMeasure(2)}
      >
        <View key={0}>
          <ReportSummary
            period="This Month"
            title="You Spend"
            totalAmount="$332"
            amount="$120"
            firstSubtitle="And your biggest"
            secondSubtitle="spending is from"
            category={TransactionCategory.Food}
          />
        </View>
        <View key={1}>
          <ReportSummary
            period="This Month"
            title="You Earned"
            totalAmount="$60000"
            amount="$5000"
            firstSubtitle="Your biggest"
            secondSubtitle="income is from"
            category={TransactionCategory.Salary}
          />
        </View>
      </PagerView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: normalizeMeasure(2),
  },
  viewPager: {
    flex: 1,
    marginTop: normalizeMeasure(4),
  },
});

export default Report;
