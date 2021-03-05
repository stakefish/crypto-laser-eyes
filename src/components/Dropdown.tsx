import React from "react"
import styled from "styled-components"
import { rem, rgba } from "polished"

/**
 * Types
 */
type data = {
  url: string
  name: string
}

export interface DropdownProps {
  title: JSX.Element | JSX.Element[] | string
  data: data[]
}

const Menu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  padding-top: ${rem(8)};
  transition: all ${(props) => props.theme.transition.base};
  color: ${(props) => props.theme.colors.gray};

  &:hover {
    opacity: 1;
    visibility: visible;
  }

  @media all and (max-width: 767px) {
    top: auto;
    bottom: 100%;
  }
`

const Control = styled.div`
  transition: color ${(props) => props.theme.transition.base};
  cursor: pointer;

  &:active,
  &:hover {
    color: ${(props) => props.theme.colors.white};

    ~ ${Menu} {
      opacity: 1;
      visibility: visible;
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  margin: 0 ${rem(5)};

  &:hover ${Control} {
    color: ${(props) => props.theme.colors.white};
  }
`

const Inner = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${rem(8)};
  border-radius: 16px;
  background-color: #fc7358;

  li {
    display: block;
  }

  a {
    display: block;
    padding: ${rem(7)} ${rem(12)};
    border-radius: ${rem(8)};
    color: ${(props) => props.theme.colors.white} !important;

    &:hover {
      background-color: ${rgba("#000", 0.08)};
    }
  }

  @media all and (max-width: 580px) {
    border-radius: 8px;
  }
`

const Dropdown: React.FC<DropdownProps> = ({ title, data, ...props }: DropdownProps) => {
  return (
    <Wrapper {...props}>
      <Control>{title}</Control>
      <Menu>
        <Inner>
          {data.map((meta: any) => (
            <li key={meta.name}>
              <a href={meta.url} target="_blank" rel="noreferrer">
                {meta.name}
              </a>
            </li>
          ))}
        </Inner>
      </Menu>
    </Wrapper>
  )
}

export default Dropdown
