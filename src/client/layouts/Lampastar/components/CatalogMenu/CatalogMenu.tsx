import React from 'react';
import { CatalogMenuModal, CatalogMenuWrapper } from './styled';
import { ContentWrapper } from '../ComponentWrapper';
import { CatalogMenu as CatalogMenuFromModule } from '@modules/Catalog';

type Props = {
  closeMenu: () => void;
};

export const CatalogMenu = ({ closeMenu }: Props) => {
  return (
    <CatalogMenuModal onClick={closeMenu}>
      <CatalogMenuWrapper onClick={(e) => e.stopPropagation()}>
        <ContentWrapper>
          <CatalogMenuFromModule />
        </ContentWrapper>
      </CatalogMenuWrapper>
    </CatalogMenuModal>
  );
};
