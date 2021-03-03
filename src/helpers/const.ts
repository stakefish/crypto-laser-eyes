import { Laser, LaserMeta } from "./types";

import red from "../static/light-hit-2.png";
import yellow from "../static/light-hit-1.png";

export const LASERS = new Map<Laser, LaserMeta>([
  [Laser.Red, { src: red, name: "red" }],
  [Laser.Yellow, { src: yellow, name: "yellow" }],
]);

export const STAGE_CONFIG = {
  width: 554,
  height: 450,
};

export const LASER_SIZE = 150;
export const SCALE_FACTOR = 2;
