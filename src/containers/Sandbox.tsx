import React, { useEffect } from "react"
import { values, isNil } from "ramda"
import { Stage, Layer } from "react-konva"
import { IPoint } from "face-api.js"
import styled from "styled-components"
import { rem } from "polished"

import { models, detect } from "../helpers/utils"
import { useSetState } from "../helpers/hooks"

import { Laser } from "../helpers/types"
import { LASERS, LASER_SIZE, STAGE_CONFIG } from "../helpers/const"

import Figure from "../components/Figure"

/**
 * Types
 */
interface Props {
  laser?: Laser
  portrait?: string
}

interface WrapperProps {
  preview?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  border-radius: ${rem(16)};
  background-color: ${(props) => props.theme.colors.black};
  background-image: url(${(props) => (props.preview ? "images/blank.png" : "none")});
  background-size: cover;
  background-position: center;
  display: inline-block;
  overflow: hidden;
  max-width: 100%;
`

const Sandbox: React.FC<Props> = ({ laser = Laser.Yellow, portrait }: Props) => {
  const [state, setState] = useSetState<{ [key: string]: IPoint | undefined }>({
    left: undefined,
    right: undefined,
  })

  useEffect(() => {
    models()
  }, [])

  const onClick = async () => {
    try {
      setState(await detect())
    } catch {}
  }

  const lasers = values(state)
  const src = LASERS?.get(laser)?.src

  return (
    <>
      <Wrapper preview={!portrait}>
        <Stage {...STAGE_CONFIG}>
          <Layer>
            {portrait ? <Figure scaled src={portrait} /> : null}

            {lasers.map((laser) => {
              if (isNil(laser)) {
                return null
              }
              return (
                <Figure
                  draggable
                  src={src}
                  key={laser?.x}
                  x={laser?.x}
                  y={laser?.y}
                  width={LASER_SIZE}
                  height={LASER_SIZE}
                />
              )
            })}
          </Layer>
        </Stage>
      </Wrapper>
      <button onClick={onClick}>detect</button>
    </>
  )
}

export default Sandbox
