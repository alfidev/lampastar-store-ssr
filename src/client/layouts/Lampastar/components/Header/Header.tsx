import React from 'react';
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
} from './styled';
import { CONTACTS, MAIN_MENU, ROUTES } from '@common/constants';
import { PhoneIcon, LikeIcon, BasketIcon, MenuRightIcon, CloseIcon } from '@ui/icons';
import { useTheme } from 'styled-components';
import { Logo } from '@resources/images/';
import { Link } from 'react-router-dom';
import { USE_ORDER, useFeature } from '@common/featureToggles';
import { CatalogSearch } from '@modules/Search';

const { paymentAndDelivery, contacts, favourites, basket, home } = ROUTES;
const { phoneNumber } = CONTACTS;

type Props = {
  menuIsOpened: boolean;
  toggleMenu: () => void;
};

export const Header = React.memo(({ menuIsOpened, toggleMenu }: Props) => {
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
                  <LikeIcon size="xxl" style={{ marginBottom: theme.indents.xxxs }} />
                  {favourites.label}
                </StyledLinkMiddle>
                <StyledLinkMiddle to={basket.path}>
                  <BasketIcon size="xxl" style={{ marginBottom: theme.indents.xxxs }} />
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
