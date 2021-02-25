import { Laser, LaserMeta } from "./types";

export const LASERS = new Map<Laser, LaserMeta>([
  [Laser.Red, { src: "red-src", name: "red-name" }],
  [Laser.Blue, { src: "blue-src", name: "blue-name" }],
  [Laser.Green, { src: "green-src", name: "green-name" }],
]);

export const STAGE_CONFIG = {
  width: 670,
  height: 630,
};

export const SCALE_FACTOR = 2;
