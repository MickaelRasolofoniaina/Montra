import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { fontFamily } from "constants/font";

import { normalizeMeasure } from "utils/style";

import { Stylable } from "models/props.model";

export interface BadgeProps extends Stylable {
  title: string;
  text: string;
  icon: React.ReactNode;
  color: string;
}

export const Badge: React.FC<BadgeProps> = ({
  title,
  text,
  icon,
  color,
  style,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: color }, style]}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26,
    padding: normalizeMeasure(2),
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
    height: 48,
    width: 48,
    padding: normalizeMeasure(1),
    marginRight: normalizeMeasure(1),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 16,
    color: "#FFF",
  },
  text: {
    fontFamily: fontFamily.semiBold,
    fontSize: 22,
    lineHeight: 26,
    color: "#FFF",
  },
});

export interface BadgeIconProps extends Stylable {
  icon: React.ReactNode;
  color: string;
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({ icon, color, style }) => {
  return (
    <View
      style={[
        badgeIconStyle.container,
        {
          backgroundColor: color,
        },
        style,
      ]}
    >
      {icon}
    </View>
  );
};

const badgeIconStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    height: 60,
    width: 60,
    padding: normalizeMeasure(1),
  }
});
