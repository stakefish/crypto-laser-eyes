import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"

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

const Lasers: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <Section>
      <Grid>
        <Card>
          <Row>
            {Array.from(LASERS).map(([laser, meta]) => (
              <Col key={meta.name}>
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
