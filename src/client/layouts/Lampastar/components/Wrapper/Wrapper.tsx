import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { ContentWrapper } from '../ComponentWrapper';
import { CatalogMenu } from '../CatalogMenu';
import { StyledContentMain } from './styled';

export const Wrapper = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  return (
    <>
      <Header toggleMenu={() => setMenuIsOpened(!menuIsOpened)} menuIsOpened={menuIsOpened} />
      {menuIsOpened && <CatalogMenu closeMenu={() => setMenuIsOpened(false)} />}
      <StyledContentMain menuIsOpened={menuIsOpened}>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </StyledContentMain>
      <Footer menuIsOpened={menuIsOpened} />
    </>
  );
};
