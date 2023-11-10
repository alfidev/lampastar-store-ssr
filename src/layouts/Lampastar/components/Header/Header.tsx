import Image from 'next/image';
import Link from 'next/link';
import React, { MouseEvent } from 'react';
import { useTheme } from 'styled-components';

import { ROUTES } from '@common/constants/routes';
import { Icon } from '@ui/components';

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
  HeaderIconCounter,
} from './styled';
import { CONTACTS, MAIN_MENU } from '../../../../common/constants';
import { USE_FAVORITES, USE_ORDER, useFeature } from '../../../../common/featureToggles';
import { useBasket, useProfile } from '../../../../common/hooks';
import { CatalogSearch } from '../../../../modules/Search';
import { Logo } from '../../../../resources/images';
import { User, Like, Basket, Phone, Close, MenuRight } from '../../../../ui/icons';

const { paymentAndDelivery, contacts, favourites, basket, home, profile } = ROUTES;
const { phoneNumber } = CONTACTS;

type Props = {
  menuIsOpened: boolean;
  toggleMenu: () => void;
};

export const Header = React.memo(({ menuIsOpened, toggleMenu }: Props) => {
  const { isAuthorized } = useProfile();
  const { productsCount } = useBasket();
  const theme = useTheme();

  const isUseOrder = useFeature(USE_ORDER);
  const enableFavoriteFeature = useFeature(USE_FAVORITES);

  const onClickHeader = () => {
    if (menuIsOpened) toggleMenu();
  };

  const onClickMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleMenu();
  };

  return (
    <StyledHeader menuIsOpened={menuIsOpened} onClick={onClickHeader}>
      <TopLine>
        <TopContainer>
          <NavGroup>
            <StyledLinkTop href={paymentAndDelivery.path}>{paymentAndDelivery.label}</StyledLinkTop>
            <StyledLinkTop href={contacts.path}>{contacts.label}</StyledLinkTop>
            <StyledLinkOuter href={`tel:${phoneNumber.value}`}>
              <Icon icon={Phone} size="xxl" mr="xs" />
              {phoneNumber.label}
            </StyledLinkOuter>
          </NavGroup>
        </TopContainer>
      </TopLine>
      <MiddleLine>
        <MiddleContainer>
          <Link href={home.path}>
            <Image src={Logo} alt="LAMPASTAR" />
          </Link>
          <NavGroupSearch>
            <CatalogButton onClick={onClickMenu}>
              {menuIsOpened ? <Icon icon={Close} mr="xs" /> : <Icon icon={MenuRight} mr="xs" />}
              <StyledCatalogText>Каталог</StyledCatalogText>
            </CatalogButton>
            <CatalogSearch />
          </NavGroupSearch>
          {isUseOrder && (
            <NavGroupAdaptive>
              {enableFavoriteFeature && (
                <StyledLinkMiddle href={favourites.path}>
                  <HeaderIcon>
                    <Like />
                  </HeaderIcon>
                  {favourites.label}
                </StyledLinkMiddle>
              )}
              {isAuthorized && (
                <StyledLinkMiddle href={profile.path}>
                  <HeaderIcon>
                    <User />
                  </HeaderIcon>
                  {profile.label}
                </StyledLinkMiddle>
              )}
              {!isAuthorized && (
                <StyledLinkMiddle href="/profile/login">
                  <HeaderIcon>
                    <User />
                  </HeaderIcon>
                  Вход
                </StyledLinkMiddle>
              )}
              <StyledLinkMiddle href={basket.path}>
                <HeaderIcon>
                  {!!productsCount && <HeaderIconCounter count={productsCount} />}
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
              <StyledLinkBottom key={ROUTES[page].path} href={ROUTES[page].path}>
                {ROUTES[page].label}
              </StyledLinkBottom>
            ))}
          </NavGroup>
        </BottomContainer>
      </BottomLine>
    </StyledHeader>
  );
});

Header.displayName = 'Header';
