import { isNil } from "ramda";

import { SCALE_FACTOR, STAGE_CONFIG } from "./const";

import { FigureConfig } from "./types";

export const scale = (image?: HTMLImageElement): FigureConfig | null => {
  if (isNil(image)) {
    return null;
  }

  const ratio = Math.min(STAGE_CONFIG.width / image.width, STAGE_CONFIG.height / image.height);
  const x = STAGE_CONFIG.width / SCALE_FACTOR - (image.width / SCALE_FACTOR) * ratio;
  const y = STAGE_CONFIG.height / SCALE_FACTOR - (image.height / SCALE_FACTOR) * ratio;

  const width = image.width * ratio;
  const height = image.height * ratio;

  return {
    x,
    y,
    width,
    height,
  };
};
