import React from 'react';
import { Information } from '@modules/Information';
import { Container } from './styled';

export const TopInfoBlock = () => {
  return (
    <Container>
      <Information type="top" />
    </Container>
  );
};
