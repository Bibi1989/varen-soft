import React from "react";

import { H1 } from "./style";

const obj: any = {
  16: "16px",
  20: "20px",
  24: "24px",
  36: "36px",
  40: "40px",
  48: "48px",
  64: "64px",
};

// const obj: any = {
//     '16': "16px",
//     '20': "20px",
//     '24': "24px",
//     '36': "36px",
//     '40': "40px",
//     '48': "48px",
//     '64': "64px",
//   };

type Props = {
  size?: number;
};

const Title: React.FC<Props> = ({ size = 24, children }) => {
  return <H1 size={obj[`${size}`] ?? "24px"}>{children}</H1>;
};

export default Title;
