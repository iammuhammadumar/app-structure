import PropTypes from 'prop-types';
import {TEXT_VARIANTS} from './styled';

export const propTypes = {
  /**
   * Node containing the text
   */
  children: PropTypes.node,
  /**
   * The value that determines which text variant will be displayed
   */
  variant: PropTypes.oneOf(Object.values(TEXT_VARIANTS)),
  /**
   * Number prop to apply custom font size
   */
  fontSize: PropTypes.number,
  /**
   * Number prop to apply custom font weight
   */
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Number prop to apply custom font color
   */
  color: PropTypes.string,
  /**
   * Number prop to apply custom letter spacing
   */
  letterSpacing: PropTypes.number,
  /**
   * Number prop to apply custom text alignment
   */
  textAlign: PropTypes.string,
  /**
   * Number prop to apply custom line height
   */
  lineHeight: PropTypes.number,
  /**
   * Callback called on text pressed
   */
  onPress: PropTypes.func,
};

export const defaultProps = {
  variant: TEXT_VARIANTS.P1,
};
