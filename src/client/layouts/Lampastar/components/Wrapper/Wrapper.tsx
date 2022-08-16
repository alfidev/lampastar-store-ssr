import React from "react";
import { Outlet } from "react-router-dom";

import { GlobalStyle } from "../Theme/styled";
import { Header } from "../Header";
import { ThemeProvider } from "styled-components";
import { LIGHT_THEME, GRID_THEME } from "../../themes";
import { Footer } from "../Footer";
import { ContentWrapper } from "../ComponentWrapper";
import { GridThemeProvider } from "styled-bootstrap-grid";

export const Wrapper = () => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyle
        backgroundColor={LIGHT_THEME.color.background.main}
        htmlColor={LIGHT_THEME.color.background.secondary}
        textColor={LIGHT_THEME.color.text.primary}
      />
      <GridThemeProvider gridTheme={GRID_THEME}>
        <>
          <Header />
          <main>
            <ContentWrapper>
              <Outlet />
            </ContentWrapper>
          </main>
          <Footer />
        </>
      </GridThemeProvider>
    </ThemeProvider>
  );
};
