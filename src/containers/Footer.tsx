import React from "react";
import { Grid } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { rem } from "polished";

/**
 * Types
 */
interface Props {}
interface WrapperProps {}

const Wrapper = styled.header<WrapperProps>`
  padding: ${rem(36)} 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  letter-spacing: 0;
  line-height: 1;
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
`;

const Footer: React.FC<Props> = ({}: Props) => {
  return (
    <Wrapper>
      <Grid>Powered by stakefish & f2pool</Grid>
    </Wrapper>
  );
};

export default Footer;
