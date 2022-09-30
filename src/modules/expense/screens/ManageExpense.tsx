import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { red } from 'constants/Color';
import { relativeToHeight } from 'constants/Layout';

import { BottomSheet } from 'modules/shared/components/card/BottomSheet';
import { Button } from 'modules/shared/components/form/Button';
import { Screen } from 'modules/shared/components/container/Screen';

export const ManageExpense: React.FC = () => {

  const [showPeriodSettings, setShowPeriodSettings] = useState(false);

  const NotSafeView = (
    <BottomSheet visible={showPeriodSettings} onClick={() => setShowPeriodSettings(false)}>
      <Text>Bottom sheet</Text>
    </BottomSheet>
  );

  return (
    <Screen style={styles.container} bgColor={red} statusBarTheme='light' notSafeView={NotSafeView}>
      <Button label='Show bottom sheet' onPress={() => setShowPeriodSettings(true)} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60
  },
  card: {
    height: relativeToHeight(50)
  }
})

export default ManageExpense;
