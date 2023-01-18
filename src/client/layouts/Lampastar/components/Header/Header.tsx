import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { CONTACTS, MAIN_MENU, ROUTES } from '@common/constants';
import { USE_ORDER, useFeature } from '@common/featureToggles';
import { useProfile } from '@common/hooks';
import { CatalogSearch } from '@modules/Search';
import { Logo } from '@resources/images/';
import { PhoneIcon, MenuRightIcon, CloseIcon, User, Like, Basket } from '@ui/icons';

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
  HeaderIcon,
} from './styled';

const { paymentAndDelivery, contacts, favourites, basket, home, profile } = ROUTES;
const { phoneNumber } = CONTACTS;

type Props = {
  menuIsOpened: boolean;
  toggleMenu: () => void;
};

export const Header = React.memo(({ menuIsOpened, toggleMenu }: Props) => {
  const { isAuthorized } = useProfile();
  const theme = useTheme();

  const isUseOrder = useFeature(USE_ORDER);

  return (
    <>
      <StyledHeader menuIsOpened={menuIsOpened}>
        <TopLine>
          <TopContainer>
            <NavGroup>
              <StyledLinkTop to={paymentAndDelivery.path}>{paymentAndDelivery.label}</StyledLinkTop>
              <StyledLinkTop to={contacts.path}>{contacts.label}</StyledLinkTop>
              <StyledLinkOuter href={`tel:${phoneNumber.value}`}>
                <PhoneIcon style={{ marginRight: theme.indents.xs }} size="xxl" />
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
            <NavGroupSearch>
              <CatalogButton onClick={toggleMenu}>
                {menuIsOpened ? <CloseIcon /> : <MenuRightIcon />}
                <StyledCatalogText>Каталог</StyledCatalogText>
              </CatalogButton>
              <CatalogSearch />
            </NavGroupSearch>
            {isUseOrder && (
              <NavGroupAdaptive>
                <StyledLinkMiddle to={favourites.path}>
                  <HeaderIcon>
                    <Like />
                  </HeaderIcon>
                  {favourites.label}
                </StyledLinkMiddle>
                {isAuthorized && (
                  <StyledLinkMiddle to={profile.path}>
                    <HeaderIcon>
                      <User />
                    </HeaderIcon>
                    {profile.label}
                  </StyledLinkMiddle>
                )}
                {!isAuthorized && (
                  <StyledLinkMiddle to={'/profile/login'}>
                    <HeaderIcon>
                      <User />
                    </HeaderIcon>
                    Вход
                  </StyledLinkMiddle>
                )}
                <StyledLinkMiddle to={basket.path}>
                  <HeaderIcon>
                    <Basket />
                  </HeaderIcon>
                  {basket.label}
                </StyledLinkMiddle>
              </NavGroupAdaptive>
            )}
          </MiddleContainer>
        </MiddleLine>
        <BottomLine>
          <BottomContainer>
            <NavGroup>
              {MAIN_MENU.map((page) => (
                <StyledLinkBottom key={ROUTES[page].path} to={ROUTES[page].path}>
                  {ROUTES[page].label}
                </StyledLinkBottom>
              ))}
            </NavGroup>
          </BottomContainer>
        </BottomLine>
      </StyledHeader>
    </>
  );
});

Header.displayName = 'Header';
