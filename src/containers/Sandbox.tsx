import React from "react";
import { Stage, Layer } from "react-konva";

import { Laser } from "../helpers/types";
import { STAGE_CONFIG } from "../helpers/const";

import Figure from "../components/Figure";

/**
 * Types
 */
interface Props {
  laser?: Laser;
  portrait?: string;
}

const Sandbox: React.FC<Props> = ({ laser, portrait }: Props) => {
  return (
    <Stage {...STAGE_CONFIG}>
      <Layer>{portrait ? <Figure scaled src={portrait} /> : null}</Layer>
    </Stage>
  );
};

export default Sandbox;
