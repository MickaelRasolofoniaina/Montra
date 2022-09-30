import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ContainerProps } from 'modules/shared/props/generic';

export const Card: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    paddingVertical: 24,
    paddingHorizontal: 16
  }
});