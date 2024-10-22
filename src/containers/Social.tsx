import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import SvgIcon from "../components/SvgIcon"
import Dropdown from "../components/Dropdown"

/**
 * Types
 */
interface Props {}
interface LinkProps {
  href?: string
  target?: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.gray};

  span {
    margin: 0 ${rem(5)};
  }

  a {
    color: inherit;

    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media all and (max-width: 915px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`

const SocialLink = styled.a<LinkProps>`
  margin: 0 ${rem(5)};
`

const Social: React.FC<Props> = () => {
  return (
    <Wrapper>
      <span>
        {"Powered by "}
        <a href="https://stake.fish/" target="_blank" rel="noreferrer">
          stakefish
        </a>
        {" & "}
        <a href="https://www.f2pool.com/" target="_blank" rel="noreferrer">
          f2pool
        </a>
      </span>
      <Dropdown
        title={<SvgIcon iconKey="twitter" />}
        data={[
          { name: "f2pool", url: "https://twitter.com/f2pool_official" },
          { name: "stakefish", url: "https://twitter.com/stakefish" },
        ]}
      />
      <SocialLink href="https://t.me/stakefish" target="_blank" rel="noreferrer">
        <SvgIcon iconKey="telegram" />
      </SocialLink>
      <SocialLink href="https://instagram.com/stakedotfish" target="_blank" rel="noreferrer">
        <SvgIcon iconKey="instagram" />
      </SocialLink>
      <SocialLink href="https://github.com/stakefish/crypto-laser-eyes" target="_blank" rel="noreferrer">
        <SvgIcon iconKey="github" />
      </SocialLink>
    </Wrapper>
  )
}

export default Social
