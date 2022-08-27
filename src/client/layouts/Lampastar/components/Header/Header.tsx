import React, { useState } from 'react';
import {
  BottomLine,
  MiddleLine,
  StyledLinkTop,
  TopContainer,
  TopLine,
  NavGroup,
  StyledLinkOuter,
  MiddleContainer,
  StyledLinkMiddle,
  NavGroupSearch,
  StyledHeader,
  StyledLinkBottom,
  BottomContainer,
  CatalogButton,
  NavGroupAdaptive,
  StyledCatalogText,
  CatalogMenuWrapper,
  CatalogMenuModal,
} from './styled';
import { CONTACTS, MAIN_MENU, ROUTES, PAGE_SD } from '@common/constants';
import { PhoneIcon, LikeIcon, BasketIcon, MenuRightIcon, CloseIcon } from '@ui/icons';
import { useTheme } from 'styled-components';
import { Logo } from '@resources/images/';
import { Link } from 'react-router-dom';
import { SearchInput } from '@ui/components';
import { BACKEND_ENABLE, USE_CATALOG, useFeature } from '@common/featureToggles';
import { CatalogMenu } from '@modules/Catalog';
import { ContentWrapper } from '@layouts/Lampastar/components/ComponentWrapper';

const { paymentAndDelivery, contacts, favourites, basket, home } = ROUTES;
const { phoneNumber } = CONTACTS;

export const Header = React.memo(() => {
  const [menuOpened, setMenuOpened] = useState(true);

  const theme = useTheme();

  const isBackEnabled = useFeature(BACKEND_ENABLE);
  const isUseCatalog = useFeature(USE_CATALOG);

  const filterPage = (page: string) => (isUseCatalog && page === 'catalog') || isBackEnabled || !PAGE_SD.includes(page);

  return (
    <>
      <StyledHeader>
        <TopLine>
          <TopContainer>
            <NavGroup>
              <StyledLinkTop to={paymentAndDelivery.path}>{paymentAndDelivery.label}</StyledLinkTop>
              <StyledLinkTop to={contacts.path}>{contacts.label}</StyledLinkTop>
              <StyledLinkOuter href={`tel:${phoneNumber.value}`}>
                <PhoneIcon style={{ marginRight: theme.indents.xs }} size={theme.sizes.xxl} />
                {phoneNumber.label}
              </StyledLinkOuter>
            </NavGroup>
          </TopContainer>
        </TopLine>
        <MiddleLine>
          <MiddleContainer>
            <Link to={home.path}>
              <Logo />
            </Link>
            {isUseCatalog && (
              <>
                <NavGroupSearch>
                  <CatalogButton onClick={() => setMenuOpened(!menuOpened)}>
                    {menuOpened ? <CloseIcon /> : <MenuRightIcon />}
                    <StyledCatalogText>Каталог</StyledCatalogText>
                  </CatalogButton>
                  <SearchInput />
                </NavGroupSearch>
                {isBackEnabled && (
                  <NavGroupAdaptive>
                    <StyledLinkMiddle to={favourites.path}>
                      <LikeIcon size={theme.sizes.xxl} style={{ marginBottom: theme.indents.xxxs }} />
                      {favourites.label}
                    </StyledLinkMiddle>
                    <StyledLinkMiddle to={basket.path}>
                      <BasketIcon size={theme.sizes.xxl} style={{ marginBottom: theme.indents.xxxs }} />
                      {basket.label}
                    </StyledLinkMiddle>
                  </NavGroupAdaptive>
                )}
              </>
            )}
          </MiddleContainer>
        </MiddleLine>
        <BottomLine>
          <BottomContainer>
            <NavGroup>
              {MAIN_MENU.filter(filterPage).map((page) => (
                <StyledLinkBottom key={ROUTES[page].path} to={ROUTES[page].path}>
                  {ROUTES[page].label}
                </StyledLinkBottom>
              ))}
            </NavGroup>
          </BottomContainer>
        </BottomLine>
      </StyledHeader>
      {menuOpened && (
        <CatalogMenuModal onClick={() => setMenuOpened(false)}>
          <CatalogMenuWrapper onClick={(e) => e.stopPropagation()}>
            <ContentWrapper>
              <CatalogMenu />
            </ContentWrapper>
          </CatalogMenuWrapper>
        </CatalogMenuModal>
      )}
    </>
  );
});

Header.displayName = 'Header';
