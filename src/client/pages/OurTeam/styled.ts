import styled from 'styled-components';
import { Card } from '@ui/components';
import { Col, Container } from '@ui/components/Adaptive';
import { Typography } from '@ui/components/Typography';

export const WrapperContainer = styled(Container).attrs(() => ({
  fluid: true,
}))`
  margin-top: 60px;
`;

export const StyledCol = styled(Col)`
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

export const StyledCard = styled(Card)`
  height: 100%;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  width: 100%;
`;

export const StyledName = styled(Typography).attrs(() => ({
  variant: 'body3',
  tag: 'h4',
}))`
  margin: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.none};
`;

export const StyledDescription = styled(Typography).attrs(() => ({
  variant: 'body1',
  tag: 'p',
  color: 'tertiary',
}))`
  margin: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.none};
`;

export const Divider = styled.hr`
  background: ${({ theme }) => theme.color.background.line};
  margin-bottom: ${({ theme }) => theme.indents.xl};
  height: 1px;
  border: none;
`;
