import styled from 'styled-components/native';
import {scale} from '../../utils';
/**
 * All the text variants for the text component
 */
export const TEXT_VARIANTS = {
  // Lato
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',

  P1: 'P1',
  P2: 'P2',
  P3: 'P3',
  P4: 'P4',
};

/**
 * Variant styles should be added here
 */
export const TEXT_STYLES_VARIANTS = {
  [TEXT_VARIANTS.H1]: `
    font-size: ${scale(32)}px;
  `,
  [TEXT_VARIANTS.H2]: `
    font-size: ${scale(24)}px;
  `,
  [TEXT_VARIANTS.H3]: `
    font-size: ${scale(20)}px;
  `,
  [TEXT_VARIANTS.H4]: `
    font-size: ${scale(16)}px;
  `,
  [TEXT_VARIANTS.H5]: `
    font-size: ${scale(14)}px;
  `,
  [TEXT_VARIANTS.P1]: `
    font-size: ${scale(16)}px;
  `,
  [TEXT_VARIANTS.P2]: `
    font-size: ${scale(14)}px;
  `,
  [TEXT_VARIANTS.P3]: `
    font-size: ${scale(13)}px;
  `,
  [TEXT_VARIANTS.P4]: `
    font-size: ${scale(12)}px;
  `,
};

/**
 * Base component that will be used, this deals with additional
 * props for customization
 */

export const BASE_TEXT = styled.Text`
  color: ${({color, theme}) => color || theme.color.darkestGray1};
  ${({variant}) => TEXT_STYLES_VARIANTS[variant]};
  ${({fontFamily}) => fontFamily && `font-family: ${fontFamily};`}
  ${({fontSize}) => fontSize && `font-size: ${scale(fontSize)}px;`}
    ${({fontWeight}) => fontWeight && `font-weight: ${fontWeight};`}
    ${({letterSpacing}) =>
    letterSpacing && `letter-spacing: ${scale(letterSpacing)}px;`}
    ${({textAlign}) => textAlign && `text-align: ${textAlign};`}
    ${({lineHeight}) => lineHeight && `line-height: ${scale(lineHeight)}px;`}
`;
