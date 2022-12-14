import React from 'react';
import { NewsItemType } from '../types';
import styled from 'styled-components';
import { format } from 'date-fns';

type Props = {
  news: NewsItemType;
  onClick: (id: number) => void;
};

const Wrapper = styled.div`
  height: 257px;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.xs};
  cursor: pointer;
`;

const StyledImage = styled.img`
  max-width: 100%;
  min-height: 100%;
`;

const Black = styled.div`
  background: #000;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
`;

const TextBlock = styled.div`
  position: absolute;
  bottom: 0;
  padding: ${({ theme }) => theme.indents.xs};
  z-index: 1;
`;

const DateBlock = styled.div`
  color: ${({ theme }) => theme.color.text.tertiary};
`;

const TitleBlock = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const NewsSlide = ({ news, onClick }: Props) => {
  const { title, images, dateAdded, id } = news;

  return (
    <Wrapper onClick={() => onClick(id)}>
      <TextBlock>
        <DateBlock>{format(new Date(dateAdded), 'dd.MM.yyyy')}</DateBlock>
        <TitleBlock>{title}</TitleBlock>
      </TextBlock>
      <Black />
      <StyledImage src={images[0]?.p?.url || ''} />
    </Wrapper>
  );
};
