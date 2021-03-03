import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface CardProps {}

const Card = styled.div<CardProps>`
  padding: ${rem(48)};
  padding: 4vh;
  border-radius: ${rem(40)};
  background: ${(props) => props.theme.colors.dark};
`

export default Card
