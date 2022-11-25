import React, {useState} from 'react';
import {CLAUSES, LABELS} from '../../constants';
import {
  Container,
  Heading,
  Card,
  JoinButton,
  ButtonText,
  ImageContainer,
  JoinButtonWrapper,
  LinearGradientColors,
  JoinedButtonText
} from './styled';



export const Main = () => {

  const [isPressed, onIsPressed] = useState(true);
  const [isShowTick, onIsShowTick] = useState(false);


  const onPressHandler = () => {
    onIsShowTick(!isShowTick)
    setTimeout(() => {
      onIsPressed(!isPressed)
    }, 1000);
  };

  return (
    <Container>
      <Card>
        <Heading onPress={onPressHandler}>{CLAUSES.MAIN_SCREEN_HEADING}</Heading>
        {isPressed ? <JoinButtonWrapper onPress={onPressHandler} >
          <JoinButton colors={LinearGradientColors}>
            {!isShowTick ?
            <ButtonText>{LABELS.JOIN}</ButtonText> :
              <ImageContainer source={require('../../assets/Vector.png')} />
            }
        </JoinButton>
        </JoinButtonWrapper> : null}
        {!isPressed ?
          <JoinedButtonText>{LABELS.JOINED}</JoinedButtonText>
          : null}
      </Card>
    </Container>
  );
};
