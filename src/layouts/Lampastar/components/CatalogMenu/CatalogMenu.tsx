import React from 'react';

import { CatalogMenuModal, CatalogMenuWrapper } from './styled';
import { CatalogMenu as CatalogMenuFromModule } from '../../../../modules/Catalog/containers/CatalogMenu';
import { ContentWrapper } from '../ComponentWrapper';

type Props = {
  closeMenu: () => void;
};

export const CatalogMenu = ({ closeMenu }: Props) => (
  <CatalogMenuModal onClick={closeMenu}>
    <CatalogMenuWrapper onClick={(e) => e.stopPropagation()}>
      <ContentWrapper>
        <CatalogMenuFromModule closeMenu={closeMenu} />
      </ContentWrapper>
    </CatalogMenuWrapper>
  </CatalogMenuModal>
);
