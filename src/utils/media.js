/**
 * Problem: React Native accepts either percentages or
 * density-independent pixels (DP) for its styles.
 * Percentages work well on the web,
 * but they don't support all the style properties in React Native.
 * Only padding, margin, width, height, minWidth, minHeight,
 * maxWidth, maxHeight, flexBasis can have percentage values
 * according to this commit.
 * https://github.com/facebook/react-native/commit/3f49e743bea730907066677c7cbfbb1260677d11
 * Density independent pixels (DP) are different than traditional pixels.
 * The bigger the device, the more DP it has. However,
 * density-independent pixels (DP) vary from device to device,
 * so it cannot be directly used for creating a responsive layout.
 *
 * In order to make the app look good on phones, tablets,
 * and a variety of other devices, we need to scale all of our styles.
 */
import {Dimensions, PixelRatio} from 'react-native';
import {MEDIA_VALUE} from '../constants';

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('window');

const iphone11Wscale = screenWidth / MEDIA_VALUE.STANDARD_WIDTH;
const iphone11Hscale = screenHeight / MEDIA_VALUE.STANDARD_HEIGHT;

/**
 * Use iphone11Scale() function to scale your fonts,
 * margins and paddings w.r.t screen width and height
 * @param {number} size
 * pixel value to scale w.r.t screen dpi
 * @param {string} based
 * the value with respect to width or height
 * based = 'width' | 'height' default 'width',
 * https://github.com/NewBieBR/react-native-normalize/blob/master/src/index.ts
 * @param {function} accessibilityScaleFactor
 * Func  to get Font size by PixelRatio.
 * if accessibility is > 100% (1) than multiple font size with PixelRatio.
 * if accessibility is > 150% (1.5) than divide font size with PixelRatio + 1.8.

 */
export const iphone11Scale = (
  size,
  based = 'width',
  accessibilityScaleFactor,
) => {
  let newSize =
    based === 'height' ? size * iphone11Hscale : size * iphone11Wscale;
  if (screenWidth < MEDIA_VALUE.LARGE_SCREEN_WIDTH) {
    if (accessibilityScaleFactor) {
      newSize = accessibilityScaleFactor(newSize);
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return size * MEDIA_VALUE.SCREEN_PIXEL;
};

export const scale = iphone11Scale;

export const cardSizes = {
  MAIN_CARD_WIDTH: screenWidth * 0.7,
};
