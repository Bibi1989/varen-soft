import React from "react";

import { theme } from "constants/theme";
import { ButtonStyle } from "./style";

type Props = {
  label: string;
  background?: string;
  color?: string;
};

const CustomButton: React.FC<Props> = ({
  label,
  background = theme.text,
  color,
}) => {
  return (
    <ButtonStyle background={background} color={color}>
      {label}
    </ButtonStyle>
  );
};

export default CustomButton;
