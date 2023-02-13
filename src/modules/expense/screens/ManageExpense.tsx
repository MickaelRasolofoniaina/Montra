import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { red } from 'constants/Color';
import { relativeToHeight } from 'constants/Layout';

import { normalizeMeasure } from 'utils/Style';

import { BottomSheet } from 'modules/shared/components/card/BottomSheet';
import { Button } from 'modules/shared/components/form/Button';
import { Screen } from 'modules/shared/components/container/Screen';

export const ManageExpense: React.FC = () => {

  const [showPeriodSettings, setShowPeriodSettings] = useState(false);

  const openPeriodSettings = () => {
    setShowPeriodSettings(true);
  }

  const closePeriodSettings = () => {
    setShowPeriodSettings(false)
  }

  const NotSafeView = (
    <BottomSheet visible={showPeriodSettings} onClick={closePeriodSettings}>
      <Text>Bottom sheet</Text>
    </BottomSheet>
  );

  return (
    <Screen style={styles.container} bgColor={red} statusBarTheme='light' notSafeView={NotSafeView}>
      <Button label='Show bottom sheet' onPress={openPeriodSettings} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: normalizeMeasure(8)
  },
  card: {
    height: relativeToHeight(50)
  }
})

export default ManageExpense;
