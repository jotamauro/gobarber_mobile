import React, { FC } from "react";
import { Container, ButtonText } from "./styles";
import { ButtonProps } from "./typings";

export const Button: FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);
