import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { rem } from "polished";

import Text from "../components/Text";
import Button from "../components/Button";
import Title from "../components/Title";

/**
 * Types
 */
interface Props {
  onDrop: (files: File[]) => void;
}
interface WrapperProps {}

const Wrapper = styled.header<WrapperProps>`
  text-align: center;
`;

const Info: React.FC<Props> = ({ onDrop }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <Wrapper>
      <Title>Lazer Yourself</Title>
      <Text>
        Are you a true brrrrliever? <br />
        Choose your lazer eyes and tell the world!
      </Text>

      <Button {...getRootProps()}>
        Upload Photo
        <input {...getInputProps()} accept="image/*" />
      </Button>
    </Wrapper>
  );
};

export default Info;
