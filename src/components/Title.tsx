import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface TitleProps {}

const Title = styled.h1<TitleProps>`
  margin-bottom: ${rem(15)};
  letter-spacing: 0;
  line-height: 0.95;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => rem(props.theme.fontSize.h1)};
  font-family: ${(props) => props.theme.font.headings};
  font-weight: ${(props) => props.theme.fontWeight.extrabold};

  @media all and (max-width: 767px) {
    font-size: ${(props) => rem(props.theme.fontSize.h2)};
  }

  @media all and (max-width: 580px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 4px;
  }
`

export default Title
