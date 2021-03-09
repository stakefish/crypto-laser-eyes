export const GlobalFonts = `
  @font-face {
    font-family: "Monument";
    src: local("MonumentExtended"), url("fonts/MonumentExtended-Regular.otf"), url("fonts/MonumentExtended-Regular.woff"),
      url("fonts/MonumentExtended-Regular.woff2");
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Monument";
    src: local("MonumentExtended"), url("fonts/MonumentExtended-Ultrabold.otf"),
      url("fonts/MonumentExtended-Ultrabold.woff"), url("fonts/MonumentExtended-Ultrabold.woff2");
    font-weight: 800;
    font-display: swap;
  }

  @font-face {
    font-family: "icons";
    src: url("fonts/icons.eot?xwvsp0");
    src: url("fonts/icons.eot?xwvsp0#iefix") format("embedded-opentype"), url("fonts/icons.ttf?xwvsp0") format("truetype"),
      url("fonts/icons.woff?xwvsp0") format("woff"), url("fonts/icons.svg?xwvsp0#icons") format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
`
