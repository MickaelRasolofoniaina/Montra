import React from "react";
import { View, Text, StyleSheet, Image, ImageSourcePropType } from "react-native";

import { fontFamily, fontSize } from "constants/Font";
import { black, grey } from "constants/Color";
import { relativeToHeight } from "constants/Layout";

import { normalizeMeasure } from "utils/Style";

export interface PromoCardProps {
  illustrationSrc: ImageSourcePropType;
  title: string;
  description: string;
}

export const PromoCard:React.FC<PromoCardProps> = ({
  illustrationSrc,
  title,
  description
}) => {
  return (
    <View style={styles.container}>
      <Image source={illustrationSrc} style={styles.illustration}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: normalizeMeasure(4)
  },
  illustration: {
    width: 312,
    height: relativeToHeight(40),
    resizeMode: "contain"
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.extraLarge,
    textAlign: "center",
    color: black,
    maxWidth: 277,
    marginBottom: normalizeMeasure(2)
  },
  description: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.medium,
    textAlign: "center",
    color: grey,
    maxWidth: 277,
    marginBottom: normalizeMeasure(4)
  }
});

export default PromoCard;