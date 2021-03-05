import React from "react"
import { isMobile } from "react-device-detect"
import { Grid, Row, Col } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"

import Social from "./Social"

/**
 * Types
 */
interface Props {}

const Wrapper = styled.header`
  padding: ${rem(36)} 0 ${rem(28)};
  letter-spacing: 0;
  line-height: 1;

  @media all and (max-width: 580px) {
    padding: 12px 0;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: ${(props) => rem(props.theme.fontSize.base)};
  font-family: ${(props) => props.theme.font.headings};
  font-weight: ${(props) => props.theme.fontWeight.extrabold};

  img {
    margin-right: ${rem(18)};
  }

  span {
    font-weight: ${(props) => props.theme.fontWeight.base};
  }

  @media all and (max-width: 580px) {
    font-size: 10px;

    img {
      width: 16px;
    }
  }
`

const Header: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Grid>
        <Row middle="xs" center="xs" between="sm">
          <Col>
            <Logo>
              <img src="images/logo.svg" alt="" />
              crypto<span>lasereyes</span>
            </Logo>
          </Col>

          {!isMobile && (
            <Col>
              <Social />
            </Col>
          )}
        </Row>
      </Grid>
    </Wrapper>
  )
}

export default Header
