import React from "react"
import styled, { css } from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export interface SvgIconProps {
  iconKey: string
}

const Icon = styled.i<SvgIconProps>`
  font-family: "icons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  font-size: ${rem(24)};

  ${(props) =>
    props.iconKey === "twitter" &&
    css`
      &:before {
        content: "\\e900";
      }
    `}

  ${(props) =>
    props.iconKey === "telegram" &&
    css`
      &:before {
        content: "\\e901";
      }
    `}

  ${(props) =>
    props.iconKey === "instagram" &&
    css`
      &:before {
        content: "\\e902";
      }
    `}
`

const SvgIcon: React.FC<SvgIconProps> = ({ iconKey, ...props }: SvgIconProps) => {
  return <Icon iconKey={iconKey} {...props} />
}

export default SvgIcon
