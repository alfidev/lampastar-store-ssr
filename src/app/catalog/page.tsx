'use client';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.color.background.primary};
`;

export default function Page() {
  return <Title>My page</Title>;
}
