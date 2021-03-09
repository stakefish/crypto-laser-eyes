import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface MainProps {}

const Main = styled.main<MainProps>`
  padding-bottom: ${rem(40)};

  @media all and (max-width: 580px) {
    position: relative;
    padding-bottom: 120px;
    min-height: 100vh;
  }

  @media all and (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  @media all and (max-height: 920px) {
    min-height: 100vh;
    height: auto;
  }
`

export default Main
