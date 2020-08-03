import { Dimensions } from 'react-native';

export const { height, width } = Dimensions.get('window');
export const isTablet = width / height > 0.6;
export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;
export const wScale = size => (width / guidelineBaseWidth) * size;
export const hScale = size => (height / guidelineBaseHeight) * size;
export const radius = hScale(5);

export const imageHeight = Math.round(width * 9 / 16);
export const imageWidth = width;