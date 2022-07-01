import styled, { css } from "styled-components";
import { ContentWrapper } from "../../styledComponents";
import { Link } from "react-router-dom";
import { Button } from "@ui/components";

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
  margin-bottom: ${({ theme }) => theme.indents.xl};
  box-shadow: 0 0 10px ${({ theme }) => theme.color.background.secondaryHover};
`;

export const TopLine = styled.div`
  background: ${({ theme }) => theme.color.background.secondary};
  height: 30px;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const MiddleLine = styled.div`
  background: ${({ theme }) => theme.color.background.primary};
  height: 80px;
`;

export const BottomLine = styled.div`
  background: ${({ theme }) => theme.color.background.primary};
  height: 40px;
  border-top: 1px solid ${({ theme }) => theme.color.background.main};
`;

export const TopContainer = styled(ContentWrapper)`
  justify-content: flex-end;
`;

export const MiddleContainer = styled(ContentWrapper)`
  justify-content: space-between;
  align-items: center;
`;

export const BottomContainer = styled(ContentWrapper)`
  justify-content: flex-start;
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavGroupSearch = styled(NavGroup)`
  flex-grow: 1;
  max-width: 630px;
  margin: 0 ${({ theme }) => theme.indents.xxl};
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
  padding: 0 ${({ theme }) => theme.indents.xl};
`;

export const CatalogButton = styled(Button)`
  margin-right: ${({ theme }) => theme.indents.xs};
  padding: 0 ${({ theme }) => theme.indents.xl};
`;
