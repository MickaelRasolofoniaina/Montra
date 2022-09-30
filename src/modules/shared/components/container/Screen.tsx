import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import { SafeArea } from 'modules/shared/components/container/SafeArea';
import { ContainerProps } from 'modules/shared/props/generic';

type ScreenProps = ContainerProps & {
  statusBarTheme: 'light' | 'dark',
  bgColor: string,
  notSafeView?: React.ReactNode
}

export const Screen: React.FC<ScreenProps> = ({
  statusBarTheme,
  bgColor,
  children,
  notSafeView,
  style
}) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor}, style]}>
      <StatusBar style={statusBarTheme} />
      <SafeArea>
        {children}
      </SafeArea>
      {notSafeView}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});