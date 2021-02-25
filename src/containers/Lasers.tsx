import React from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

import { Laser } from "../helpers/types";
import { LASERS } from "../helpers/const";

import LaserPreview from "./LaserPreview";

import Card from "../components/Card";

/**
 * Types
 */
interface Props {
  onClick: (laser: Laser) => void;
}

const Lasers: React.FC<Props> = ({ onClick }) => {
  return (
    <Grid>
      <Card>
        <Row>
          {Array.from(LASERS).map(([laser, meta]) => (
            <Col>
              <LaserPreview
                key={meta.name}
                onClick={() => onClick(laser)}
                title={meta.name}
                image={meta.src}
              />
            </Col>
          ))}
        </Row>
      </Card>
    </Grid>
  );
};

export default Lasers;
