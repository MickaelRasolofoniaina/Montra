import React from 'react';
import { StyleSheet, SafeAreaView, LayoutChangeEvent, View } from 'react-native';
import { ContainerProps } from '../../props/generic';

export type SafeAreaProps = ContainerProps & { onLayout?: (event: LayoutChangeEvent) => void}

export const SafeArea: React.FC<SafeAreaProps> = ({children, onLayout}) => {
  return (
    <SafeAreaView onLayout={onLayout} style={{flex: 1}}>
      <View style={styles.container} >
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});