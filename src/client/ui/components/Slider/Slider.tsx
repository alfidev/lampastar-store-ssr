import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../Adaptive';
import { ArrowButton } from '../ArrowButton';
import { ArrowLeft, ArrowRight } from '@ui/icons';

type Props = {
  slides: ReactNode[];
  isLoading?: boolean;
  isDisabled?: boolean;
};

const SliderBlock = styled.div`
  position: relative;

  ${ArrowButton} {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.2s, opacity 0.2s linear;
  }

  :hover {
    ${ArrowButton} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div`
  min-width: 100%;
  max-width: 100%;
`;

const BottomPanel = styled.div`
  display: flex;
  justify-content: center;
`;

const BottomControl = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.background.dark};
  margin-top: ${({ theme }) => theme.indents.s};
  opacity: 0.3;
  height: 20px;
  border-radius: 10px;
`;

const PrevArrowButton = styled(ArrowButton)`
  z-index: ${({ theme }) => theme.zIndex.button};
  position: absolute;
  top: calc(50% - 18px);
  left: -12px;
`;
const NextArrowButton = styled(ArrowButton)`
  z-index: ${({ theme }) => theme.zIndex.button};
  position: absolute;
  top: calc(50% - 18px);
  right: -12px;
`;

const BottomControlButton = styled.div<{ active: boolean }>`
  background: ${({ theme }) => theme.color.background.primary};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;

  ${({ active }) => (active ? 'opacity: 1' : 'opacity: .35')};

  :last-child {
    margin-right: 10px;
  }
`;

export const Slider = ({ slides }: Props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSliderRef = useRef<HTMLDivElement | null>();

  useEffect(() => {
    if (activeSliderRef.current) {
      activeSliderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeSliderRef.current]);

  const handleClickBottomControl = (index: number) => {
    setActiveSlideIndex(index);
  };

  const handleClickPrevSlide = () => {
    let newIndex = activeSlideIndex - 1;
    if (newIndex < 0) newIndex = slides.length - 1;

    setActiveSlideIndex(newIndex);
  };

  const handleClickNextSlide = () => {
    let newIndex = activeSlideIndex + 1;
    if (newIndex >= slides.length) newIndex = 0;

    setActiveSlideIndex(newIndex);
  };

  if (!slides.length) return null;

  return (
    <Container>
      <SliderBlock>
        {slides.length > 1 && (
          <>
            <PrevArrowButton onClick={handleClickPrevSlide}>
              <ArrowLeft />
            </PrevArrowButton>
            <NextArrowButton onClick={handleClickNextSlide}>
              <ArrowRight />
            </NextArrowButton>
          </>
        )}
        <Wrapper>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              ref={(instance) => {
                if (index === activeSlideIndex) activeSliderRef.current = instance;
              }}
            >
              {slide}
            </Slide>
          ))}
        </Wrapper>
      </SliderBlock>
      <BottomPanel>
        <BottomControl>
          {slides.map((_slide, index) => (
            <BottomControlButton
              key={index}
              active={index === activeSlideIndex}
              onClick={() => handleClickBottomControl(index)}
            />
          ))}
        </BottomControl>
      </BottomPanel>
    </Container>
  );
};
