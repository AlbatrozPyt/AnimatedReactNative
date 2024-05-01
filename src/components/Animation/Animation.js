import { useState } from "react";
import { TextButton } from "../Button/style";
import { BoxAnimation } from "./style";
import { Animated } from "react-native";

export const Animation = () => {

  return (
    <BoxAnimation>
      <TextButton style={{ color: "black" }}>Animação</TextButton>
    </BoxAnimation>
  );
};
