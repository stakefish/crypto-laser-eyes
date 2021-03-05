import { isNil } from "ramda"
import { IPoint, nets, Point } from "face-api.js"
import { detectSingleFace, TinyFaceDetectorOptions } from "face-api.js"

import { LASER_SIZE, SCALE_FACTOR, STAGE_CONFIG } from "./const"

import { FigureConfig } from "./types"

export const scale = (image?: HTMLImageElement): FigureConfig | null => {
  if (isNil(image)) {
    return null
  }

  const ratio = Math.min(STAGE_CONFIG.width / image.width, STAGE_CONFIG.height / image.height)
  const x = STAGE_CONFIG.width / SCALE_FACTOR - (image.width / SCALE_FACTOR) * ratio
  const y = STAGE_CONFIG.height / SCALE_FACTOR - (image.height / SCALE_FACTOR) * ratio

  const width = image.width * ratio
  const height = image.height * ratio

  return {
    x,
    y,
    width,
    height,
  }
}

export const models = async () => {
  try {
    await Promise.all([nets.tinyFaceDetector.loadFromUri("/models"), nets.faceLandmark68Net.loadFromUri("/models")])
  } catch (error) {
    console.error(error)
  }
}

export const coordinate = (position: number): number => {
  return (position - LASER_SIZE) / SCALE_FACTOR
}

export const average = (points: Point[] | undefined): IPoint | undefined => {
  if (isNil(points)) {
    return undefined
  }

  const { x, y } = points.reduce(
    (total, point) => ({
      x: total.x + point.x,
      y: total.y + point.y,
    }),
    { x: 0, y: 0 }
  )

  return {
    x: coordinate(x / points.length),
    y: coordinate(y / points.length),
  }
}

export const detect = async () => {
  const face = document.querySelector("canvas") as HTMLCanvasElement
  const detector = await detectSingleFace(face, new TinyFaceDetectorOptions()).withFaceLandmarks()

  const left = average(detector?.landmarks.getLeftEye())
  const right = average(detector?.landmarks.getRightEye())

  return {
    left,
    right,
  }
}
