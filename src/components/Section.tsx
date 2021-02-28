import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface SectionProps {}

const Section = styled.section<SectionProps>`
  position: relative;
  margin-bottom: ${rem(5)};
`

export default Section
