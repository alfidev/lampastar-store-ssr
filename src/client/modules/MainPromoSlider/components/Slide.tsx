import React from 'react';
import { promoSliderEnum } from '../constants';
import styled from 'styled-components';
import { Button } from '@ui/components';

type Props = {
  type: promoSliderEnum;
  color: string;
  elementId: string;
};

const Wrapper = styled.div<{ color: string }>`
  position: relative;
  background: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.radius.s};
  height: 300px;
`;

const SliderButton = styled(Button.Contained).attrs({ secondary: true, size: 'l' })`
  position: absolute;
  left: ${({ theme }) => theme.indents.m};
  bottom: ${({ theme }) => theme.indents.m};
`;

export const Slide = ({ type, elementId, color }: Props) => {
  const handleClickButton = () => {
    console.log(type, elementId);
  };

  return (
    <Wrapper color={color}>
      <SliderButton onClick={handleClickButton}>К товару</SliderButton>
    </Wrapper>
  );
};
