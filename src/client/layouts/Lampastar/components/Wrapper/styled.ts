import styled from 'styled-components';
import { adaptive } from '@ui/components/Adaptive';

export const StyledContentMain = styled.main<{ menuIsOpened: boolean }>`
  ${adaptive.maxWidth.tablet} {
    display: ${({ menuIsOpened }) => (menuIsOpened ? 'none' : 'block')};
  }
`;
