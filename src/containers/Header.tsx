import React from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { rem } from "polished";

import SvgIcon from "../components/SvgIcon";

/**
 * Types
 */
interface Props {}
interface LinkProps {
  href?: string;
  target?: string;
}

const Wrapper = styled.header`
  padding: ${rem(36)} 0 ${rem(28)};
  letter-spacing: 0;
  line-height: 1;
`;

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
`;

const Social = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 ${rem(5)};
  }

  a:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const SocialLink = styled.a<LinkProps>`
  margin: 0 ${rem(5)};
`;

const Header: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Grid>
        <Row middle="xs" between="xs">
          <Col>
            <Logo>
              <img src="images/logo.svg" alt="" />
              crypto<span>lazereyes</span>
            </Logo>
          </Col>
          <Col>
            <Social>
              <span>
                Powered by{" "}
                <a href="https://stake.fish/" target="_block">
                  stakefish
                </a>
              </span>
              <SocialLink href="https://twitter.com/stakefish" target="_block">
                <SvgIcon iconKey="twitter" />
              </SocialLink>
              <SocialLink href="https://t.me/stakefish" target="_block">
                <SvgIcon iconKey="telegram" />
              </SocialLink>
              <SocialLink
                href="https://instagram.com/stakedotfish"
                target="_block"
              >
                <SvgIcon iconKey="instagram" />
              </SocialLink>
              <span>
                &{" "}
                <a href="https://www.f2pool.com/" target="_block">
                  f2pool
                </a>
              </span>
              <SocialLink
                href="https://twitter.com/f2pool_official"
                target="_block"
              >
                <SvgIcon iconKey="twitter" />
              </SocialLink>
            </Social>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  );
};

export default Header;
