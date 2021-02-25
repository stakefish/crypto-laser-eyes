import React from "react";
import { Grid } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { rem } from "polished";

<<<<<<< HEAD
const Header: React.FC = () => {
  return <>Header</>;
=======
/**
 * Types
 */
interface Props {}
interface WrapperProps {}

const Wrapper = styled.header<WrapperProps>`
  padding: ${rem(36)} 0;
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
  font-size: ${(props) => rem(props.theme.fontSize.base)};
  font-family: ${(props) => props.theme.font.headings};
  font-weight: ${(props) => props.theme.fontWeight.extrabold};
`;

const Header: React.FC<Props> = ({}: Props) => {
  return (
    <Wrapper>
      <Grid>LazerEyes App</Grid>
    </Wrapper>
  );
>>>>>>> add general styles and layout
};

export default Header;
