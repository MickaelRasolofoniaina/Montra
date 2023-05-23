import React from "react";
import { useState, useRef } from "react";
import { View, StyleSheet, FlatList, ViewToken, Pressable } from "react-native";

import { addStyleWhen, normalizeMeasure } from "utils/Style";

import { primaryColor, secondaryColor } from "constants/Color";
import { relativeToWidth, screenWidth } from "constants/Layout";

import { Stylable } from "modules/shared/props/generic";

export interface CarouselItem {
  id: string;
  view: React.ReactNode;
}

export interface CarouselProps extends Stylable {
  items: CarouselItem[];
}

type props = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const Carousel: React.FC<CarouselProps> = ({ items, style }) => {

  const ref = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = (info: props) => {
    const { viewableItems } = info;
    scrollTo(viewableItems[0].index || 0);
  }

  const scrollTo = (index: number) => {
    if(ref && ref.current) {
      ref.current.scrollToIndex({
        animated: true,
        index
      });
      setActiveIndex(index);
    }
  }

  const onViewRef = React.useCallback(onViewableItemsChanged, []);
  
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={style}>
      <FlatList
        ref={ref}
        horizontal
        decelerationRate="normal"
        showsHorizontalScrollIndicator={false}
        initialNumToRender={1}
        initialScrollIndex={0}
        pagingEnabled
        snapToInterval={screenWidth}
        keyExtractor={item => item.id}
        data={items}
        renderItem={data => <View style={styles.item}>{data.item.view}</View>}
        onViewableItemsChanged={onViewRef}
        viewabilityConfig={viewConfigRef.current}
      />
      <View style={styles.footer}>
        {items.map((_, index) => <Pressable onPress={() => scrollTo(index)} key={index}><View style={[styles.dot, addStyleWhen(activeIndex === index, styles.dotActive)]} /></Pressable>)}
      </View>
    </View>
  )
}

const DOT_DIMENSION = 8;

const styles = StyleSheet.create({
  footer: {
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    height: DOT_DIMENSION,
    width: DOT_DIMENSION,
    borderRadius: DOT_DIMENSION / 2,
    backgroundColor: secondaryColor,
    marginHorizontal: normalizeMeasure(1)
  },
  dotActive: {
    height: DOT_DIMENSION * 2,
    width: DOT_DIMENSION  * 2,
    borderRadius: DOT_DIMENSION,
    backgroundColor: primaryColor
  },
  item: {
    width: relativeToWidth(100)
  }
});