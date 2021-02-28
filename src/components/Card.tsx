import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface CardProps {}

const Card = styled.div<CardProps>`
  background: ${(props) => props.theme.colors.dark};
  padding: ${rem(48)};
  border-radius: ${rem(40)};
`

export default Card
