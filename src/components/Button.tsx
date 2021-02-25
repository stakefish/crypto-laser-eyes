import styled from "styled-components";
import { rem } from "polished";

/**
 * Types
 */
export interface ButtonProps {}

const Button = styled.button<ButtonProps>`
  padding: ${rem(16)} ${rem(36)};
  border-radius: ${rem(16)};
  letter-spacing: 0;
  line-height: 1;
  border: 0;
  font-size: ${(props) => rem(props.theme.fontSize.lead)};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.dark};
  transition: background-color ${(props) => props.theme.transition.base};
  appearance: none;
  cursor: pointer;
  outline: none !important;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export default Button;
