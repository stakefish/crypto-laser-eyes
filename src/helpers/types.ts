export enum Laser {
  Red,
  Yellow,
}

export interface LaserMeta {
  src: string;
  name: string;
}

export interface FigureConfig {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}
