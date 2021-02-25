import { createGlobalStyle } from "styled-components";
import { normalize, rem } from "polished";

export const GlobalStyles = createGlobalStyle`
  ${normalize()};

  @font-face {
    font-family: "Monument";
    src:local("MonumentExtended"),
    url("fonts/MonumentExtended-Regular.otf"),
    url("fonts/MonumentExtended-Regular.woff"),
    url("fonts/MonumentExtended-Regular.woff2");
    font-weight:400;
    font-display:swap;
  }

  @font-face {
    font-family: "Monument";
    src:local("MonumentExtended"),
    url("fonts/MonumentExtended-Ultrabold.otf"),
    url("fonts/MonumentExtended-Ultrabold.woff"),
    url("fonts/MonumentExtended-Ultrabold.woff2");
    font-weight:800;
    font-display:swap;
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
  }
`;
