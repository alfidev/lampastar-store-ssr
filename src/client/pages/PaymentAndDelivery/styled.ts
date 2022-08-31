import styled from 'styled-components';
import { Typography } from '@ui/components/Typography';
import { adaptive } from '@ui/components/Adaptive';

export const Divider = styled.hr`
  background: ${({ theme }) => theme.color.background.line};
  margin-bottom: ${({ theme }) => theme.indents.xl};
  height: 1px;
  border: none;
`;

export const StyledTitle = styled(Typography)`
  display: flex;
  margin-top: ${({ theme }) => theme.indents.none};
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

export const StyledParagraph = styled(Typography)`
  margin: 0;
`;

export const Details = styled.div`
  margin-left: ${({ theme }) => theme.indents.xxl};
  margin-bottom: ${({ theme }) => theme.indents.xxl};
`;

export const TransparentDivider = styled.div`
  ${adaptive.minWidth.desktopS} {
    height: ${({ theme }) => theme.indents.xxxxl};
  }
`;
