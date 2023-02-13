import { Dimensions } from 'react-native';

const windowDimension = Dimensions.get('window');

export const screenWidth = windowDimension.width;
export const screenHeight = windowDimension.height;

export const relativeToWidth = (percentage: number) => (screenWidth * percentage) / 100;
export const relativeToHeight = (percentage: number) => (screenHeight * percentage) / 100;