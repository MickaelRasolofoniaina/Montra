import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, FlatList, ViewToken } from 'react-native';
import { addStyleWhen } from 'utils/Style';

import { primaryColor, secondaryColor } from 'constants/Color';
import { relativeToWidth, screenWidth } from 'constants/Layout';

export interface CarouselItem {
  id: string;
  view: React.ReactNode;
}

export interface CarouselProps {
  items: CarouselItem[];
}

type props = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const Carousel: React.FC<CarouselProps> = ({items}) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = (info: props) => {
      const { viewableItems } = info;
      setActiveIndex(viewableItems[0].index || 0);
  }

  const onViewRef = React.useCallback(onViewableItemsChanged, [])
  
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={1}
        initialScrollIndex={0}
        snapToInterval={screenWidth}
        keyExtractor={item => item.id}
        data={items}
        renderItem={data => <View style={styles.item}>{data.item.view}</View>}
        onViewableItemsChanged={onViewRef}
        viewabilityConfig={viewConfigRef.current}
      />
      <View style={styles.footer}>
        {items.map((_, index) => <View key={index} style={[styles.dot, addStyleWhen(activeIndex === index, styles.dotActive)]} />)}
      </View>
    </View>
  )
}

const DOT_DIMENSION = 8;

const styles = StyleSheet.create({
  footer: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: DOT_DIMENSION,
    width: DOT_DIMENSION,
    borderRadius: DOT_DIMENSION / 2,
    backgroundColor: secondaryColor,
    marginHorizontal: 10
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