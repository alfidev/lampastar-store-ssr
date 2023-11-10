import styled from 'styled-components';

import { adaptive } from '../../../../ui/components/Adaptive';

export const StyledContentMain = styled.main<{ menuIsOpened: boolean }>`
  padding-top: ${({ theme }) => theme.indents.xl};

  ${adaptive.maxWidth.tablet} {
    display: ${({ menuIsOpened }) => (menuIsOpened ? 'none' : 'block')};
  }
`;
