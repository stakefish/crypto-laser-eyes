import React from "react";
import { ThemeProvider, Theme } from "styled-components";

/**
 * Types
 */
interface Props {
  children: JSX.Element[] | JSX.Element;
}

/**
 * Theme
 */
const theme: Theme = {
  font: {},
  colors: {},
  spacing: {},
};

const Root: React.FC<Props> = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Root;
