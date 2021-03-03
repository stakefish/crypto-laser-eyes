import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"
import styled from "styled-components"

import { Laser } from "../helpers/types"
import { LASERS } from "../helpers/const"

import Variant from "../components/Variant"

import Card from "../components/Card"
import Section from "../components/Section"

/**
 * Types
 */
interface Props {
  onClick: (laser: Laser) => void
}

const StyledCol = styled.div`
  flex: 0 0 25%;
  margin-bottom: 20px;

  @media all and (min-width: 768px) {
    flex: 1 0 auto;
    margin-bottom: 0;
  }
`

const Lasers: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <Section>
      <Grid>
        <Card>
          <Row>
            {Array.from(LASERS).map(([laser, meta]) => (
              <Col as={StyledCol} key={meta.name}>
                <Variant title={meta.name} image={meta.src} onClick={() => onClick(laser)} />
              </Col>
            ))}
          </Row>
        </Card>
      </Grid>
    </Section>
  )
}

export default Lasers
