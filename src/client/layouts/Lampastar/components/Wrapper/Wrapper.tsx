import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { FILTERS_PORTAL_ID } from '@common/constants';
import { FiltersContext } from '@common/context';

import { CatalogMenu } from '../CatalogMenu';
import { ContentWrapper } from '../ComponentWrapper';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { TopInfoBlock } from '../TopInfoBlock';
import { StyledContentMain } from './styled';

export const Wrapper = () => {
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
            <TopInfoBlock />
            <Outlet />
          </ContentWrapper>
        </StyledContentMain>
      </FiltersContext.Provider>
      <Footer menuIsOpened={menuIsOpened} />
    </>
  );
};
