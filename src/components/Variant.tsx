import styled, { css } from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface VariantProps {
  image?: string
  active?: string
  onClick?: () => void
}

const Laser = styled.div<VariantProps>`
  background: ${(props) => props.theme.colors.black} url(${(props) => props.image}) center / cover;
  padding: ${rem(20)};
  border-radius: ${rem(32)};
  width: ${rem(138)};
  height: ${rem(138)};
  position: relative;
  transition: all ${(props) => props.theme.transition.base};
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;

  div {
    padding: ${rem(14)} ${rem(14)} 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    text-align: center;
    word-break: break-word;
  }

  span {
    border-radius: ${rem(8)};
    display: inline-flex;
    padding: ${rem(2)} ${rem(4)};
    transition: background-color ${(props) => props.theme.transition.base};
  }

  &:hover {
    box-shadow: inset 0 0 0 5px rgba(119, 123, 132, 0.24), 0 0 0 2px #777b84;
    color: ${(props) => props.theme.colors.white};
  }

  ${(props) =>
    props.active &&
    css`
      &:before {
        box-shadow: inset 0 0 0 5px rgba(252, 114, 87, 0.24), 0 0 0 2px #fc7459;
      }

      span {
        background-color: #fb7358;
      }
    `}
`

export default Laser
