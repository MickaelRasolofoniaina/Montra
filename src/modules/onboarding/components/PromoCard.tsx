import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

import { fontFamily, fontSize } from 'constants/Font';
import { black, grey } from 'constants/Color';

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
    alignItems: 'center',
    paddingTop: 32
  },
  illustration: {
    height: 312,
    width: 312,
    resizeMode: 'contain'
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.extraLarge,
    textAlign: 'center',
    color: black,
    maxWidth: 277,
    marginBottom: 17
  },
  description: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.medium,
    textAlign: 'center',
    color: grey,
    maxWidth: 277,
    marginBottom: 32
  }
});

export default PromoCard;