import styled from "styled-components";
import { rem } from "polished";

/**
 * Types
 */
export interface TextProps {}

const Text = styled.p<TextProps>`
  font-family: Helvetica;
  font-size: ${(props) => rem(props.theme.fontSize.lead)};
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 0;
  text-align: center;
  line-height: 1.3;
  margin-bottom: ${rem(56)};
`;

export default Text;
