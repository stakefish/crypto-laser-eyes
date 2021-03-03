import React from "react"

import { Laser } from "../helpers/types"

import Variant from "../components/Variant"

/**
 * Types
 */
interface Props {
  onClick: (laser: Laser) => void
  title: string
  image: string
  active?: boolean
}

const LaserPreview: React.FC<Props> = ({ onClick, title, image }) => {
  return (
    <Variant
      key={title}
      onClick={() => onClick}
      image={image}
      // TODO: active
    ></Variant>
  )
}

export default LaserPreview
