import React from "react";

import { Container } from "./style";

type Props = {
  background?: string;
};

const Card: React.FC<Props> = ({ children, background = "#ffffff" }) => {
  return <Container background={background}>{children}</Container>;
};

export default Card;
