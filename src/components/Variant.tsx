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
  background-color: ${(props) => props.theme.colors.black};
  padding: ${rem(20)};
  border-radius: ${rem(32)};
  width: 100%;
  height: 0;
  padding-bottom: 85%;
  position: relative;
  transition: box-shadow ${(props) => props.theme.transition.base};
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.image}) center / cover;
    transition: transform 2s ease;
  }

  &:hover {
    box-shadow: inset 0 0 0 5px rgba(119, 123, 132, 0.24), 0 0 0 2px #777b84;

    &:before {
      transform: scale(1.15) rotate(10deg);
    }
  }

  ${(props) =>
    props.active &&
    css`
      &:before {
        box-shadow: inset 0 0 0 5px rgba(252, 114, 87, 0.24), 0 0 0 2px #fc7459;
      }
    `}
`

export default Laser
