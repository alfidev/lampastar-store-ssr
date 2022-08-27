import styled from 'styled-components';
import { breakpoints, BreakpointsType } from '../../constants';

export const adaptive = {
  minWidth: {
    mobile: `@media screen and (min-width: ${breakpoints.mobile}px)`,
    tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
    desktopS: `@media screen and (min-width: ${breakpoints.desktopS}px)`,
    desktopM: `@media screen and (min-width: ${breakpoints.desktopM}px)`,
    desktopL: `@media screen and (min-width: ${breakpoints.desktopL}px)`,
  },
  maxWidth: {
    mobile: `@media screen and (max-width: ${breakpoints.tablet - 0.05}px)`,
    tablet: `@media screen and (max-width: ${breakpoints.desktopS - 0.05}px)`,
    desktopS: `@media screen and (max-width: ${breakpoints.desktopM - 0.05}px)`,
    desktopM: `@media screen and (max-width: ${breakpoints.desktopL - 0.05}px)`,
  },
};

export const Container = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div<Partial<BreakpointsType>>`
  padding: 0 15px;
  min-width: ${({ mobile }) => (mobile ? `${8.33333333 * mobile}%` : '100%')};
  max-width: ${({ mobile }) => (mobile ? `${8.33333333 * mobile}%` : '100%')};

  ${({ tablet }) =>
    tablet
      ? `
    ${adaptive.minWidth.tablet} {
      min-width: ${8.33333333 * tablet}%;
      max-width: ${8.33333333 * tablet}%;
    }
  `
      : ''};

  ${({ desktopS }) =>
    desktopS
      ? `
    ${adaptive.minWidth.desktopS} {
      min-width: ${8.33333333 * desktopS}%;
      max-width: ${8.33333333 * desktopS}%;
    }
  `
      : ''};

  ${({ desktopM }) =>
    desktopM
      ? `
    ${adaptive.minWidth.desktopM} {
      min-width: ${8.33333333 * desktopM}%;
      max-width: ${8.33333333 * desktopM}%;
    }
  `
      : ''};

  ${({ desktopL }) =>
    desktopL
      ? `
    ${adaptive.minWidth.desktopL} {
      min-width: ${8.33333333 * desktopL}%;
      max-width: ${8.33333333 * desktopL}%;
    }
  `
      : ''};
`;
