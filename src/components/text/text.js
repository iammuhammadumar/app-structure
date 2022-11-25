import React from 'react';
import {defaultProps, propTypes} from './props';
import {BASE_TEXT, TEXT_VARIANTS} from './styled';

/**
 * Text
 * @param {*} props include children, variant, color, fontSize,
 * fontWeight, textAlign, letter spacing
 */

export const Text = ({
  children,
  color,
  fontSize,
  fontWeight,
  textAlign,
  letterSpacing,
  variant,
  lineHeight,
  onPress,
  ...rest
}) => (
  <BASE_TEXT
    onPress={onPress}
    variant={variant}
    fontSize={fontSize}
    fontWeight={fontWeight}
    color={color}
    textAlign={textAlign}
    letterSpacing={letterSpacing}
    lineHeight={lineHeight}
    {...rest}>
    {children}
  </BASE_TEXT>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

Text.VARIANTS = TEXT_VARIANTS;
