import styled from 'styled-components/native';
import {scale, cardSizes} from '../../utils';
import {Text, TEXT_VARIANTS, Button} from '../../components';
import LinearGradient from 'react-native-linear-gradient';

export const LinearGradientColors = ['#eb348f', '#e234eb', '#9f34eb'];

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.black};
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  background-color: ${({theme}) => theme.color.white};
  height: ${scale(250)}px;
  align-self: center;
  width: ${({cardWidth}) =>
    cardWidth ? `${cardWidth}px` : `${cardSizes.MAIN_CARD_WIDTH}px`};
  align-items: center;
  justify-content: center;
  padding-horizontal: ${scale(50)}px;
`;

export const ImageContainer = styled.Image`
  width: ${scale(20)}px;
  height: ${scale(20)}px;
  align-self: center;
  resize-mode: contain;
`;

export const Heading = styled(Text).attrs(() => ({
  variant: TEXT_VARIANTS.H4,
  lineHeight: 20,
  textAlign: 'center',
}))`
  align-self: center;
  color: ${({theme}) => theme.color.gray};
`;

export const ButtonText = styled(Text).attrs(() => ({
  variant: TEXT_VARIANTS.H6,
  lineHeight: 25,
}))`
  color: ${({theme}) => theme.color.white};
`;

export const JoinedButtonText = styled(ButtonText)`
  margin-top: ${scale(50)}px;
  color: ${({theme}) => theme.color.bleck};
`;

export const JoinButtonWrapper = styled(Button)`
  margin-top: ${scale(50)}px;
  width: ${scale(100)}px;
  height: ${scale(50)}px;
  border-radius: ${scale(30)}px;
`;

export const JoinButton = styled(LinearGradient)`
  width: ${scale(100)}px;
  height: ${scale(50)}px;
  border-radius: ${scale(30)}px;
  align-items: center;
  justify-content: center;
`;
