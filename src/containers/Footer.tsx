import React from "react"
import { isMobile } from "react-device-detect"
import { Grid } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"

import Social from "./Social"
import { FluidGrid } from "../layouts/global-styles"

const Wrapper = styled.footer`
  padding: ${rem(12)} 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  letter-spacing: 0;
  line-height: 1;
  color: ${(props) => props.theme.colors.gray};
  text-align: left;

  &:empty {
    display: none;
  }

  @media all and (min-width: 581px) {
    position: relative;
  }
`

const Disclaimer = styled.div`
  font-size: ${rem(14)};
  line-height: normal;
  opacity: 0.6;
`

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Grid as={FluidGrid} fluid>
        {isMobile && <Social />}
        <Disclaimer>
          f2pool & stakefish take privacy very seriously. The “CRYPTOLASEREYES” app is provided for fun and convenience.
          We never store photos, and do not transmit any data besides an anonymous identifier containing no personal
          information. We have also made the source code available in the event you would like to review it.
        </Disclaimer>
      </Grid>
    </Wrapper>
  )
}

export default Footer
