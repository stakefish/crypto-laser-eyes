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

  @media all and (min-width: 767px) {
    padding: ${rem(30)};
  }
`

export default Card
