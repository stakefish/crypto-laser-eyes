import React from "react"
import { useDropzone } from "react-dropzone"
import styled from "styled-components"

import SvgIcon from "../components/SvgIcon"
import Text from "../components/Text"
import Button from "../components/Button"
import Title from "../components/Title"

/**
 * Types
 */
interface Props {
  onDrop: (files: File[]) => void
}
interface WrapperProps {}

const Wrapper = styled.div<WrapperProps>`
  text-align: center;

  @media all and (max-width: 1024px) {
    margin-bottom: 30px;
  }

  @media all and (max-width: 580px) {
    margin-bottom: 16px;

    button i {
      position: absolute;
      left: 4px;
      top: 0;
      margin: 0;
    }
  }
`

const Info: React.FC<Props> = ({ onDrop }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  })

  return (
    <Wrapper>
      <Title>
        Laser <br />
        Yourself
      </Title>
      <Text>
        Are you a true brrrrliever? <br />
        Choose your laser eyes and tell the world!
      </Text>

      <Button {...getRootProps()}>
        <SvgIcon iconKey="photo" />
        <span>Pick Photo</span>
        <input {...getInputProps()} accept="image/*" />
      </Button>
    </Wrapper>
  )
}

export default Info
