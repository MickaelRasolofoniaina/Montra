import React from "react";
import { View, StyleSheet, Text } from 'react-native';

import { fontFamily } from "constants/Font";

import { normalizeMeasure } from "utils/Style";

export interface BadgeProps {
  title: string,
  text: string,
  icon: React.ReactNode,
  color: string,
}

export const Badge: React.FC<BadgeProps> = ({
  title,
  text,
  icon,
  color
}) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26,
    padding: normalizeMeasure(2)
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
    height: 48,
    width: 48,
    padding: normalizeMeasure(1),
    marginRight: normalizeMeasure(1)
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 16,
    color: "#FFF"
  },
  text: {
    fontFamily: fontFamily.semiBold,
    fontSize: 22,
    lineHeight: 26,
    color: "#FFF"
  },
})

export interface BadgeIconProps {
  icon: React.ReactNode;
  color: string;
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({
  icon,
  color
}) => {
  return (
    <View style={{
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color,
      borderRadius: 16,
      padding: normalizeMeasure(1),
      height: 60,
      width: 60
    }}>
      {icon}
    </View>
  );
}