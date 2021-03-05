import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface SectionProps {}

const Section = styled.section<SectionProps>`
  position: relative;
  margin-bottom: ${rem(5)};

  @media all and (max-width: 580px) {
    margin-bottom: 4px;
  }
`

export default Section
