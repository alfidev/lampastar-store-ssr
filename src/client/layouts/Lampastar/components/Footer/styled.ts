import styled, { css } from 'styled-components';
import { ContentWrapper } from '../ComponentWrapper';
import { ButtonContained, Input } from '@ui/components';
import { Logo } from '@resources/images';
import { adaptive } from '@ui/components/Adaptive';

const menuStyle = css`
  padding: 0;
  color: ${({ theme }) => theme.color.text.tertiary};
  margin-top: ${({ theme }) => theme.indents.m};
  ${({ theme }) => theme.typography.mini2};
`;

export const DynamicLineContent = styled(ContentWrapper)`
  position: relative;
  padding-top: 64px;
  padding-bottom: 64px;
  overflow: hidden;
`;

export const StyledFooter = styled.footer<{ menuIsOpened: boolean }>`
  ${adaptive.maxWidth.tablet} {
    display: ${({ menuIsOpened }) => (menuIsOpened ? 'none' : 'block')};
  }
  margin-top: ${({ theme }) => theme.indents.xxxxl};
`;

export const DynamicLine = styled.div`
  background: ${({ theme }) => theme.color.background.primary};
`;

export const InfoLine = styled.div`
  background: ${({ theme }) => theme.color.background.secondary};
  color: ${({ theme }) => theme.color.text.secondary};
  padding: 50px 0 32px 0;
`;

export const BackgroundMail = styled.div`
  position: absolute;
  top: -50px;
  left: 150px;
  height: 350px;
  width: 350px;
  overflow: hidden;
  transform: rotate(340deg);

  svg {
    fill: ${({ theme }) => theme.color.background.main};
  }
`;

export const SubscribeContainer = styled.div`
  position: relative;
  z-index: 1;
  flex-grow: 1;
`;

export const EmailContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  margin-top: ${({ theme }) => theme.indents.m};

  ${adaptive.minWidth.mobile} {
    display: block;
  }
`;

export const EmailInput = styled(Input)`
  //max-width: 370px;
`;

export const MobileInput = styled(Input)`
  //max-width: 370px;
`;

export const EmailSubmitButton = styled(ButtonContained)`
  margin-left: ${({ theme }) => theme.indents.xs};

  ${adaptive.maxWidth.mobile} {
    margin-left: ${({ theme }) => theme.indents.none};
    margin-top: ${({ theme }) => theme.indents.s};
    width: 100%;
  }
`;

export const MobileSubmitButton = styled(ButtonContained)`
  margin-left: ${({ theme }) => theme.indents.xl};
`;

export const BottomInfoContainer = styled.div`
  display: block;
  ${adaptive.maxWidth.desktopM} {
    display: flex;
  }
`;

export const FooterColumn = styled.div`
  //margin-right: 70px;
`;

export const FooterMenu = styled.ul`
  ${menuStyle};
  list-style-type: none;
`;

export const FooterMenuItem = styled.li`
  margin: ${({ theme }) => theme.indents.xs} 0;
`;

export const FooterLogo = styled(Logo)`
  .logo-text {
    fill: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const InfoContentWrapper = styled(ContentWrapper)`
  flex-direction: column;
`;

export const CopyrightContainer = styled.div`
  margin-top: 70px;
  ${({ theme }) => theme.typography.mini1}
  color: ${({ theme }) => theme.color.text.copyright}
`;

export const LeftGroup = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const RightGroup = styled.div`
  max-width: 370px;
`;

export const CallForm = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.indents.m};
`;

export const SocialBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.indents.xxxxl};
`;

export const SocialItem = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: ${({ theme }) => theme.indents.m};
  background: ${({ theme }) => theme.color.background.social};
  padding: ${({ theme }) => theme.indents.xs};
`;

export const FooterContactMenu = styled.ul`
  ${menuStyle};
`;

export const StyledLinkOuter = styled.a`
  display: flex;
  color: ${({ theme }) => theme.color.text.tertiary};
  margin: ${({ theme }) => theme.indents.xs} 0;

  i {
    color: ${({ theme }) => theme.color.text.secondary};
    margin-right: ${({ theme }) => theme.indents.xs};
    font-size: ${({ theme }) => theme.sizes.xxl};
  }
`;
