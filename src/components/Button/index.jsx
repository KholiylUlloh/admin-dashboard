import React from "react";
import { Button } from "./style";

const CustomButton = ({
  children,
  rounded,
  mr,
  ml,
  mt,
  mb,
  p,
  pr,
  pl,
  pt,
  pb,
  onClick,
  width,
  height,
}) => {
  return (
    <Button
      rounded={rounded}
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      p={p}
      pr={pr}
      pl={pl}
      pt={pt}
      pb={pb}
      onClick={onClick}
      width={width}
      height={height}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
