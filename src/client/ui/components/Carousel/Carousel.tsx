import React, { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { Container } from '../Adaptive';
import { ArrowButton } from '../ArrowButton';
import { ArrowLeft, ArrowRight } from '@ui/icons';

const CarouselBlock = styled.div`
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

export const Carousel = ({ children }: { children: ReactNode }) => {
  const carouselRef = useRef<HTMLDivElement | null>();

  const handleClickPrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current?.scrollTo({ left: carouselRef.current?.scrollLeft - 288, behavior: 'smooth' });
    }
  };

  const handleClickNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current?.scrollTo({ left: carouselRef.current?.scrollLeft + 288, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <CarouselBlock>
        <PrevArrowButton onClick={handleClickPrevSlide}>
          <ArrowLeft />
        </PrevArrowButton>
        <NextArrowButton onClick={handleClickNextSlide}>
          <ArrowRight />
        </NextArrowButton>

        <Wrapper ref={(instance) => (carouselRef.current = instance)}>{children}</Wrapper>
      </CarouselBlock>
    </Container>
  );
};
