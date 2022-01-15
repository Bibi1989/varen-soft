import * as React from "react";
import { SVGProps } from "react";

const BlueArrowDow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20px"
    height="20px"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.667 6.667 8 9.333 5.333 6.667"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BlueArrowDow;
