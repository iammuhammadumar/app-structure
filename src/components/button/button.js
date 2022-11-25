import React from 'react';
// props
import {defaultProps, propTypes} from './props';
// style
import {
  BUTTON_VARIANTS,
  BUTTON_SIZE_VARIANTS,
  BUTTON_STYLE_VARIANTS,
  LeftIcon,
  RightIcon,
  ButtonText,
  ButtonLoader,
} from './styled';

/**
 * Button
 * @param {*} props include children, variant, disabled, onPress, width, type
 */

export const Button = ({
  bgColor,
  children,
  variant,
  text,
  showLoader,
  disabled,
  leftIcon,
  rightIcon,
  onPress,
  size,
  width,
  ...rest
}) => {
  const StyledButton = BUTTON_STYLE_VARIANTS[variant];

  let content = children || <ButtonText>{text}</ButtonText>;
  if (showLoader) {
    content = <ButtonLoader size="small" color="#ffffff" />;
  }

  let iconComponent = null;
  if (!showLoader && leftIcon) {
    iconComponent = leftIcon || (
      <LeftIcon
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    );
  }

  let rightIconComponent = null;
  if (!showLoader && rightIcon) {
    rightIconComponent = rightIcon || (
      <RightIcon
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    );
  }

  return (
    <StyledButton
      bgColor={bgColor}
      disabled={disabled}
      onPress={onPress}
      leftIcon={leftIcon}
      size={size}
      width={width}
      {...rest}>
      {iconComponent}
      {content}
      {rightIconComponent}
    </StyledButton>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

Button.VARIANTS = BUTTON_VARIANTS;
Button.SIZE_VARIANTS = BUTTON_SIZE_VARIANTS;
