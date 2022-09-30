import { primaryColor, secondaryColor, Theme, white } from 'constants/Color';
import { fontFamily, fontSize } from 'constants/Font';
import { Stylable } from 'modules/shared/props/generic';
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


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
    borderRadius: 16,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'center' ,
    backgroundColor: primaryColor,
    marginBottom: 16
  },
  label: {
    color: white,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.large
  },
});

const defaultStyles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'center' ,
    backgroundColor: secondaryColor,
    marginBottom: 16
  },
  label: {
    color: primaryColor,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.large
  },
});