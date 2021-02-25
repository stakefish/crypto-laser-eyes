import React, { useEffect } from "react";
import { IPoint } from "face-api.js";
import { Stage, Circle, Layer } from "react-konva";

import { models, detect } from "../helpers/utils";
import { useSetState } from "../helpers/hooks";

import { Laser } from "../helpers/types";
import { STAGE_CONFIG } from "../helpers/const";

import Figure from "../components/Figure";

/**
 * Types
 */
interface Props {
  laser?: Laser;
  portrait?: string;
}

interface State {
  left?: IPoint;
  right?: IPoint;
}

const Sandbox: React.FC<Props> = ({ laser, portrait }: Props) => {
  const [state, setState] = useSetState<State>({
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

  return (
    <>
      <button onClick={onClick}>detect</button>
      <Stage {...STAGE_CONFIG}>
        <Layer>
          {portrait ? <Figure scaled src={portrait} /> : null}

          {state?.left ? (
            <Circle draggable x={state?.left?.x} y={state?.left?.y} radius={10} fill="red" />
          ) : null}

          {state?.right ? (
            <Circle draggable x={state?.right?.x} y={state?.right?.y} radius={10} fill="red" />
          ) : null}
        </Layer>
      </Stage>
    </>
  );
};

export default Sandbox;
