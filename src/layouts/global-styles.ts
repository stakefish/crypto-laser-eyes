import styled, { createGlobalStyle } from "styled-components";
import { normalize, rem } from "polished";

export const GlobalStyles = createGlobalStyle`
  ${normalize()};

  html {
    @media all and (max-width: 1040px) {
      font-size: 14px
    }

    @media all and (max-width: 580px) {
      font-size: 11px
    }
  }

  body {
    position: relative;
    min-height: 100vh;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    letter-spacing: normal;
    font-size: ${(props) => rem(props.theme.fontSize.base)};
    font-family: ${(props) => props.theme.font.base};
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.secondary};
    direction: ltr;
    overscroll-behavior: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

  }

  h1, h2, h3, h4, h5 {
    margin-top: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all ${(props) => props.theme.transition.base};
  }

  p {
    margin-top: 0;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const FluidGrid = styled.div`
  @media all and (min-width: 768px) {
    padding-left: 8% !important;
    padding-right: 8% !important;
  }
`