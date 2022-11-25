import {Platform} from 'react-native';

const Fonts = {
  Font: 'Lato',
  FontRegular: 'Lato-Regular',
  FontMedium: 'Lato-Medium',
  FontItalic: 'Lato-Italic',
};

/**
 * Just the font names.
 *
 * The various styles of fonts are defined in the typography styles.
 */
export const font = {
  /**
   * The primary font. Used in most places.
   */
  primary: Platform.select({
    ios: Fonts.FontRegular,
    android: Fonts.FontRegular,
  }),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({
    ios: Fonts.FontMedium,
    android: Fonts.FontMedium,
  }),

  italic: Fonts.FontItalic,
};
