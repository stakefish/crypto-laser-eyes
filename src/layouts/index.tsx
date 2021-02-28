import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme";
import { GlobalStyles } from "./global-styles";

/**
 * Types
 */
interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
