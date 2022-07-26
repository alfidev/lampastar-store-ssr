import React from "react";
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
} from "./styled";
import { CONTACTS, MAIN_MENU, ROUTES } from "@common/constants";
import { PhoneIcon, LikeIcon, BasketIcon, MenuRightIcon } from "@ui/icons";
import { useTheme } from "styled-components";
import { Logo } from "@resources/images/";
import { Link } from "react-router-dom";
import { SearchInput } from "@ui/components";

const { paymentAndDelivery, contacts, favourites, basket, home } = ROUTES;
const { phoneNumber } = CONTACTS;

export const Header = React.memo(() => {
  const theme = useTheme();

  return (
    <StyledHeader>
      <TopLine>
        <TopContainer>
          <NavGroup>
            <StyledLinkTop to={paymentAndDelivery.path}>
              {paymentAndDelivery.label}
            </StyledLinkTop>
            <StyledLinkTop to={contacts.path}>{contacts.label}</StyledLinkTop>
            <StyledLinkOuter href={`tel:${phoneNumber.value}`}>
              <PhoneIcon
                style={{ marginRight: theme.indents.xs }}
                size={theme.sizes.xxl}
              />
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
            <CatalogButton>
              <MenuRightIcon
                size={theme.sizes.xl}
                style={{ marginRight: theme.indents.s }}
              />
              Каталог
            </CatalogButton>
            <SearchInput />
          </NavGroupSearch>
          <NavGroup>
            <StyledLinkMiddle to={favourites.path}>
              <LikeIcon
                size={theme.sizes.xxl}
                style={{ marginBottom: theme.indents.xxxs }}
              />
              {favourites.label}
            </StyledLinkMiddle>
            <StyledLinkMiddle to={basket.path}>
              <BasketIcon
                size={theme.sizes.xxl}
                style={{ marginBottom: theme.indents.xxxs }}
              />
              {basket.label}
            </StyledLinkMiddle>
          </NavGroup>
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
  );
});

Header.displayName = "Header";
