import React from "react";

import { Laser } from "../helpers/types";
import { LASERS } from "../helpers/const";

import Button from "../components/Button";

/**
 * Types
 */
interface Props {
  onClick: (laser: Laser) => void;
}

const Lasers: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <>
      {Array.from(LASERS).map(([laser, meta]) => (
        <Button key={meta.name} onClick={() => onClick(laser)}>
          {meta.name}
          {meta.src}
        </Button>
      ))}
    </>
  );
};

export default Lasers;
