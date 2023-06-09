import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  ListRenderItemInfo,
} from "react-native";

import { addStyleWhen, normalizeMeasure } from "utils/style";

import { fontFamily } from "constants/font";
import { grey, yellow, yellow20 } from "constants/color";

export interface TabItem {
  label: string;
}

export interface TabProps {
  items: TabItem[];
  activeIndex: number;
  onClick: (index: number) => void;
}

export const Tab: React.FC<TabProps> = ({ items, activeIndex, onClick }) => {
  const [index, setIndex] = useState(activeIndex);

  const handleClick = (index: number) => {
    onClick(index);
    setIndex(index);
  };

  const renderItem = (props: ListRenderItemInfo<TabItem>) => {
    const { item, index: currentIndex } = props;
    const { label } = item;

    return (
      <View
        key={index}
        style={[
          styles.itemContainer,
          addStyleWhen(currentIndex === index, styles.activeItemContainer)
        ]}
      >
        <TouchableOpacity onPress={() => handleClick(currentIndex)}>
          <Text
            style={[
              styles.label,
              addStyleWhen(currentIndex === index, styles.active),
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      data={items}
      extraData={index}
      renderItem={renderItem}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 0,
    marginBottom: normalizeMeasure(2),
  },
  itemContainer: {
    paddingVertical: normalizeMeasure(1),
    paddingHorizontal: normalizeMeasure(2),
  },
  activeItemContainer: {
    backgroundColor: yellow20,
    borderRadius: 16,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 18,
    color: grey,
  },
  active: {
    fontFamily: fontFamily.bold,
    color: yellow,
  },
});
