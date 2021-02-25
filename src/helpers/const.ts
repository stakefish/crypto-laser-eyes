import { Laser, LaserMeta } from "./types";

import yellow from "../static/light-hit-1.png";

export const LASERS = new Map<Laser, LaserMeta>([[Laser.Yellow, { src: yellow, name: "yellow" }]]);

export const STAGE_CONFIG = {
  width: 670,
  height: 630,
};

export const LASER_SIZE = 150;
export const SCALE_FACTOR = 2;
