import React, { useEffect } from "react";
import { IPoint } from "face-api.js";
import { Stage, Layer } from "react-konva";

import { models, detect } from "../helpers/utils";
import { useSetState } from "../helpers/hooks";

import { Laser } from "../helpers/types";
import { LASERS, LASER_SIZE, SCALE_FACTOR, STAGE_CONFIG } from "../helpers/const";

import Figure from "../components/Figure";
import { isNil } from "ramda";

/**
 * Types
 */
interface Props {
  laser?: Laser;
  portrait?: string;
}

const Sandbox: React.FC<Props> = ({ laser = Laser.Yellow, portrait }: Props) => {
  const [state, setState] = useSetState<{ [key: string]: IPoint | undefined }>({
    left: undefined,
    right: undefined,
  });

  useEffect(() => {
    models();
  }, []);

  const onClick = async () => {
    try {
      setState(await detect());
    } catch {}
  };

  const src = LASERS?.get(laser)?.src;
  const lasers = Object.values(state);

  return (
    <>
      <button onClick={onClick}>detect</button>
      <Stage {...STAGE_CONFIG}>
        <Layer>
          {portrait ? <Figure scaled src={portrait} /> : null}

          {lasers.map((laser) => {
            if (isNil(laser)) {
              return null;
            }
            return (
              <Figure
                draggable
                src={src}
                key={laser?.x}
                width={LASER_SIZE}
                height={LASER_SIZE}
                x={laser?.x - LASER_SIZE / SCALE_FACTOR}
                y={laser?.y - LASER_SIZE / SCALE_FACTOR}
              />
            );
          })}
        </Layer>
      </Stage>
    </>
  );
};

export default Sandbox;
