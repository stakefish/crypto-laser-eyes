import React from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import { Laser } from "../helpers/types";

import Section from "../components/Section";
import Card from "../components/Card";

import Info from "./Info";
import Sandbox from "./Sandbox";

/**
 * Types
 */
interface Props {
  laser?: Laser;
  portrait?: string;
  onDrop: (files: File[]) => void;
}

const Playground: React.FC<Props> = ({ laser, portrait, onDrop }: Props) => {
  return (
    <Section>
      <Grid>
        <Card>
          <Row middle="sm">
            <Col xs={12} md={6}>
              <Info onDrop={onDrop} />
            </Col>
            <Col xs={12} md={6}>
              <Sandbox laser={laser} portrait={portrait} />
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
  );
};

export default Playground;
