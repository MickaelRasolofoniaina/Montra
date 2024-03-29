import React from "react";
import { Text, StyleSheet } from "react-native";

import { fontFamily, fontSize } from "constants/font";
import { black100 } from "constants/color";

import { normalizeMeasure } from "utils/style";

export enum TypoVariant {
  title1 = "title1",
  title2 = "title2",
  title3 = "title3",
  body1 = "body1",
}

export interface TypographyProps {
  text: string;
  variant: TypoVariant;
  size?: number;
  color?: string;
  alignCenter?: boolean;
  marginBottom?: number;
  opacity?: number;
}

export const Typography: React.FC<TypographyProps> = ({
  text,
  variant,
  size = fontSize.medium,
  color = black100,
  alignCenter = false,
  marginBottom = 1,
  opacity = 1,
}) => {
  return (
    <Text
      style={[
        styles[variant],
        {
          textAlign: alignCenter ? "center" : "left",
          marginBottom: normalizeMeasure(marginBottom),
          opacity,
          fontSize: size,
          color
        }
      ]}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  title1: {
    fontFamily: fontFamily.semiBold,
    fontSize: 40,
    lineHeight: 48,
  },
  title2: {
    fontFamily: fontFamily.semiBold,
    fontSize: 64,
    lineHeight: 77,
  },
  title3: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    lineHeight: 21,
  },
  body1: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 17,
  },
});
