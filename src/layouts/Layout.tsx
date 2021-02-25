import React from "react";
import { ThemeProvider } from "styled-components";

/**
 * Types
 */
interface Props {
  children: JSX.Element[] | JSX.Element;
}

/**
 * Theme
 */
const theme = {
  font: {},
  palette: {},
  spacing: {},
};

const Root: React.FC<Props> = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Root;
