'use client';

import React, { ReactNode, useMemo, useState } from 'react';

import { FiltersContext } from '@common/context';

import { StyledContentMain } from './styled';
import { FILTERS_PORTAL_ID } from '../../../../common/constants/portals';
import { CatalogMenu } from '../CatalogMenu';
import { ContentWrapper } from '../ComponentWrapper';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { TopInfoBlock } from '../TopInfoBlock';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [filtersIsOpened, setFiltersIsOpened] = useState(false);

  const contextValue = useMemo(() => ({ filtersIsOpened, setFiltersIsOpened }), [filtersIsOpened, setFiltersIsOpened]);

  return (
    <>
      <Header toggleMenu={() => setMenuIsOpened(!menuIsOpened)} menuIsOpened={menuIsOpened} />
      {menuIsOpened && <CatalogMenu closeMenu={() => setMenuIsOpened(false)} />}
      <div id={FILTERS_PORTAL_ID} />
      <FiltersContext.Provider value={contextValue}>
        <StyledContentMain menuIsOpened={menuIsOpened || filtersIsOpened}>
          <ContentWrapper>
            {false && <TopInfoBlock />}
            {children}
          </ContentWrapper>
        </StyledContentMain>
      </FiltersContext.Provider>
      <Footer menuIsOpened={menuIsOpened} />
    </>
  );
};
