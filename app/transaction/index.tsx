import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import PagerView from "react-native-pager-view";

import { red, green } from "constants/color";

import { normalizeMeasure } from "utils/style";

import { Screen } from "components/container/screen";
import ReportSummary from "components/transaction/reportSummary";

import { TransactionCategory } from "models/transaction.model";

export const Report: React.FC = () => {
  return (
    <Screen style={styles.container} bgColor={red} statusBarTheme="light">
      <Stack.Screen
        options={{
          headerBackVisible: false,
          headerShown: false,
          headerStyle: {
            backgroundColor: red,
          },
        }}
      />
      <PagerView style={styles.viewPager} initialPage={0}>
        <ReportSummary
          period="This Month"
          title="You Spend"
          amount="$332"
          firstSubtitle="And your biggest"
          secondSubtitle="spending is from"
          category={TransactionCategory.Food}
        />
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
  },
});

export default Report;
