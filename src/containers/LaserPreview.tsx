import React from "react";

import { Laser } from "../helpers/types";

import Variant from "../components/Variant";

/**
 * Types
 */
interface Props {
  onClick: (laser: Laser) => void;
  title: string;
  image: string;
}

const LaserPreview: React.FC<Props> = ({ onClick, title, image }) => {
  return (
    <Variant key={title} onClick={() => onClick} image={image}>
      <span>{title}</span>
    </Variant>
  );
};

export default LaserPreview;
