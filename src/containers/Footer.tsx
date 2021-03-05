import React from "react"
import { isMobile } from "react-device-detect"
import { Grid } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"

import Social from "./Social"

const Wrapper = styled.footer`
  padding: ${rem(12)} 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  letter-spacing: 0;
  line-height: 1;
  color: ${(props) => props.theme.colors.gray};
  text-align: center;

  &:empty {
    display: none;
  }
`

const Footer: React.FC = () => {
  return (
    <Wrapper>
      {isMobile && (
        <Grid>
          <Social />
        </Grid>
      )}
    </Wrapper>
  )
}

export default Footer
