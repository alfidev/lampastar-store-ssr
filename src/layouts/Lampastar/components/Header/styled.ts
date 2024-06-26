import Link from 'next/link';
import styled, { css } from 'styled-components';

import { ButtonContained } from '../../../../ui/components';
import { adaptive } from '../../../../ui/components/Adaptive';
import { ContentWrapper } from '../ComponentWrapper';

const getLinkStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 ${({ theme }) => theme.indents.xl};

  :first-child {
    padding-left: 0;
  }

  :last-child {
    padding-right: 0;
  }
`;

export const StyledHeader = styled.header<{ menuIsOpened: boolean }>`
  ${adaptive.maxWidth.tablet} {
    display: ${({ menuIsOpened }) => (menuIsOpened ? 'none' : 'block')};
  }
  box-shadow: 0 0 10px ${({ theme }) => theme.color.background.secondaryHover};
`;

export const TopLine = styled.div`
  ${adaptive.maxWidth.mobile} {
    display: none;
  }
  background: ${({ theme }) => theme.color.background.secondary};
  height: 30px;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const MiddleLine = styled.div`
  background: ${({ theme }) => theme.color.background.primary};
  padding: ${({ theme }) => theme.indents.xs} 0;
  ${adaptive.minWidth.tablet} {
    height: 80px;
    padding: ${({ theme }) => theme.indents.none};
  }
`;

export const BottomLine = styled.div`
  background: ${({ theme }) => theme.color.background.primary};
  height: 40px;
  border-top: 1px solid ${({ theme }) => theme.color.background.main};
`;

export const TopContainer = styled(ContentWrapper)`
  display: flex;
  justify-content: flex-end;
`;

export const MiddleContainer = styled(ContentWrapper)`
  ${adaptive.minWidth.tablet} {
    flex-direction: row;
  }
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomContainer = styled(ContentWrapper)`
  display: flex;
  justify-content: flex-start;
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavGroupAdaptive = styled(NavGroup)`
  display: none;
  ${adaptive.minWidth.tablet} {
    display: flex;
  }
`;

export const NavGroupSearch = styled(NavGroup)`
  flex-grow: 1;
  width: 100%;
  ${adaptive.minWidth.tablet} {
    height: 80px;
    max-width: 630px;
    margin: 0 ${({ theme }) => theme.indents.xxl};
  }
`;

const StyledLink = styled(Link)`
  ${getLinkStyle};
`;

export const StyledLinkOuter = styled.a`
  ${getLinkStyle};
  padding: 0 ${({ theme }) => theme.indents.l};
`;

export const StyledLinkTop = styled(StyledLink)`
  padding: 0 ${({ theme }) => theme.indents.l};
`;

export const StyledLinkMiddle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.indents.xs};
  border-radius: ${({ theme }) => theme.radius.xs};
  height: 55px;
  min-width: 72px;

  :hover {
    background: ${({ theme }) => theme.color.background.secondaryHover};
  }
`;

export const StyledLinkBottom = styled(StyledLink)`
  white-space: nowrap;
  padding: 0 ${({ theme }) => theme.indents.xs};
  ${adaptive.minWidth.tablet} {
    padding: 0 ${({ theme }) => theme.indents.xl};
  }
`;

export const CatalogButton = styled(ButtonContained)`
  margin-right: ${({ theme }) => theme.indents.xs};
  padding: 0 ${({ theme }) => theme.indents.xl};
  ${adaptive.maxWidth.mobile} {
    padding: ${({ theme }) => theme.indents.s};
  }
`;

export const StyledCatalogText = styled.span`
  ${adaptive.maxWidth.mobile} {
    display: none;
  }
`;

export const HeaderIcon = styled.div`
  position: relative;
  width: ${({ theme }) => theme.sizes.xxxl};
  height: ${({ theme }) => theme.sizes.xxxl};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderIconCounter = styled.div<{ count?: number }>`
  position: absolute;
  background: ${({ theme }) => theme.color.background.primary};
  top: -5px;
  left: 50%;
  height: 18px;
  padding: 2px;
  border-radius: 9px;

  :after {
    ${({ theme }) => theme.typography.mini0};
    content: '${({ count }) => count}';
    color: ${({ theme }) => theme.color.text.secondary};
    background: ${({ theme }) => theme.color.background.contrastLine};
    display: flex;
    justify-content: center;
    padding: 0 2px;
    height: 14px;
    min-width: 14px;
    border-radius: 7px;
  }
`;
