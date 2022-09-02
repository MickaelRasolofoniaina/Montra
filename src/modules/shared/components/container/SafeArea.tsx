import React from 'react';
import { StyleSheet, SafeAreaView, LayoutChangeEvent } from 'react-native';
import { ContainerProps } from '../../props/generic';

export type SafeAreaProps = ContainerProps & { onLayout: (event: LayoutChangeEvent) => void}

export const SafeArea: React.FC<SafeAreaProps> = ({children, onLayout}) => {
  return (
    <SafeAreaView style={styles.container} onLayout={onLayout}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});