import { Laser, LaserMeta } from "./types"

import gold from "../static/light-hit-01.png"
import coral from "../static/light-hit-02.png"
import rust from "../static/light-hit-03.png"
import ruby from "../static/light-hit-04.png"
import rose from "../static/light-hit-05.png"
import jade from "../static/light-hit-06.png"
import emerald from "../static/light-hit-07.png"

export const LASERS = new Map<Laser, LaserMeta>([
  [Laser.Gold, { src: gold, name: "gold" }],
  [Laser.Coral, { src: coral, name: "coral" }],
  [Laser.Rust, { src: rust, name: "rust" }],
  [Laser.Ruby, { src: ruby, name: "ruby" }],
  [Laser.Rose, { src: rose, name: "rose" }],
  [Laser.Jade, { src: jade, name: "jade" }],
  [Laser.Emerald, { src: emerald, name: "emerald" }],
])

export const STAGE_CONFIG = {
  width: 540,
  height: 415,
}

export const LASER_SIZE = 150
export const SCALE_FACTOR = 2
