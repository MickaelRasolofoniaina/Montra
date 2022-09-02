import { ContainerProps } from 'modules/shared/props/generic';
import React from 'react';
import { View, StyleSheet } from 'react-native';

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
    bottom: 20,
    left: 20,
    right: 20,
  }
});