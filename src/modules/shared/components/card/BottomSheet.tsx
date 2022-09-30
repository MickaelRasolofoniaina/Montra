import React, { useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

import { ContainerProps } from 'modules/shared/props/generic';

import { purple } from 'constants/Color';
import { relativeToHeight } from 'constants/Layout';

import { Card } from './Card';
import { Backdrop } from '../container/Backdrop';

type BottomSheetProps = ContainerProps & { 
  visible: boolean, 
  onClick: () => void,
  minHeight?: number,
  middleHeight?: number,
  maxHeight?: number 
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ 
  visible, 
  children, 
  onClick,
  minHeight = relativeToHeight(10),
  middleHeight = relativeToHeight(50),
  maxHeight = relativeToHeight(90)
}) => {

  const height = useSharedValue(0);

  const rStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, {
        duration: 200,
        easing: Easing.out(Easing.exp)
      }),
    }
  });

  useEffect(() => {
    height.value = visible ? minHeight : 0;
  }, [visible]);
  
  return (
    <>
      <Backdrop onClick={onClick} visible={visible}/>
      <Animated.View style={[styles.container, rStyles]}>
        <Card style={[styles.card, {flex: 1}]}>
          <View style={styles.header}>
            <View style={[styles.headerBtn, { height: visible ? 4 : 0 }]} />
          </View>
          {children}
        </Card>
      </Animated.View>
    </>
  )
} 

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  card: {
    paddingTop: 8
  },
  header : {
    alignItems: 'center',
    marginBottom: 8
  },
  headerBtn: {
    backgroundColor: purple,
    borderRadius: 6,
    width: 50,
  }
});