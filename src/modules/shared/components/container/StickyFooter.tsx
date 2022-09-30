import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ContainerProps } from 'modules/shared/props/generic';

export const StickyFooter: React.FC<ContainerProps> = ({ children }) => {
  return (
    <View style={styles.footer}>
      {children}
    </View>
  )
} 

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  }
});