import { Dimensions } from 'react-native';
import { normalizeMeasure } from 'utils/Style';

const windowDimension = Dimensions.get('window');

export const screenWidth = windowDimension.width;
export const screenHeight = windowDimension.height;

export const relativeToWidth = (percentage: number) => (screenWidth * percentage) / 100;
export const relativeToHeight = (percentage: number) => (screenHeight * percentage) / 100;

export const screenPaddingTop = normalizeMeasure(4);
export const screenPaddingHorizontal = normalizeMeasure(2);