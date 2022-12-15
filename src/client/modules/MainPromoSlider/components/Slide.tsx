import React from 'react';
import { promoSliderEnum } from '../constants';
import styled from 'styled-components';
import { Button } from '@ui/components';

type Props = {
  type: promoSliderEnum;
  color: string;
  elementId?: number;
  text: string;
  buttonText: string;
  image: string;
  onClick: (type: promoSliderEnum, elementId?: number) => void;
};

const Wrapper = styled.div<{ color: string }>`
  position: relative;
  background: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.radius.s};
  height: 300px;
  overflow: hidden;
`;

const SliderButton = styled(Button.Contained).attrs({ secondary: true, size: 'l' })`
  position: absolute;
  left: ${({ theme }) => theme.indents.m};
  bottom: ${({ theme }) => theme.indents.m};
  z-index: 3;
`;

const ImageBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

const SlideText = styled.div<{ black?: boolean }>`
  ${({ theme }) => theme.typography.big1};
  color: ${({ theme, black }) => (black ? theme.color.text.primary : theme.color.text.contrast)};
  padding: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.s};
  text-align: right;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  white-space: pre-line;
`;

export const Slide = ({ type, elementId, color, text, buttonText, image, onClick }: Props) => {
  const handleClickButton = () => {
    onClick(type, elementId);
  };

  return (
    <Wrapper color={color}>
      <ImageBox>{image && <img alt={buttonText} src={`${image}`} />}</ImageBox>
      <SlideText black={!image}>{text.replaceAll('\\n', '\n')}</SlideText>
      <SliderButton onClick={handleClickButton}>{buttonText}</SliderButton>
    </Wrapper>
  );
};
