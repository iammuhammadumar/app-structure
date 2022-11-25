import PropTypes from 'prop-types';
import {BUTTON_VARIANTS, BUTTON_SIZE_VARIANTS} from './styled';

export const propTypes = {
  /**
   * Button background color
   */
  bgColor: PropTypes.string,
  /**
   * The node/s to display in the button
   */
  children: PropTypes.node,
  /**
   * Button text
   */
  text: PropTypes.string,
  /**
   * A boolean prop used to disable the button
   */
  disabled: PropTypes.bool,
  /**
   * Callback to fire when button is clicked
   */
  onPress: PropTypes.func,
  /**
   * The value that determines which button variant will be displayed
   */
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  /**
   * The width of the button
   */
  width: PropTypes.string,
  /**
   * true: show spinner
   */
  showLadshowLoaderda: PropTypes.bool,
  /**
   * leftIcon
   */
  leftIcon: PropTypes.object,
  /**
   * rightIcon
   */
  rightIcon: PropTypes.object,
  /**
   * Size of the buttons : SMALL, REGULAR (children width), FULL (100%)
   */
  size: PropTypes.oneOf(Object.values(BUTTON_SIZE_VARIANTS)),
};

export const defaultProps = {
  disabled: false,
  variant: BUTTON_VARIANTS.PRIMARY,
  onPress: () => {},
};
