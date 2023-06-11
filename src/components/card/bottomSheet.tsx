import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming, useAnimatedGestureHandler, runOnJS } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

import { ContainerProps } from "models/props.model";

import { purple } from "constants/color";
import { relativeToHeight } from "constants/layout";

import { normalizeMeasure } from "utils/style";

import { Card } from "./card";
import { Backdrop } from "../container/backdrop";

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
  minHeight = relativeToHeight(30),
  maxHeight = relativeToHeight(90)
}) => {

  const initialHeight = visible ? minHeight : 0;
  const height = useSharedValue(initialHeight);

  const close = () => {
    onClick();
  }

  const panHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: {height: number}) => {
      ctx.height = height.value;
    },
    onActive: (event, ctx: {height: number}) => {
      const newHeight = ctx.height - event.translationY;
      if(newHeight <= maxHeight) {
        height.value = newHeight;
      }
    },
    onEnd: (event) => {
      const currentHeight = height.value;
      if(currentHeight <= minHeight) {
        height.value = 0;
        runOnJS(close)();
      }
      else{
       if(event.translationY < 0) {
        height.value = maxHeight;
       }
       else {
        height.value = minHeight;
       }
      }
    },
  });

  const rStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value)
    }
  });
  
  return (
    <>
      <Backdrop onClick={onClick} visible={visible}/>
      <PanGestureHandler onGestureEvent={panHandler}>
        <Animated.View style={[styles.container, rStyles]}>
          <Card style={[styles.card, {flex: 1}]}>
            <View style={styles.header}>
              <View style={[styles.headerBtn, { height: visible ? 4 : 0 }]} />
            </View>
            {children}
          </Card>
        </Animated.View>
      </PanGestureHandler>
    </>
  )
} 

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  card: {
    paddingTop: normalizeMeasure(1)
  },
  header : {
    alignItems: "center",
    marginBottom: normalizeMeasure(1)
  },
  headerBtn: {
    backgroundColor: purple,
    borderRadius: 6,
    width: 50,
  }
});