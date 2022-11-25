import styled from 'styled-components/native';
import APP_COLORS from '../../theme';
import {scale} from '../../utils';
import {Text} from '../text';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  DEFAULT: 'default',
  GREEN: 'green',
};

export const BUTTON_SIZE_VARIANTS = {
  SMALL: 'small',
  REGULAR: 'regular',
  FULL: 'full',
};

const getButtonWidth = props => {
  const {size, width} = props;
  let buttonWidth = '100%';

  if (!width && !size) {
    return buttonWidth;
  }
  if (width) {
    return width;
  }

  switch (size) {
    case BUTTON_SIZE_VARIANTS.SMALL:
      buttonWidth = 'auto';
      break;
    case BUTTON_SIZE_VARIANTS.REGULAR:
      buttonWidth = 'auto';
      break;
    default:
      buttonWidth = '100%';
  }
  return buttonWidth;
};

const BASE_BUTTON = styled.TouchableOpacity`
  align-items: center;
  border-radius: ${({theme}) => theme.radius.default}px;
  display: flex;
  flex-direction: row;
  height: ${({size, theme}) =>
    size === BUTTON_SIZE_VARIANTS.SMALL ? theme.spacing.xlarge : 'auto'};
  min-height: ${({size, theme}) =>
    size === BUTTON_SIZE_VARIANTS.SMALL ? theme.spacing.xlarge : scale(50)}px;
  justify-content: ${({leftIcon}) => (leftIcon ? 'flex-start' : 'center')};
  margin-vertical: ${({theme}) => theme.spacing.small}px;
  padding-horizontal: ${({theme}) => theme.spacing.xlarge}px;
  width: ${getButtonWidth};
  align-self: center;
`;

export const BUTTON_COLORS = {
  /**
   * Primary color
   * */
  [BUTTON_VARIANTS.PRIMARY]: APP_COLORS.WHITE,
  /**
   * Secondry Label
   * */
  [BUTTON_VARIANTS.SECONDARY]: APP_COLORS.GREEN,
  /**
   * Tertiary Label
   * */
  [BUTTON_VARIANTS.TERTIARY]: APP_COLORS.GREEN,
  /**
   * Default Label
   * */
  [BUTTON_VARIANTS.DEFAULT]: APP_COLORS.GREEN,
  /**
   * Green Color Label
   * */
  [BUTTON_VARIANTS.GREEN]: APP_COLORS.GREEN,
};

export const BUTTON_STYLE_VARIANTS = {
  /**
   * Primary Button
   * */
  [BUTTON_VARIANTS.PRIMARY]: styled(BASE_BUTTON)`
    background-color: ${({theme, disabled, bgColor}) =>
      disabled ? theme.color.lightGray5 : bgColor || theme.color.green};
    border-color: ${({theme, disabled}) =>
      disabled ? theme.color.gray : theme.color.blue};
  `,
  /**
   * Secondry Button
   * */
  [BUTTON_VARIANTS.SECONDARY]: styled(BASE_BUTTON)`
    border-width: 1px;
    border-color: ${({theme}) => theme.color.green0};
    padding: 0px;
  `,
  /**
   * Tertiary Button
   * */
  [BUTTON_VARIANTS.TERTIARY]: styled(BASE_BUTTON)`
    border: 0;
    width: auto;
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;
  `,
  /**
   * Default Button
   * */
  [BUTTON_VARIANTS.DEFAULT]: styled(BASE_BUTTON)`
    background-color: ${({theme}) => theme.color.lightBlue};
  `,
  /**
   * Green Button
   * */
  [BUTTON_VARIANTS.GREEN]: styled(BASE_BUTTON)`
    background-color: ${({theme}) => theme.color.green0};
  `,
};

export const LeftIcon = styled.Image`
  width: ${scale(20)}px;
  height: ${scale(20)}px;
  margin-right: ${({theme}) => theme.spacing.xlarge}px;
`;

export const RightIcon = styled.Image`
  width: ${scale(20)}px;
  height: ${scale(20)}px;
  margin-left: ${({theme}) => theme.spacing.xlarge * 4}px;
`;

export const ButtonText = styled(Text)`
  color: ${({theme}) => theme.color.white};
  text-align: center;
  font-size: ${scale(16)}px;
  font-weight: bold;
`;

export const ButtonLoader = styled.ActivityIndicator``;
