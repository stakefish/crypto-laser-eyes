import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface CardProps {}

const Card = styled.div<CardProps>`
  padding: ${rem(48)};
  border-radius: ${rem(40)};
  background: ${(props) => props.theme.colors.dark};

  @media all and (max-width: 580px) {
    padding: 15px 22px;
    border-radius: 16px;
  }
`

export default Card
