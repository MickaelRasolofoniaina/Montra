import { Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const relativeToWidth = (percentage: number) => (screenWidth * percentage) / 100;
export const relativeToHeight = (percentage: number) => (screenHeight * percentage) / 100;