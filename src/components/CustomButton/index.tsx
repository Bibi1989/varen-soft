import React from "react";
import { theme } from "../../constants/theme";
import { ButtonStyle } from "./style";

type Props = {
  label: string;
  background?: string;
};

const CustomButton: React.FC<Props> = ({ label, background = theme.text }) => {
  return <ButtonStyle background={background}>{label}</ButtonStyle>;
};

export default CustomButton;
