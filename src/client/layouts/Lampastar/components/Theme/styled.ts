import { createGlobalStyle } from 'styled-components';

import RobotoThin from '@resources/fonts/Roboto-Thin.ttf';
import RobotoThinItalic from '@resources/fonts/Roboto-ThinItalic.ttf';
import RobotoLight from '@resources/fonts/Roboto-Light.ttf';
import RobotoLightItalic from '@resources/fonts/Roboto-LightItalic.ttf';
import RobotoRegular from '@resources/fonts/Roboto-Regular.ttf';
import RobotoMedium from '@resources/fonts/Roboto-Medium.ttf';
import RobotoMediumItalic from '@resources/fonts/Roboto-MediumItalic.ttf';
import RobotoBold from '@resources/fonts/Roboto-Bold.ttf';
import RobotoBoldItalic from '@resources/fonts/Roboto-BoldItalic.ttf';
import RobotoBlack from '@resources/fonts/Roboto-Black.ttf';
import RobotoBlackItalic from '@resources/fonts/Roboto-BlackItalic.ttf';

import LampastarFontSvg from '@resources/fonts/lampastar.svg';
import LampastarFontTtf from '@resources/fonts/lampastar.ttf';
import LampastarFontWoff from '@resources/fonts/lampastar.woff';

export const GlobalStyle = createGlobalStyle<{
  backgroundColor: string;
  htmlColor: string;
  textColor: string;
}>`
  @font-face {
    font-family: 'Roboto';
    font-weight: 100;
    font-style: normal;
    src: url(${RobotoThin}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 100;
    font-style: italic;
    src: url(${RobotoThinItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
    src: url(${RobotoLight}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 300;
    font-style: italic;
    src: url(${RobotoLightItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    src: url(${RobotoRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: normal;
    src: url(${RobotoMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: italic;
    src: url(${RobotoMediumItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-style: normal;
    src: url(${RobotoBold}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-style: italic;
    src: url(${RobotoBoldItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 900;
    font-style: normal;
    src: url(${RobotoBlack}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 900;
    font-style: italic;
    src: url(${RobotoBlackItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Lampastar';
    src: url(${LampastarFontWoff}) format('woff'),
      url(${LampastarFontTtf}) format('truetype'),
      url(${LampastarFontSvg}) format('svg');

    font-weight: normal;
    font-style: normal;
  }
  
  html {
    background: ${({ htmlColor }) => htmlColor};
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    position: relative;
    min-width: 360px;
    margin: 0;
    background: ${({ backgroundColor }) => backgroundColor};
    color: ${({ textColor }) => textColor};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    
    * {
      box-sizing: border-box;
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }
    
    div {
      cursor: default;
    }
  }
  
  input, textarea {
    font-family: 'Roboto', sans-serif;
  }
  
  input::placeholder, textarea::placeholder {
    font-family: 'Roboto', sans-serif;
  }
`;
