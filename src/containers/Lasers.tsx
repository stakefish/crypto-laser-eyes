import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"
import styled from "styled-components"

import { Laser } from "../helpers/types"
import { LASERS } from "../helpers/const"

import { FluidGrid } from "../layouts/global-styles"

import Variant from "../components/Variant"
import Card from "../components/Card"
import Section from "../components/Section"

/**
 * Types
 */
interface Props {
  onClick: (laser: Laser) => void
  activeLaser?: Laser
}

const StyledCol = styled.div`
  flex: 0 0 25%;

  @media all and (min-width: 992px) {
    flex: 1 0 auto;
  }
`

const StyledRow = styled.div`
  flex-wrap: nowrap;
  padding-bottom: 15px;
`

const Overflow = styled.div`
  padding: 4px;
  margin-bottom: -15px;

  @media all and (max-width: 991px) {
    overflow: auto;
  }
`

const Lasers: React.FC<Props> = ({ onClick, activeLaser }: Props) => {
  return (
    <Section>
      <Grid as={FluidGrid} fluid>
        <Card>
          <Overflow>
            <Row as={StyledRow}>
              {Array.from(LASERS).map(([laser, meta], i) => (
                <Col as={StyledCol} key={meta.name}>
                  <Variant
                    title={meta.name}
                    image={meta.src}
                    active={activeLaser === i}
                    onClick={() => onClick(laser)}
                  />
                </Col>
              ))}
            </Row>
          </Overflow>
        </Card>
      </Grid>
    </Section>
  )
}

export default Lasers
