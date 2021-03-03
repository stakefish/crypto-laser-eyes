import React from "react"
import { Grid, Col, Row } from "react-styled-flexboxgrid"
import styled from "styled-components"

import { Laser } from "../helpers/types"

import Section from "../components/Section"
import Card from "../components/Card"

import Info from "./Info"
import Sandbox from "./Sandbox"

/**
 * Types
 */
interface Props {
  laser?: Laser
  portrait?: string
  onDrop: (files: File[]) => void
}

const CustomCol = styled.div`
  @media all and (min-width: 1025px) {
    height: 100%;
  }
`

const StyledSection = styled(Section)`
  @media all and (min-width: 1025px) {
    flex: 1;

    ${Grid}, ${Card}, ${Row} {
      height: 100%;
    }
  }
`

const Playground: React.FC<Props> = ({ laser, portrait, onDrop }: Props) => {
  return (
    <StyledSection>
      <Grid>
        <Card>
          <Row middle="sm">
            <Col xs={12} md={6}>
              <Info onDrop={onDrop} />
            </Col>
            <Col as={CustomCol} xs={12} md={6}>
              <Sandbox laser={laser} portrait={portrait} />
            </Col>
          </Row>
        </Card>
      </Grid>
    </StyledSection>
  )
}

export default Playground
