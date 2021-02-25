import React from "react";
import useImage from "use-image";
import { head } from "ramda";
import { Image } from "react-konva";

import { scale } from "../helpers/utils";
import { FigureConfig } from "../helpers/types";

/**
 * Types
 */
interface Props extends FigureConfig {
  offsetX?: number;
  offsetY?: number;
  src?: string;
  scaled?: boolean;
}

const Figure: React.FC<Props> = ({ src, scaled, ...rest }: Props) => {
  const meta = useImage(src as string);
  const image = head(meta) as HTMLImageElement;
  const config = scaled ? scale(image) : rest;

  return <Image image={image} {...config} />;
};

export default Figure;
