import React from "react";

import { Laser } from "../helpers/types";

import Grid from "../components/Grid";

import Info from "./Info";
import Sandbox from "./Sandbox";

/**
 * Types
 */
interface Props {
  portrait?: string;
  laser?: Laser;
  onDrop: (files: File[]) => void;
}

const Playground: React.FC<Props> = ({ laser, portrait, onDrop }: Props) => {
  return (
    <Grid columns="1fr 1fr">
      <Info onDrop={onDrop} />
      <Sandbox laser={laser} portrait={portrait} />
    </Grid>
  );
};

export default Playground;
