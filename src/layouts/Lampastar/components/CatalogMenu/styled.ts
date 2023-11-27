import styled from 'styled-components';

import { adaptive } from '../../../../ui/components/Adaptive';

export const CatalogMenuModal = styled.div`
  ${adaptive.minWidth.desktopS} {
    position: absolute;
    top: 151px;
    bottom: 0;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndex.menu};
    background: ${({ theme }) => theme.color.opacity.modal};
  }
`;

export const CatalogMenuWrapper = styled.div`
  padding: ${({ theme }) => theme.indents.xxl} 0;
  background: ${({ theme }) => theme.color.background.primary};
`;
