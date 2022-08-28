import styled, { css } from 'styled-components';
import { ContentWrapper } from '../ComponentWrapper';
import { Link } from 'react-router-dom';
import { ButtonContained } from '@ui/components';
import { CloseIcon, MenuRightIcon } from '@ui/icons';
import { adaptive } from '@ui/components/Adaptive';

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
  margin-bottom: ${({ theme }) => theme.indents.xxl};
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

  ${MenuRightIcon}, ${CloseIcon} {
    font-size: ${({ theme }) => theme.sizes.xxxl};
    ${adaptive.minWidth.tablet} {
      margin-right: ${({ theme }) => theme.indents.s};
      font-size: ${({ theme }) => theme.sizes.xl};
    }
  }
`;

export const StyledCatalogText = styled.span`
  ${adaptive.maxWidth.mobile} {
    display: none;
  }
`;
