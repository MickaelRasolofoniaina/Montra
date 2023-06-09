import { View, StyleSheet } from "react-native";

import { TypoVariant, Typography } from "shared/components/typo/Typography";
import { Card, CardType } from "shared/components/card/Card";

export interface ReportSummaryProps {

}

export const ReportSummary: React.FC<ReportSummaryProps> = ({ }) => {

  return (
    <View style={styles.container}>
      <Typography
        text="This Month"
        variant={TypoVariant.title2}
        size={24}
        color="#FFF"
        opacity={0.72}
        alignCenter
      />
      <View>
        <Typography
          text="You Spend"
          variant={TypoVariant.title1}
          size={32}
          color="#FFF"
          alignCenter
        />
        <Typography
          text="$332"
          variant={TypoVariant.title1}
          size={32}
          color="#FFF"
          alignCenter
        />
      </View>
      <Card type={CardType.Full}>

      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  card: {

  }
});

export default ReportSummary;