import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { primaryColor, secondaryColor, Theme, white } from 'constants/Color';
import { fontFamily, fontSize } from 'constants/Font';

import { normalizeMeasure } from 'utils/Style';

import { Stylable } from 'modules/shared/props/generic';

export interface ButtonProps extends Stylable {
  label: string;
  onPress: () => void;
  theme?: Theme;
}

export const getStyle = (theme: Theme) => {
  switch(theme) {
    case Theme.primary: 
      return primaryStyles;
    default:
      return defaultStyles;
  }
}

export const Button: React.FC<ButtonProps> = ({ label, onPress, theme = Theme.primary }) => {
  const styles = getStyle(theme);

  return (
   <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
   </TouchableOpacity>
  )
} 

const primaryStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center' ,
    backgroundColor: primaryColor,
    borderRadius: normalizeMeasure(2),
    paddingVertical: normalizeMeasure(2),
    marginBottom: normalizeMeasure(2)
  },
  label: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.large,
    color: white,
  },
});

const defaultStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center' ,
    backgroundColor: secondaryColor,
    borderRadius: normalizeMeasure(2),
    paddingVertical: normalizeMeasure(2),
    marginBottom: normalizeMeasure(2)
  },
  label: {
    color: primaryColor,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.large
  },
});