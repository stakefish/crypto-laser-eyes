import styled, { css } from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface VariantProps {
  image?: string
  active?: string
}

const Variant = styled.div<VariantProps>`
  background: ${(props) => props.theme.colors.black} url(${(props) => props.image}) center / cover;
  padding: ${rem(20)};
  margin-bottom: ${rem(40)};
  border-radius: ${rem(32)};
  width: ${rem(138)};
  height: ${rem(138)};
  position: relative;
  transition: box-shadow ${(props) => props.theme.transition.base};
  cursor: pointer;

  span {
    margin-top: ${rem(14)};
    padding: 0 ${rem(14)};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    text-align: center;
  }

  &:hover {
    box-shadow: inset 0 0 0 5px rgba(252, 114, 87, 0.24);
  }

  ${(props) =>
    props.active &&
    css`
      &:before {
        box-shadow: inset 0 0 0 5px rgba(252, 114, 87, 0.24), 0 0 0 2px #fc7459;
      }
    `}
`

export default Variant
