import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface MainProps {}

const Main = styled.main<MainProps>`
  padding-bottom: ${rem(65)};

  @media all and (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`

export default Main
