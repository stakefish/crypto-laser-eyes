import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface TextProps {}

const Text = styled.p<TextProps>`
  font-size: ${(props) => rem(props.theme.fontSize.lead)};
  font-size: 1.5vw;
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 0;
  text-align: center;
  line-height: 1.3;
  margin-bottom: ${rem(56)};

  @media all and (max-width: 580px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`

export default Text
