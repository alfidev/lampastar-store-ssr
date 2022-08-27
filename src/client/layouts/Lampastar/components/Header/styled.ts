import styled, { css } from 'styled-components';
import { ContentWrapper } from '../ComponentWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@ui/components';
import { media } from 'styled-bootstrap-grid';
import { CloseIcon, MenuRightIcon } from '@ui/icons';

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

export const StyledHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.indents.xxl};
  box-shadow: 0 0 10px ${({ theme }) => theme.color.background.secondaryHover};
`;

export const TopLine = styled.div`
  ${media.xs`
    display: none;
  `};
  background: ${({ theme }) => theme.color.background.secondary};
  height: 30px;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const MiddleLine = styled.div`
  background: ${({ theme }) => theme.color.background.primary};
  padding: ${({ theme }) => theme.indents.xs} 0;
  ${({ theme }) => media.md`
    height: 80px;
    padding: ${theme.indents.none}
  `};
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
  ${media.md`
    flex-direction: row;
  `};
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
  ${media.md`
    display: flex;
  `};
`;

export const NavGroupSearch = styled(NavGroup)`
  flex-grow: 1;
  width: 100%;
  ${({ theme }) => media.md`
    height: 80px;
    max-width: 630px;
    margin: 0 ${theme.indents.xxl};
  `};
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
  ${({ theme }) => media.sm`
    padding: 0 ${theme.indents.xl}
  `};
`;

export const CatalogButton = styled(Button)`
  margin-right: ${({ theme }) => theme.indents.xs};
  padding: 0 ${({ theme }) => theme.indents.xl};
  ${({ theme }) => media.xs`
    padding: ${theme.indents.s};
  `};

  ${MenuRightIcon}, ${CloseIcon} {
    font-size: ${({ theme }) => theme.sizes.xxxl};
    ${({ theme }) => media.sm`
      margin-right: ${theme.indents.s};
      font-size: ${theme.sizes.xl};
    `}
  }
`;

export const StyledCatalogText = styled.span`
  ${media.xs`
    display: none;
  `};
`;

export const CatalogMenuModal = styled.div`
  position: absolute;
  top: 151px;
  bottom: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.menu};
  background: ${({ theme }) => theme.color.opacity.modal};
`;

export const CatalogMenuWrapper = styled.div`
  padding: ${({ theme }) => theme.indents.xxl} 0;
  background: ${({ theme }) => theme.color.background.primary};
`;
