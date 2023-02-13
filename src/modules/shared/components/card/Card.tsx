import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ContainerProps } from 'modules/shared/props/generic';

import { normalizeMeasure } from 'utils/Style';

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
    borderTopStartRadius: normalizeMeasure(4),
    borderTopEndRadius: normalizeMeasure(4),
    paddingVertical: normalizeMeasure(3),
    paddingHorizontal: normalizeMeasure(2)
  }
});