import React from "react";
import { useDropzone } from "react-dropzone";

import Text from "../components/Text";
import Grid from "../components/Grid";
import Button from "../components/Button";

/**
 * Types
 */
interface Props {
  onDrop: (files: File[]) => void;
}

const Info: React.FC<Props> = ({ onDrop }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <Grid>
      <Text>App description and something else</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius erat dui, vel vestibulum erat
        egestas condimentum. Curabitur sed mauris id ex consectetur mattis ut et mi.
      </Text>

      <Button {...getRootProps()}>
        Upload Photo
        <input {...getInputProps()} accept="image/*" />
      </Button>
    </Grid>
  );
};

export default Info;
